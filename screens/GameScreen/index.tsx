import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Alert, Image } from "react-native";
import MainButton from "../../components/buttons/mainButton";
import NumberWrapper from "../../components/numberWrapper";
import Card from "../../components/card";
import TitleText from "../../components/text/titleText";

//@ts-ignore
const generateRandomNum = (min: number, max: number, exclude: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const generatedNum = Math.random() * (max - min);
  const randomNum = Math.floor(generatedNum) + min;

  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};
const GameScreen = (props: any) => {
  const [currentGuessNum, setCurrentGuessNum] = useState(
    generateRandomNum(1, 100, props.userNum)
  );

  const [rounds, setRounds] = useState(0);
  const currentLower = useRef(1);
  const currentHiger = useRef(100);

  // destructure props in order to get two vaiables
  const { onGameOver, userNum } = props;
  useEffect(() => {
    if (currentGuessNum === userNum) {
      onGameOver(rounds);
    }
  }, [currentGuessNum, onGameOver, userNum]);

  const additionalGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuessNum < props.userNum) ||
      (direction === "greater" && currentGuessNum > props.userNum)
    ) {
      Alert.alert("Not Quite ", "Not a correct number ", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      // saved num is higher then the guessed number
      currentHiger.current = currentGuessNum;
    } else {
      currentLower.current = currentGuessNum;
    }

    const nextNum = generateRandomNum(
      currentLower.current,
      currentHiger.current,
      currentGuessNum
    );

    setCurrentGuessNum(nextNum);
    setRounds((currenRounds) => currenRounds + 1);
  };
  return (
    <>
      <View style={styles.screen}>
        <TitleText>Opponent's Guess</TitleText>
        <NumberWrapper>{currentGuessNum}</NumberWrapper>
        <Image
          source={require("../../assets/undraw_Joyride_re_968t.png")}
          style={styles.img}
        />
        <Card style={styles.buttonContainer}>
          <MainButton onPress={additionalGuessHandler.bind(this, "lower")}>
            Lower
          </MainButton>
          <MainButton onPress={additionalGuessHandler.bind(this, "greater")}>
            Greater
          </MainButton>
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  img: {
    width: "90%",
    height: "40%",
  },
});

export default GameScreen;
