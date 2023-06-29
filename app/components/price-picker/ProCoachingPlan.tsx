import { Header2Text } from '../styled/text';

export default function ProCoachingPlan({ item, paymentChoice }) {
  const subTitle = `${item.priceMonthlyBase}/month`;

  return (
    <>
      <Header2Text className="font-bold text-pgreen">{item.title}</Header2Text>
      <Header2Text className="font-bold text-white">{subTitle}</Header2Text>
    </>
  );
}
