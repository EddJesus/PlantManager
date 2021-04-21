import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export const Confirmation: React.FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.content}>
        <Text style={style.emoji}>😁️</Text>
        <Text style={style.title}>Prontinho</Text>
        <Text style={style.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={style.footer}>
          <Button title="Começar"/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
    color: colors.white,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
