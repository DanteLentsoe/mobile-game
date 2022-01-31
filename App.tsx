import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/header";
import StartGameScreen from "./screens/StartGame";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNum, setUserNum] = useState<number | undefined | null>();
  const [loadedData, setLoadedData] = useState(false);
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

  if (!loadedData) {
    return (
      //@ts-ignore
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoadedData(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

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
