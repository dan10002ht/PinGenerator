import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ElementLayerItem = ({ component, onClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box
      onClick={onClick}
      sx={{
        paddingInline: "10px",
        paddingBlock: "5px",
        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        border: "2px solid #28c3a6",
        cursor: "move",
        borderRadius: "5px",
      }}
    >
      <Typography variant="body1">{component.name}</Typography>
      <IconButton size="small" onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Popover
        id={open ? "simple-popover" : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Rename" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Duplicate" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Delete" sx={{ color: "#ff4560" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </Box>
  );
};

export default ElementLayerItem;
