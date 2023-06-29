import { useCallback, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SmallText } from '../styled/text';
import BreadcrumbBubble from '../bread-crumb-bubble/BreadCrumbBubble';

export enum PriceChoice {
  annually = 'ANNUALLY',
  monthly = 'MONTHLY',
}

enum PaidPlansType {
  pro = 'PRO',
  proCoaching = 'PRO_COACHING',
}

const PaidPlans = [
  {
    priceAnnuallyTotal: '69.99',
    priceMonthlyAnnually: '$5.83',
    priceMonthlyBase: '$9.99',
    title: 'Parthean Pro',
    type: PaidPlansType.pro,
  },
  {
    priceAnnuallyTotal: '879.99',
    priceMonthlyAnnually: '$66.67',
    priceMonthlyBase: '$79.99',
    title: 'Parthean Pro + Coaching',
    type: PaidPlansType.proCoaching,
  },
];

export default function PricePicker() {
  const [flatlistIndex, setFlatlistIndex] = useState(0);
  const [paymentChoice, setPaymentChoice] = useState<PriceChoice>(
    PriceChoice.monthly,
  );

  let monthBGColor = 'bg-pgreen';
  let monthTextColor = 'text-black';
  let annualBGCOlor = 'bg-pgrey';
  let annualTextColor = 'text-white';

  if (paymentChoice === PriceChoice.annually) {
    monthBGColor = 'bg-pgrey';
    monthTextColor = 'text-white';
    annualBGCOlor = 'bg-pgreen';
    annualTextColor = 'text-black';
  }

  const onViewCallback = useCallback(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        const currentIndex = viewableItems[0].index;
        setFlatlistIndex(currentIndex);
      }
    },
    [setFlatlistIndex],
  );
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View className="items-center mt-6">
      <View className="bg bg-pgrey flex flex-row h-30px mb-6 rounded-full w-150px">
        <Pressable
          className={`bg flex-1 h-30px items-center justify-center rounded-full ${monthBGColor}`}
          onPress={() => setPaymentChoice(PriceChoice.monthly)}
        >
          <SmallText className={`${monthTextColor}`}>Monthly</SmallText>
        </Pressable>

        <Pressable
          className={`bg flex-1 h-30px items-center justify-center rounded-full ${annualBGCOlor}`}
          onPress={() => setPaymentChoice(PriceChoice.annually)}
        >
          <SmallText className={`${annualTextColor}`}>Annually</SmallText>
        </Pressable>
      </View>

      <FlatList
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={PaidPlans}
        pagingEnabled
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item, index }) => (
          <View className="bg-pgrey mx-3 p-8 rounded-lg w-329px" key={index}>
            <Text>hey diddle2</Text>
          </View>
        )}
      />

      <View className="flex flex-row justify-center mt-4">
        {[...Array(PaidPlans.length).keys()].map((imageIndex) => (
          <BreadcrumbBubble
            checked={imageIndex === flatlistIndex}
            key={imageIndex}
          />
        ))}
      </View>
    </View>
  );
}
