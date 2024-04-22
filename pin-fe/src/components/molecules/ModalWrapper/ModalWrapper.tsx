import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, ButtonGroup, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalWrapper({
  children,
  activator,
  primaryAction,
  secondaryAction,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{activator}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ pb: 2 }}>
            Upload image
          </Typography>
          {children}
          {primaryAction && (
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  primaryAction.onAction();
                  handleClose();
                }}
              >
                {primaryAction.content}
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  secondaryAction.onAction();
                  handleClose();
                }}
              >
                {secondaryAction.content}
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
