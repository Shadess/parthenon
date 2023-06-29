import React from 'react';
import { View } from 'react-native';

interface IBreadcrumbBubbleProps {
  checked: boolean;
}

export default function BreadcrumbBubble({ checked }) {
  const backgroundColor = checked ? 'bg-plightGrey' : 'bg-plightBlack';
  return (
    <View
      className={`border border-black rounded-full w-2.5 h-2.5 mr-1 ${backgroundColor}`}
    />
  );
}
