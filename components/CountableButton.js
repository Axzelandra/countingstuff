import { TouchableOpacity, Text } from "react-native";

import { CommonStyles } from "../styles/CommonStyles";

export const CountableButton = ({ label, submit }) => (
  <TouchableOpacity style={CommonStyles.button} onPress={submit}>
    <Text style={CommonStyles.textItem}>{label}</Text>
  </TouchableOpacity>
);
