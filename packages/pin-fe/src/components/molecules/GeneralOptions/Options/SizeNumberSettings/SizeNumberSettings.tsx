import "./SizeNumberSettings.scss";
import { Box, TextField } from "@mui/material";

export default function SizeNumberSettings({
  value,
  onChange,
  onIncrease,
  onDecrease,
}) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      <div className="Pin-ChangeValue__Button" onClick={onDecrease}>
        -
      </div>
      <TextField
        value={value}
        onChange={onChange}
        size="small"
        sx={{
          height: "100%",
          width: "80px",
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
            borderTop: "unset",
            borderBottom: "unset",
            borderRadius: "0",
            padding: "0 4px",
            borderWidth: "1px !important",
          },
        }}
      />
      <div className="Pin-ChangeValue__Button" onClick={onIncrease}>
        +
      </div>
    </Box>
  );
}
