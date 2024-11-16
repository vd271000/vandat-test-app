import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon";
import { AppColors, AppIcons } from "@/app/assets";

type SelectViewProps = {
  value: any;
  initSelect?: boolean;
  onSelected?: (name: any, value: boolean) => void;
  children?: React.ReactNode | JSX.Element | JSX.Element[];
  LeftItem?: React.ReactNode | JSX.Element | JSX.Element[];
  RightItem?: React.ReactNode | JSX.Element | JSX.Element[];
};

export const SelectView = ({
  value,
  initSelect,
  onSelected,
  children,
  LeftItem,
  RightItem,
}: SelectViewProps) => {
  const [select, setSelect] = useState(initSelect);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() => {
        setSelect((prev) => !prev);
        onSelected?.(value, !select);
      }}
    >
      {LeftItem}
      {children}
      <View style={{ width: 24, height: 24 }}>
        {select ? (
          <Icon source={AppIcons.ico_check} color={AppColors.blue400} />
        ) : null}
      </View>
      {RightItem}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
