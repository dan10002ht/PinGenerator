import { Box, Button, IconButton, Tooltip } from "@mui/material";

export default function OptionButton({
  children,
  onClick,
  isCustomButton = false,
  isCustomChildren = false,
  label = "",
}) {
  if (isCustomChildren) return <Box sx={{ height: "35px" }}>{children}</Box>;
  return (
    <Tooltip title={label}>
      <Box
        sx={{
          width: "35px",
          height: "35px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        {!isCustomButton ? (
          <IconButton onClick={onClick} sx={{ width: "100%" }}>
            {children}
          </IconButton>
        ) : (
          children
        )}
      </Box>
    </Tooltip>
  );
}
