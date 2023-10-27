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
  color: string;
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
        <BarbellSharp color={props.color} />
      );
      break;

    case "file-tray-full":
      return (
        <FileTrayFull color={props.color} />
      );
      break;

    case "file-tray-full-outline":
      return (
        <FileTrayFullOutline color={props.color} />
      );
      break;

    case "bar-chart":
      return (
        <BarChart color={props.color} />
      );
      break;

    case "bar-chart-outline":
      return (
        <BarChartOutline color={props.color} />
      );
      break;

    case "settings-outline":
      return (
        <SettingsOutline color={props.color} />
      );
      break;

    case "settings-sharp":
      return (
        <SettingsSharp color={props.color} />
      );
      break;

    case "checkmark":
      return (
        <Checkmark color={props.color} />
      );
      break;

    case "checkmark-sharp":
      return (
        <CheckmarkSharp color={props.color} />
      );
      break;

    case "ellipsis-vertical":
      return (
        <EllipsisVertical color={props.color} />
      );
      break;

    case "trash-outline":
      return (
        <TrashOutline color={props.color} />
      );
      break;

    case "reorder-three-outline":
      return (
        <ReorderThreeOutline color={props.color} />
      );
      break;

    case "edit":
      return (
        <Edit color={props.color} />
      );
      break;

    case "copy-outline":
      return (
        <CopyOutline color={props.color} />
      );
      break;

    case "menu-sharp":
      return (
        <MenuSharp color={props.color} />
      );
      break;

    case "download-outline":
      return (
        <DownloadOutline color={props.color} />
      );
      break;

    case "save":
      return (
        <Save color={props.color} />
      );
      break;

    case "backspace":
      return (
        <Backspace color={props.color} />
      );
      break;

    case "calculator":
      return (
        <Calculator color={props.color} />
      );
      break;

    case "calculator-outline":
      return (
        <CalculatorOutline color={props.color} />
      );
      break;

    case "arrow-back-sharp":
      return (
        <ArrowBackSharp color={props.color} />
      );
      break;

    case "list":
      return (
        <List color={props.color} />
      );
      break;

    case "list-outline":
      return (
        <ListOutline color={props.color} />
      );
      break;

    default:
      return null;
      break;
  }
}

export default Icon;
