import { View } from 'react-native';
import Main from './screens/main';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />
      <Main />
    </View>
  );
}
