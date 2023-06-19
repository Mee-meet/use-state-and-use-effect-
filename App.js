import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const App = () => {
  const [count, setcount] = useState(1);

  useEffect(() => {
    console.warn("test use effect", count);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>{count}</Text>
      <Button title="update state" onPress={() => setcount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default App;
