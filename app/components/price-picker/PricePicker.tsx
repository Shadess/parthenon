import { useCallback, useRef, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SmallText } from '../styled/text';
import BreadcrumbBubble from '../bread-crumb-bubble/BreadCrumbBubble';
import { IPlanInfo } from '../../interfaces';
import { PaidPlansType, PriceChoice } from '../../enums';
import { IMAGES } from '../../constants';
import PlanDetails from './PlanDetails';

const PaidPlans: IPlanInfo[] = [
  {
    benefits: [
      {
        blurb: 'Connect all of your accounts (limit on free tier is 3)',
        icon: IMAGES.Cash,
        title: 'Unlimited Accounts',
      },
      {
        blurb: 'Get proactive financial insights from Parthean AI',
        icon: IMAGES.Bulb,
        title: 'Proactive tips',
      },
      {
        blurb: "You'll get early access to our most powerful AI tools",
        icon: IMAGES.Rocket,
        title: 'New AI Tools',
      },
    ],
    priceAnnuallyTotal: '69.99',
    priceMonthlyAnnually: '$5.83',
    priceMonthlyBase: '$9.99',
    title: 'Parthean Pro',
    type: PaidPlansType.pro,
  },
  {
    benefits: [
      {
        blurb:
          'Unlimited calls and chats with your very personal finance coach',
        icon: IMAGES.CatieCoach,
        title: 'Human Coaching',
      },
      {
        blurb:
          'Unlimited accounts, proactive financial tips from Parthean AI, and our new, most powerful AI tools',
        icon: IMAGES.Rocket,
        title: 'All Pro Features',
      },
    ],
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
  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

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
        onViewableItemsChanged={onViewCallback}
        pagingEnabled
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item, index }) => (
          <View className="bg-pgrey mx-3 p-8 rounded-lg w-329px" key={index}>
            <PlanDetails item={item} paymentChoice={paymentChoice} />
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
