import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};
export default function Button({ title, onPress }: Props) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#c0e864",
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
