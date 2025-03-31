import { StyleSheet } from "react-native";

export const CommonStyles = StyleSheet.create({
  textItem: {
    fontSize: 30,
    fontWeight: "semibold",
    color: "black",
    fontFamily: "Futura",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 8,
    margin: 5,
    paddingEnd: 20,
    paddingStart: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  counterContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  nameColumn: {
    flex: 0.8,
    alignItems: "center",
  },
  //plus och minusknapparna
  buttonColumn: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 7,
    margin: 5,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 100,
  },
  deleteButton: {
    borderRadius: 7,
    margin: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 50,
  },
});
