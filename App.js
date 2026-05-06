import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://pt.pngtree.com/freepng/icon-of-sun_8823429.html",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>Cartão</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
