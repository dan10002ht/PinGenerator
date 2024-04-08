import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const EditorPanel = () => {
  return (
    <Box sx={{ width: "300px", backgroundColor: "#DDDDDD", height: "100%" }}>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Box paddingBlockEnd="20px">
          <Button fullWidth variant="contained" color="primary">
            SAVE TEMPLATE
          </Button>
        </Box>
        <Typography variant="body1">Template name</Typography>
        <TextField label="" hiddenLabel={true} variant="filled" />
      </Box>
      <Divider />
      <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Add element</Typography>
        <Box>
          {[
            { Icon: DashboardIcon, label: "Rectangle", onClick: () => {} },
            { Icon: TextFieldsIcon, label: "Text", onClick: () => {} },
            { Icon: ImageIcon, label: "Image", onClick: () => {} },
            { Icon: AddReactionIcon, label: "Svg", onClick: () => {} },
          ].map((item) => (
            <Button startIcon={<item.Icon />} onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Element layers</Typography>
      </Box>
    </Box>
  );
};

export default EditorPanel;
