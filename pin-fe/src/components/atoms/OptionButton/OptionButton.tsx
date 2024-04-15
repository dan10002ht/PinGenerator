import { Box, IconButton } from "@mui/material";

export default function OptionButton({ Icon, onClick, activatorModal }) {
  return (
    <Box
      sx={{
        width: "35px",
        height: "35px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        position: "relative"
      }}
    >
      <IconButton onClick={onClick} sx={{width: "100%"}}>
        <Icon />
      </IconButton>
      {activatorModal}
    </Box>
  );
}
