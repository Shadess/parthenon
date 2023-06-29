import { Image, View } from 'react-native';
import { Header2Text, SubHeaderText } from '../styled/text';
import { IPlanInfo } from '../../interfaces';
import { PriceChoice } from '../../enums';

export interface IPlanScreenProps {
  item: IPlanInfo;
  paymentChoice: PriceChoice;
}

export default function PlanDetails({ item, paymentChoice }: IPlanScreenProps) {
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

      {item.benefits.map((ben, index) => (
        <View className="flex flex-row mt-6" key={`${ben.title}-${index}`}>
          <Image source={ben.icon} />

          <View className="ml-8">
            <Header2Text className="font-bold text-white">
              {ben.title}
            </Header2Text>
            <SubHeaderText className="mt-1 opacity-75 text-white">
              {ben.blurb}
            </SubHeaderText>
          </View>
        </View>
      ))}
    </>
  );
}
