import { styled } from 'styled-components/native';
import { Text } from 'react-native';

export const HeaderText = styled.Text`
  color: #ffffff;
  font-size: 24px;
  line-height: 30px;
`;

export const SubHeaderText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
`;

export const SmallText = styled(Text)`
  color: ${(props: any) => props.color || '#ffffff'};
  font-size: 12px;
  line-height: 15px;
`;
