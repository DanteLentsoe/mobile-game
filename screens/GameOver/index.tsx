import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import TitleText from ".././../components/text/titleText";
import MainButton from "../../components/buttons/mainButton";
// import LiquidSwipe from "../../components/slide/liquidSwipe";
const GameOver = (props: any) => {
  return (
    <>
      <View style={styles.screen}>
        {/* <LiquidSwipe /> */}
        <Image
          fadeDuration={1000}
          source={require("../../assets/undraw_well_done_i2wr.png")}
          style={styles.image}
        />
        <Text>You win, Game is Over</Text>
        <Text>
          It took your phone <TitleText>{props.numRounds}</TitleText> Rounds
        </Text>
        <MainButton onPress={() => props.newGame()}>Play Again</MainButton>
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
  image: {
    width: "90%",
    height: "40%",
  },
});

export default GameOver;
