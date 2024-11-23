import { Slider, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const SliderWithInput = ({
  label,
  value,
  handleChangeValue,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginTop: "8px", minWidth: "130px" }}
      >
        <Typography>{label}</Typography>
        <TextField
          value={value}
          type={"number"}
          onChange={(e) => handleChangeValue(e.target.value)}
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
        min={min}
        max={max}
        step={step}
        onChange={(_, v) => handleChangeValue(v)}
        value={value}
        size="small"
        title={label}
      />
    </>
  );
};

export default SliderWithInput;
