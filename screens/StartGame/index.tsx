import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import InputField from "../../components/input";
import Colors from "../../utils/theme";
import Card from "../../components/card";
import NumberWrapper from "../../components/numberWrapper";

const StartGameScreen = (props: any) => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [confirmChoice, setConfirmChoice] = useState<boolean>(false);
  const [selectedNum, setSelectedNum] = useState<number | undefined>();

  //entered values
  const numberInputHandler = (entryText: string) => {
    //replace all none numbers
    setEnteredValue(entryText.replace(/[^0-9]/g, ""));
  };

  const resetNumHandler = () => {
    setEnteredValue("");
    setConfirmChoice(false);
  };

  const confirmNumHandler = () => {
    const confirmedSelectedNum = parseInt(enteredValue);

    if (
      isNaN(confirmedSelectedNum) ||
      confirmedSelectedNum <= 0 ||
      confirmedSelectedNum > 99
    ) {
      // return alert messages
      Alert.alert("Not a valid number", "Enter a number between 1 to a 100", [
        { text: "Okay", style: "destructive", onPress: resetNumHandler },
      ]);
      return;
    }

    try {
      setConfirmChoice(true);
      setEnteredValue("");
      setSelectedNum(confirmedSelectedNum);
      Keyboard.dismiss();
    } catch (err) {
      console.log(err);
    }
  };

  let validNum: any;

  if (confirmChoice) {
    validNum = (
      <Card style={styles.gameStartBox}>
        <Text>Selected Number</Text>
        <NumberWrapper>{selectedNum}</NumberWrapper>
        <Button
          title="Start Game"
          onPress={() => {
            props.startGame(selectedNum);
          }}
        />
      </Card>
    );
  }
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.screen}>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>Start a game</Text>
            <InputField
              style={styles.input}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType={"number-pad"}
              maxLength={2}
              onChangeText={numberInputHandler}
              value={enteredValue}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyles}>
                <Button
                  title="Reset"
                  onPress={resetNumHandler}
                  color={Colors.secondary}
                />
              </View>
              <View style={styles.buttonStyles}>
                <Button
                  title="Confirm"
                  onPress={confirmNumHandler}
                  color={Colors.primary}
                />
              </View>
            </View>
          </Card>
          {validNum}
        </View>
      </TouchableWithoutFeedback>
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
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonStyles: {
    width: 100,
  },
  input: {
    minWidth: 50,
    textAlign: "center",
  },
  gameStartBox: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
