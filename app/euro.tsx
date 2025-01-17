import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import { getEUR } from "../services/awesomeapi";
import formatMoney from "../services/formatMoney";

export default function Screen() {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const updateCurrency = async () => {
    setLoading(true);
    const dolar = await getEUR();
    setLoading(false);
    if (dolar) {
      setCurrentValue(dolar);
    }
  };
  useEffect(() => {
    updateCurrency();
  }, []);
  return (
    <View style={styles.container}>
      {loading && <Text>Carregando...</Text>}
      {!loading && (
        <>
          <Image
            source={require("../assets/euro.png")}
            resizeMode="contain"
            style={styles.img}
          ></Image>
          <Text style={styles.h2}>O Euro está:</Text>
          <Text style={styles.currencyText}>
            {formatMoney(currentValue.toString())}
          </Text>
          <Button title="Atualizar" onPress={updateCurrency}></Button>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b1c2d",
    paddingHorizontal: 20,
  },
  img: {
    width: 200,
    height: 180,
  },
  h2: {
    color: "#ccc",
    fontSize: 24,
    marginTop: 30,
  },
  currencyText: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 50,
  },
});
