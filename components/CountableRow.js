import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const CountableRow = ({
  countable,
  changeCount,
  index,
  removeCountable,
}) => (
  <View style={CommonStyles.row}>
    <View style={CommonStyles.nameColumn}>
      <Text style={CommonStyles.textItem}>{countable.name}</Text>
      <Text style={CommonStyles.textItem}>{countable.count}</Text>
    </View>
    <View style={[CommonStyles.buttonColumn, CommonStyles.counterContainer]}>
      <CountableButton
        label="+"
        submit={() => {
          changeCount(1, index);
        }}
      />
      <CountableButton
        label="-"
        submit={() => {
          changeCount(-1, index);
        }}
      />
      <TouchableOpacity
        style={CommonStyles.deleteButton}
        onPress={() => {
          removeCountable(index);
        }}
      >
        <Ionicons name="trash" size={20} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);
