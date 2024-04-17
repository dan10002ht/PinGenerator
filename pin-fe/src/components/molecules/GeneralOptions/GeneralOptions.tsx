import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatLineSpacing,
  FormatTextdirectionLToR,
  FormatTextdirectionRToL,
  FormatUnderlined,
  Redo,
  TextFields,
  Undo,
  VerticalAlignBottom,
  VerticalAlignCenter,
  VerticalAlignTop,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import CommonOptions from "./CommonOptions";
import { EditorPanelContext } from "../../../contexts/EditorPanelContext";
import { TYPE_BOX, TYPE_TEXT } from "../../../const/default";
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
  const { selectedComponent, handleChangeStyles } =
    useContext(EditorPanelContext);

  const currentStyles = selectedComponent?.styles || {};

  const textOptions = [
    {
      label: "Font Size",
      children: (
        <SizeNumberSettings
          value={currentStyles.fontSize?.replace("px", "")}
          onChange={(e: any) => {
            handleChangeStyles({
              key: "fontSize",
              value: `${e.target.value}px`,
            });
          }}
        />
      ),
      isCustomChildren: true,
    },
    {
      label: "Text color",
      children: <></>,
      isCustomButton: true,
    },
    {
      label: "Bold",
      children: (
        <FormatBold
          color={currentStyles.fontWeight === "bold" ? "secondary" : "primary"}
        />
      ),
      onClick: () =>
        handleChangeStyles({
          key: "fontWeight",
          value: currentStyles.fontWeight === "bold" ? "normal" : "bold",
        }),
    },
    {
      label: "Italic",
      children: (
        <FormatItalic
          color={currentStyles.fontStyle === "italic" ? "secondary" : "primary"}
        />
      ),
      onClick: () =>
        handleChangeStyles({
          key: "fontStyle",
          value: currentStyles.fontStyle === "italic" ? "unset" : "italic",
        }),
    },
    {
      label: "Underline",
      children: (
        <FormatUnderlined
          color={
            currentStyles.textDecoration === "underline"
              ? "secondary"
              : "primary"
          }
        />
      ),
      onClick: () =>
        handleChangeStyles({
          key: "textDecoration",
          value:
            currentStyles.textDecoration === "underline"
              ? "unset"
              : "underline",
        }),
    },
    {
      label: "Capitalize",
      children: (
        <TextFields
          color={
            currentStyles.textTransform === "uppercase"
              ? "secondary"
              : "primary"
          }
        />
      ),
      onClick: () =>
        handleChangeStyles({
          key: "textTransform",
          value:
            currentStyles.textTransform === "uppercase" ? "unset" : "uppercase",
        }),
    },
    {
      label: "Alignment",
      children: (() => {
        switch (currentStyles.justifyContent) {
          case "center":
            return <FormatAlignCenter color="secondary"/>;
          case "flex-start":
            return <FormatAlignLeft color="secondary"/>;
          case "flex-end":
            return <FormatAlignRight color="secondary"/>;
        }
      })(),
      onClick: () => {
        handleChangeStyles({
          key: 'justifyContent',
          value: (() => {
            switch (currentStyles.justifyContent) {
              case "center":
                return "flex-end";
              case "flex-end":
                return "flex-start";
              case "flex-start":
                return "center";
            }
          })()
        })
      },
    },
    {
      label: "Vertical alignment",
      children: (() => {
        switch (currentStyles.alignItems) {
          case "center":
            return <VerticalAlignCenter color="secondary"/>;
          case "flex-end":
            return <VerticalAlignBottom color="secondary"/>;
          case "flex-start":
            return <VerticalAlignTop color="secondary"/>;
        }
      })(),
      onClick: () => {
        handleChangeStyles({
          key: 'alignItems',
          value: (() => {
            switch (currentStyles.alignItems) {
              case "center":
                return "flex-end";
              case "flex-end":
                return "flex-start";
              case "flex-start":
                return "center";
            }
          })()
        })
      }
    },
    {
      label: "Direction",
      children: currentStyles.direction === 'ltr' ? <FormatTextdirectionLToR color="secondary"/> : <FormatTextdirectionRToL color="secondary"/>,
      onClick: () => {
        handleChangeStyles({
          key: 'direction',
          value: currentStyles.direction === 'ltr' ? 'rtl' : 'ltr'
        })
      }
    },
    {
      label: "Spacing",
      children: <FormatLineSpacing />,
    },
  ];

  const boxOptions = [
    {
      label: "Background color",
      children: <></>,
      onClick: () => {}
    },
    {
      label: ""
    }
  ]


  switch (selectedComponent?.type) {
    case TYPE_TEXT:
      return textOptions.map((x) => (
        <OptionButton
          children={x.children}
          onClick={x.onClick}
          isCustomButton={x.isCustomButton}
          isCustomChildren={x.isCustomChildren}
          label={x.label}
        />
      ));
    case TYPE_BOX:
      return   
  }
};
