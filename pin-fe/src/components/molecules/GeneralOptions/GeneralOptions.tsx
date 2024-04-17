import {
  BorderAll,
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatItalic,
  FormatLineSpacing,
  FormatTextdirectionLToR,
  FormatTextdirectionRToL,
  FormatUnderlined,
  Label,
  TextFields,
  VerticalAlignBottom,
  VerticalAlignCenter,
  VerticalAlignTop,
} from "@mui/icons-material";
import { Box, Button, Slider, Stack } from "@mui/material";
import React, { useContext } from "react";
import CommonOptions from "./CommonOptions";
import { EditorPanelContext } from "../../../contexts/EditorPanelContext";
import { TYPE_BOX, TYPE_TEXT } from "../../../const/default";
import OptionButton from "../../atoms/OptionButton/OptionButton";
import SizeNumberSettings from "./Options/SizeNumberSettings/SizeNumberSettings";
import PopoverButton from "./Options/ColorSettings/ColorSettings";
import ButtonBox from "../../atoms/ButtonBox/ButtonBox";
import { SketchPicker } from "react-color";

export default function GeneralOptions() {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <CommonOptions />
      <SpecificOptions />
    </Box>
  );
}

const SpecificOptions = () => {
  const { selectedComponent, handleChangeStyles, handleChangeWrapperStyles } =
    useContext(EditorPanelContext);

  const currentStyles = selectedComponent?.styles || {};
  const currentWraperStyles = selectedComponent?.wrapperStyles || {};
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
            return <FormatAlignCenter color="secondary" />;
          case "flex-start":
            return <FormatAlignLeft color="secondary" />;
          case "flex-end":
            return <FormatAlignRight color="secondary" />;
        }
      })(),
      onClick: () => {
        handleChangeStyles({
          key: "justifyContent",
          value: (() => {
            switch (currentStyles.justifyContent) {
              case "center":
                return "flex-end";
              case "flex-end":
                return "flex-start";
              case "flex-start":
                return "center";
            }
          })(),
        });
      },
    },
    {
      label: "Vertical alignment",
      children: (() => {
        switch (currentStyles.alignItems) {
          case "center":
            return <VerticalAlignCenter color="secondary" />;
          case "flex-end":
            return <VerticalAlignBottom color="secondary" />;
          case "flex-start":
            return <VerticalAlignTop color="secondary" />;
        }
      })(),
      onClick: () => {
        handleChangeStyles({
          key: "alignItems",
          value: (() => {
            switch (currentStyles.alignItems) {
              case "center":
                return "flex-end";
              case "flex-end":
                return "flex-start";
              case "flex-start":
                return "center";
            }
          })(),
        });
      },
    },
    {
      label: "Direction",
      children:
        currentStyles.direction === "ltr" ? (
          <FormatTextdirectionLToR color="secondary" />
        ) : (
          <FormatTextdirectionRToL color="secondary" />
        ),
      onClick: () => {
        handleChangeStyles({
          key: "direction",
          value: currentStyles.direction === "ltr" ? "rtl" : "ltr",
        });
      },
    },
    {
      label: "Spacing",
      children: <FormatLineSpacing />,
    },
  ];

  const boxOptions = [
    {
      label: "Background color",
      children: (
        <PopoverButton
          buttonChildren={
            <ButtonBox backgroundColor={currentStyles.backgroundColor} />
          }
        >
          <SketchPicker
            color={currentStyles.backgroundColor}
            onChange={(val: any) => {
              handleChangeStyles({
                key: "backgroundColor",
                value: val.hex,
              });
            }}
          />
        </PopoverButton>
      ),
      isCustomChildren: true,
    },
    {
      label: "Border color",
      children: (
        <PopoverButton
          buttonChildren={<ButtonBox borderColor={currentStyles.borderColor} />}
        >
          <SketchPicker
            color={currentStyles.borderColor}
            onChange={(val: any) => {
              handleChangeStyles({
                key: "borderColor",
                value: val.hex,
              });
            }}
          />
        </PopoverButton>
      ),
      isCustomChildren: true,
    },
    {
      label: "Border styles",
      isCustomChildren: true,
      children: (
        <PopoverButton buttonChildren={<BorderAll />}>
          <Box sx={{ p: 2 }}>
            <Stack direction="row" gap={"3px"}>
              {["none", "solid", "dotted", "dashed"].map((x) => (
                <Button
                  sx={{
                    textTransform: "none",
                    border: "1px solid",
                    borderColor:
                      currentStyles.borderStyle === x ? "#9c27b0" : "#cccccc",
                    p: 0,
                  }}
                  onChange={() => {
                    handleChangeStyles({
                      key: "borderStyle",
                      value: x,
                    });
                  }}
                >
                  {x}
                </Button>
              ))}
            </Stack>
            <Label></Label>
            <Slider valueLabelDisplay="on" size="small" title="Border width" />
          </Box>
        </PopoverButton>
      ),
    },
  ];

  switch (selectedComponent?.type) {
    case TYPE_TEXT:
      return textOptions.map((x) => <OptionButton {...x} />);
    case TYPE_BOX:
      return boxOptions.map((x) => <OptionButton {...x} />);
  }
};
