import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNum, setUserNum] = useState<number | undefined | null>();
  const [numGuessRounds, setGuessRounds] = useState<number>(0);

  const setNumHandler = (selectedNum: number) => {
    setUserNum(selectedNum);
  };

  const gameoverHandler = (rounds: number) => {
    setGuessRounds(rounds);
  };

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNum(null);
  };

  let contentPage = <StartGameScreen startGame={setNumHandler} />;

  if (userNum && numGuessRounds <= 0) {
    contentPage = <GameScreen userNum={userNum} onGameOver={gameoverHandler} />;
  } else if (numGuessRounds > 0) {
    contentPage = (
      <GameOver numRounds={numGuessRounds} newGame={newGameHandler} />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Guess The Number" />
      {contentPage}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
