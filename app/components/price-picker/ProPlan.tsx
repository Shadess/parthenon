import { View } from 'react-native';
import { Header2Text } from '../styled/text';
import { IPlanInfo, PriceChoice } from './PricePicker';

export interface IPlanScreenProps {
  item: IPlanInfo;
  paymentChoice: PriceChoice;
}

export default function ProPlan({ item, paymentChoice }: IPlanScreenProps) {
  let subTitle = `${item.priceMonthlyBase}/month`;
  let annuallyTitle = ` (${item.priceAnnuallyTotal}/year)`;

  const isAnnual = paymentChoice === PriceChoice.annually;

  if (isAnnual) {
    subTitle = `${item.priceMonthlyAnnually}/month`;
  }

  return (
    <>
      <Header2Text className="font-bold text-pgreen">{item.title}</Header2Text>
      <View className="flex flex-row">
        <Header2Text className="font-bold text-white">{subTitle}</Header2Text>
        {isAnnual && (
          <Header2Text className="opacity-40 text-white">
            {annuallyTitle}
          </Header2Text>
        )}
      </View>
    </>
  );
}
