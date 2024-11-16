import { AppColors } from "@/app/assets";
import { AppTypo } from "@/app/constants";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { HStack } from "../View";
import { VectorIcon } from "../Icon";

interface AppButtonProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?: any;
  isChildren?: any;
  nameIcon?: any;
  icoStyle?: any;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  containerStyle,
  textStyle,
  onPress,
  isChildren,
  nameIcon,
  icoStyle,
}) => {
  const handlePress = () => {
    if (typeof onPress === "function" && onPress) {
      onPress?.();
    }
    return;
  };
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handlePress}
    >
      <HStack style={{ gap: 8 }}>
        {isChildren ? (
          <VectorIcon
            name={nameIcon}
            size={20}
            style={[styles.icoLeft, icoStyle]}
          />
        ) : null}
        <Text numberOfLines={1} style={[styles.titleButton, textStyle]}>
          {title}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.buttonSubmit,
    borderRadius: 8,
  },
  titleButton: {
    ...AppTypo.body.semiBold,
  },
  icoLeft: {
    color: AppColors.white,
  },
});

export default AppButton;
