import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { AddRow } from "./components/AddRow";
import { CountableRow } from "./components/CountableRow";
import {
  clearCountables,
  loadCountables,
  saveCountables,
} from "./storage/CountableStorage";
import { CommonStyles } from "./styles/CommonStyles";

export default function App() {
  const [countables, setCountables] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadCountables().then((result) => {
      setCountables(result);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveCountables(countables);
    }
  }, [countables, isLoaded]);

  const changeCount = (amount, index) => {
    const newState = [...countables];
    newState[index].count += amount;
    setCountables(newState);
  };
  //Lägger med en check för att inte få samma namn eller tomma namn
  const addNewCountable = (name) => {
    const trimmedName = name.trim().toLowerCase();

    if (trimmedName === "") {
      alert("Namnet får inte vara tomt");
      return;
    }

    if (countables.some((item) => item.name.toLowerCase() === trimmedName)) {
      alert("Detta namn finns redan!");
      return;
    }

    const newState = [...countables, { name: trimmedName, count: 0 }];
    setCountables(newState);
  };
  //Tar bort ALLT på listan
  const clearAll = async () => {
    await clearCountables();
    setCountables([]);
  };
  //Tar bort en bara
  const removeCountable = (index) => {
    const newState = [...countables];
    newState.splice(index, 1); // Tar bort objektet vid index
    setCountables(newState);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={CommonStyles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "undefined"}
          style={CommonStyles.container}
        >
          <ScrollView>
            {countables.map((countable, index) => (
              <CountableRow
                countable={countable}
                key={countable.name}
                changeCount={changeCount}
                removeCountable={removeCountable}
                index={index}
              />
            ))}
          </ScrollView>
          <Button title="Rensa allt" onPress={clearAll} />
          <AddRow addNewCountable={addNewCountable} />
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
