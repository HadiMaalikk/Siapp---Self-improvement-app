import { Text, View } from "react-native";
import { Link } from "expo-router"; 

export default function Index() {
  return (
    <View className = "flex-1 items-center justify-center bg-maingreen">
      <Text className="text-green-500">Siapp - Self Improvement App</Text>
      <Link href="/hi" className="text-blue-500 font-bold">Click me to BUY</Link>
    </View>
  );
}
