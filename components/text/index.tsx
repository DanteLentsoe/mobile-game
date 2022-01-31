import React from "react";
import { Text, StyleSheet } from "react-native";

const TextStyle = (props: any) => {
  return (
    <Text style={{ ...styles.body, ...props.sytle }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default TextStyle;
