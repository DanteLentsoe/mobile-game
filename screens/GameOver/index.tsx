import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LiquidSwipe from "../../components/slide/liquidSwipe";
const GameOver = (props: any) => {
  return (
    <>
      <View style={styles.screen}>
        <LiquidSwipe />
        <Text>You win, Game is Over</Text>
        <Text>It took you {props.numRounds} Rounds</Text>
        <Button title={"Play Again"} onPress={() => props.newGame()} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOver;
