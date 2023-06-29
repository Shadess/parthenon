import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { HeaderText, SubHeaderText } from '../components/styled/text';
import PricePicker from '../components/price-picker/PricePicker';
import { IMAGES } from '../constants';

export default function Main() {
  return (
    <SafeAreaView className="flex-1">
      <View className="px-10">
        <Pressable
          onPress={() => {
            console.log('close');
          }}
        >
          <Image className="self-end" source={IMAGES.Exit} />
        </Pressable>

        <HeaderText className="mt-2 text-center text-white">
          Financial coaching and education in your pocket
        </HeaderText>

        <SubHeaderText className="my-2 text-center text-white">
          Upgrade to get the most out of Parthean
        </SubHeaderText>
      </View>

      <PricePicker />

      <View className="px-4 w-full">
        <Pressable className="bg bg-pgreen items-center justify-center mt-8 p-3 rounded-lg w-full">
          <SubHeaderText className="font-bold">Continue</SubHeaderText>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
