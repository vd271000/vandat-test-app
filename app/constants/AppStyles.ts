import { StyleSheet } from "react-native";
import { AppColors } from "../assets";

export const AppStyles = {
  view: StyleSheet.create({
    shadow1: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    shadow2: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 7.49,
      elevation: 12,
    },
    shadow3: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
      elevation: 21,
    },
    border: {
      borderWidth: 1,
      borderColor: AppColors.gray100,
    },
    contentCenter: {
      justifyContent: "center",
      alignItems: "center",
    },
    spaceCenter: {
      justifyContent: "space-between",
      alignItems: "center",
    },
    section: {
      backgroundColor: AppColors.white,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: AppColors.gray100,
    },
    absoluteFill: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: "absolute",
    },
  }),
  flatList: StyleSheet.create({
    container: {
      overflow: "hidden",
      flex: 1,
    },
    listContentSection: {
      marginTop: 16,
      marginBottom: 16,
      overflow: "visible",
    },
    contentSection: {
      paddingHorizontal: 16,
      marginHorizontal: 16,
      backgroundColor: AppColors.white,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: AppColors.gray100,
    },
    contentSectionNoPadding: {
      marginHorizontal: 16,
      backgroundColor: AppColors.white,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: AppColors.gray100,
    },
  }),
  viewSwipeable: StyleSheet.create({
    container: { flexDirection: "row", backgroundColor: "#fff" },
    buttonDelete: {
      width: 72,
      backgroundColor: AppColors.red400,
      justifyContent: "center",
      alignItems: "center",
    },
    btnNormal: {
      width: 72,
      backgroundColor: AppColors.blue400,
      justifyContent: "center",
      alignItems: "center",
    },
  }),
};
