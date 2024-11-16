import { AppColors } from "@/app/assets";
import React from "react";
import { View, ViewStyle } from "react-native";

type Props = {
  style?: ViewStyle;
  color?: string;
  width?: number;
  direction?: "vertical" | "horizontal";
};

export const Divider: React.FC<Props> = React.memo(
  ({ color = AppColors.gray100, width = 1, style, direction = "vertical" }) => {
    return (
      <View
        style={[
          { backgroundColor: color },
          direction === "vertical" ? { height: width } : { width: width },
          style,
        ]}
      />
    );
  }
);
