import React from "react";

import {
  BarbellSharp,
  FileTrayFull,
  FileTrayFullOutline,
  List,
  ListOutline,
  BarChart,
  BarChartOutline,
  EllipsisVertical,
  Edit,
  Checkmark,
  CheckmarkSharp,
  CopyOutline,
  TrashOutline,
  ReorderThreeOutline,
  ArrowBackSharp,
  MenuSharp,
  Calculator,
  CalculatorOutline,
  SettingsOutline,
  SettingsSharp,
  DownloadOutline,
  Save,
  Backspace,
} from "./Icons";

interface Props {
  name: string;
}

const Icon = (props: Props) => {
  const icons = [
    "barbell-sharp",
    "file-tray-full",
    "file-tray-full-outline",
    "bar-chart",
    "bar-chart-outline",
    "settings-outline",
    "settings-sharp",
    "checkmark",
    "ellipsis-vertical",
    "trash-outline",
    "reorder-three-outline",
    "edit",
    "copy-outline",
    "checkmark-sharp",
    "ellipsis-vertical",
    "menu-sharp",
    "download-outline",
    "save",
    "backspace",
    "arrow-back-sharp",
    "list",
    "list-outline",
  ];

  switch(props.name) {
    case "barbell-sharp":
      return (
        <BarbellSharp />
      );
      break;

    case "file-tray-full":
      return (
        <FileTrayFull />
      );
      break;

    case "file-tray-full-outline":
      return (
        <FileTrayFullOutline />
      );
      break;

    case "bar-chart":
      return (
        <BarChart />
      );
      break;

    case "bar-chart-outline":
      return (
        <BarChartOutline />
      );
      break;

    case "settings-outline":
      return (
        <SettingsOutline />
      );
      break;

    case "settings-sharp":
      return (
        <SettingsSharp />
      );
      break;

    case "checkmark":
      return (
        <Checkmark />
      );
      break;

    case "checkmark-sharp":
      return (
        <CheckmarkSharp />
      );
      break;

    case "ellipsis-vertical":
      return (
        <EllipsisVertical />
      );
      break;

    case "trash-outline":
      return (
        <TrashOutline />
      );
      break;

    case "reorder-three-outline":
      return (
        <ReorderThreeOutline />
      );
      break;

    case "edit":
      return (
        <Edit />
      );
      break;

    case "copy-outline":
      return (
        <CopyOutline />
      );
      break;

    case "menu-sharp":
      return (
        <MenuSharp />
      );
      break;

    case "download-outline":
      return (
        <DownloadOutline />
      );
      break;

    case "save":
      return (
        <Save />
      );
      break;

    case "backspace":
      return (
        <Backspace />
      );
      break;

    case "calculator":
      return (
        <Calculator />
      );
      break;

    case "calculator-outline":
      return (
        <CalculatorOutline />
      );
      break;

    case "arrow-back-sharp":
      return (
        <ArrowBackSharp />
      );
      break;

    case "list":
      return (
        <List />
      );
      break;

    case "list-outline":
      return (
        <ListOutline />
      );
      break;

    default:
      return null;
      break;
  }
}

export default Icon;
