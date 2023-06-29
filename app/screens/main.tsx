import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { HeaderText, SubHeaderText } from '../components/styled/text';
import PricePicker from '../components/price-picker/PricePicker';

export default function Main() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-10">
        <Pressable
          onPress={() => {
            console.log('close');
          }}
        >
          <View className="bg bg-pgrey h-8 relative rounded-full w-8 self-end">
            <Text className="left-7px rotate-45 text-3xl text-white top-0.5">
              +
            </Text>
          </View>
        </Pressable>

        <HeaderText className="mt-2 text-center text-white">
          Financial coaching and education in your pocket
        </HeaderText>

        <SubHeaderText className="my-2 text-center text-white">
          Upgrade to get the most out of Parthean
        </SubHeaderText>
      </View>

      <PricePicker />
    </SafeAreaView>
  );
}
