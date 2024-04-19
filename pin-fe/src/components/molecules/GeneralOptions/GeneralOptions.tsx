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
  Opacity,
  PhotoSizeSelectLarge,
  TextFields,
  VerticalAlignBottom,
  VerticalAlignCenter,
  VerticalAlignTop,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import CommonOptions from "./CommonOptions";
import { EditorPanelContext } from "../../../contexts/EditorPanelContext";
import { TYPE_BOX, TYPE_IMAGE, TYPE_TEXT } from "../../../const/default";
import OptionButton from "../../atoms/OptionButton/OptionButton";
import SizeNumberSettings from "./Options/SizeNumberSettings/SizeNumberSettings";
import PopoverButton from "./Options/ColorSettings/ColorSettings";
import ButtonBox from "../../atoms/ButtonBox/ButtonBox";
import { SketchPicker } from "react-color";
import SliderWithInput from "../SliderWithInput";

export default function GeneralOptions() {
  return (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <CommonOptions />
      <SpecificOptions />
    </Box>
  );
}

const SpecificOptions = () => {
  const {
    selectedComponent,
    handleChangeStyles,
    handleChangeWrapperStyles,
    handleChangeImageStyles,
  } = useContext(EditorPanelContext);

  const currentStyles = selectedComponent?.styles || {};
  console.log({ currentStyles });

  const currentWrapperStyles = selectedComponent?.wrapperStyles || {};
  const currentImageStyles = selectedComponent?.imageStyles || {};
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
      children: (
        <PopoverButton
          buttonChildren={<ButtonBox backgroundColor={currentStyles.color} />}
        >
          <SketchPicker
            color={currentStyles.color}
            onChange={(val: any) => {
              handleChangeStyles({
                key: "color",
                value: val.hex,
              });
            }}
          />
        </PopoverButton>
      ),
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
                  onClick={() => {
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
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: "8px" }}
            >
              <Typography>Border width</Typography>
              <TextField
                value={parseFloat(currentStyles.borderWidth?.replace("px", ""))}
                type={"number"}
                onChange={(e) =>
                  handleChangeStyles({
                    key: "borderWidth",
                    value: `${e.target.value}px`,
                  })
                }
                sx={{
                  height: "100%",
                  width: "40px",
                  ".MuiInputBase-root": {
                    height: "100%",
                    borderRadius: "0px",
                  },
                  input: {
                    padding: "0 4px",
                    fontSize: "12px",
                    textAlign: "center",
                    outline: "none",
                  },
                  fieldset: {
                    borderRadius: "0",
                    padding: "0 4px",
                    borderWidth: "1px !important",
                  },
                }}
              />
            </Stack>
            <Slider
              onChange={(_, v) =>
                handleChangeStyles({
                  key: "borderWidth",
                  value: `${v}px`,
                })
              }
              value={parseFloat(currentStyles.borderWidth?.replace("px", ""))}
              size="small"
              title="Border width"
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: "8px" }}
            >
              <Typography>Corner rounding</Typography>
              <TextField
                value={parseFloat(
                  currentStyles.borderRadius?.replace("px", "")
                )}
                type={"number"}
                onChange={(e) =>
                  handleChangeStyles({
                    key: "borderRadius",
                    value: `${e.target.value}px`,
                  })
                }
                sx={{
                  height: "100%",
                  width: "40px",
                  ".MuiInputBase-root": {
                    height: "100%",
                    borderRadius: "0px",
                  },
                  input: {
                    padding: "0 4px",
                    fontSize: "12px",
                    textAlign: "center",
                    outline: "none",
                  },
                  fieldset: {
                    borderRadius: "0",
                    padding: "0 4px",
                    borderWidth: "1px !important",
                  },
                }}
              />
            </Stack>
            <Slider
              onChange={(_, v) =>
                handleChangeStyles({
                  key: "borderRadius",
                  value: `${v}px`,
                })
              }
              value={parseFloat(currentStyles.borderRadius?.replace("px", ""))}
              size="small"
              title="Corner rounding"
            />
          </Box>
        </PopoverButton>
      ),
    },
  ];
  const imageOptions = [
    {
      label: "Image cover",
      children: <PhotoSizeSelectLarge />,
    },
    {
      label: "Opacity",
      children: (
        <PopoverButton buttonChildren={<Opacity />}>
          <Box sx={{ p: 2 }}>
            <SliderWithInput
              label="Opacity"
              value={currentStyles.opacity}
              min={0}
              max={1}
              step={0.1}
              handleChangeValue={(val: any) =>
                handleChangeStyles({
                  key: "opacity",
                  value: val,
                })
              }
            />
          </Box>
        </PopoverButton>
      ),
    },
    {
      label: "Image cover",
      children: (
        <PhotoSizeSelectLarge
          color={
            currentImageStyles.objectFit === "cover" ? "secondary" : "primary"
          }
        />
      ),
      onClick: () => {
        const isCover = currentImageStyles.objectFit === "cover";
        handleChangeImageStyles({
          key: "objectFit",
          value: isCover ? "contain" : "cover",
        });
      },
    },
    {
      label: "Background color",
      isCustomChildren: true,
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
    },
    {
      label: "Border color",
      isCustomChildren: true,
      children: (
        <PopoverButton
          buttonChildren={
            <ButtonBox backgroundColor={currentStyles.borderColor} />
          }
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
                      currentWrapperStyles.borderStyle === x
                        ? "#9c27b0"
                        : "#cccccc",
                    p: 0,
                  }}
                  onClick={() => {
                    handleChangeWrapperStyles({
                      key: "borderStyle",
                      value: x,
                    });
                  }}
                >
                  {x}
                </Button>
              ))}
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: "8px" }}
            >
              <Typography>Border width</Typography>
              <TextField
                value={parseFloat(
                  currentWrapperStyles.borderWidth?.replace("px", "")
                )}
                type={"number"}
                onChange={(e) =>
                  handleChangeWrapperStyles({
                    key: "borderWidth",
                    value: `${e.target.value}px`,
                  })
                }
                sx={{
                  height: "100%",
                  width: "40px",
                  ".MuiInputBase-root": {
                    height: "100%",
                    borderRadius: "0px",
                  },
                  input: {
                    padding: "0 4px",
                    fontSize: "12px",
                    textAlign: "center",
                    outline: "none",
                  },
                  fieldset: {
                    borderRadius: "0",
                    padding: "0 4px",
                    borderWidth: "1px !important",
                  },
                }}
              />
            </Stack>
            <Slider
              onChange={(_, v) =>
                handleChangeWrapperStyles({
                  key: "borderWidth",
                  value: `${v}px`,
                })
              }
              value={parseFloat(
                currentWrapperStyles.borderWidth?.replace("px", "")
              )}
              size="small"
              title="Border width"
            />
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ marginTop: "8px" }}
            >
              <Typography>Corner rounding</Typography>
              <TextField
                value={parseFloat(
                  currentWrapperStyles.borderRadius?.replace("px", "")
                )}
                type={"number"}
                onChange={(e) =>
                  handleChangeWrapperStyles({
                    key: "borderRadius",
                    value: `${e.target.value}px`,
                  })
                }
                sx={{
                  height: "100%",
                  width: "40px",
                  ".MuiInputBase-root": {
                    height: "100%",
                    borderRadius: "0px",
                  },
                  input: {
                    padding: "0 4px",
                    fontSize: "12px",
                    textAlign: "center",
                    outline: "none",
                  },
                  fieldset: {
                    borderRadius: "0",
                    padding: "0 4px",
                    borderWidth: "1px !important",
                  },
                }}
              />
            </Stack>
            <Slider
              onChange={(_, v) =>
                handleChangeWrapperStyles({
                  key: "borderRadius",
                  value: `${v}px`,
                })
              }
              value={parseFloat(
                currentWrapperStyles.borderRadius?.replace("px", "")
              )}
              size="small"
              title="Corner rounding"
            />
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
    case TYPE_IMAGE:
      return imageOptions.map((x) => <OptionButton {...x} />);
  }
};
