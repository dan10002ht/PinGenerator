import "./SizeNumberSettings.scss"
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
      }}
    >
      <div className="Pin-ChangeValue__Button" onClick={onDecrease}>
        -
      </div>
      <TextField
        size="small"
        sx={{
          height: "100%",
        }}
      />
      <div className="Pin-ChangeValue__Button" onClick={onIncrease}>
        +
      </div>
    </Box>
  );
}
