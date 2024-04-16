import {
  FormatAlignCenter,
  FormatBold,
  FormatItalic,
  FormatLineSpacing,
  FormatTextdirectionLToR,
  FormatUnderlined,
  Redo,
  TextFields,
  Undo,
  VerticalAlignCenter,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import CommonOptions from "./CommonOptions";
import { EditorPanelContext } from "../../../contexts/EditorPanelContext";
import { TYPE_TEXT } from "../../../const/default";
import OptionButton from "../../atoms/OptionButton/OptionButton";
import SizeNumberSettings from "./Options/SizeNumberSettings/SizeNumberSettings";

export default function GeneralOptions() {
  const { selectedType } = useContext(EditorPanelContext);

  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <CommonOptions />
      <SpecificOptions />
    </Box>
  );
}

const SpecificOptions = () => {
  const { selectedType } = useContext(EditorPanelContext);

  const textOptions = [
    {
      label: "Font Size",
      children: <SizeNumberSettings />,
      isCustomChildren: true,
    },
    {
      label: "Text color",
      children: <></>,
      isCustomButton: true,
    },
    {
      label: "Bold",
      children: <FormatBold />,
    },
    {
      label: "Italic",
      children: <FormatItalic />,
    },
    {
      label: "Underline",
      children: <FormatUnderlined />,
    },
    {
      label: "Capitalize",
      children: <TextFields />,
    },
    {
      label: "Alignment",
      children: <FormatAlignCenter />,
    },
    {
      label: "Vertical alignment",
      children: <VerticalAlignCenter />,
    },
    {
      label: "Direction",
      children: <FormatTextdirectionLToR />,
    },
    {
      label: "Spacing",
      children: <FormatLineSpacing />,
    },
  ];

  return textOptions.map((x) => (
    <OptionButton
      children={x.children}
      onClick={x.onClick}
      isCustomButton={x.isCustomButton}
      isCustomChildren={x.isCustomChildren}
    />
  ));
};
