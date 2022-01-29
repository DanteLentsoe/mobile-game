import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props: any) => {
  return (
    <>
      <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    // shadow props only work on iOS
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    // andriod props for shadow
    elevation: 5,
  },
});

export default Card;
