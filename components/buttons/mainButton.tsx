import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Color from "../../utils/theme";

const MainButton = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View style={{ ...styles.button, ...props.sytle }}>
        <Text style={{ ...styles.btnText, ...props.sytle }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    borderRadius: 12,
    shadowColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
  btnText: {
    color: "white",
    fontFamily: "open-sans",
  },
});

export default MainButton;
