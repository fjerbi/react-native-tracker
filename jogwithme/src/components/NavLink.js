import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
export default withNavigation(NavLink);
