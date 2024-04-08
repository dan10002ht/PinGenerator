import React from "react";
import WithMarginTop from "../../components/molecules/WithMarginTop";
import EditorPanel from "../../components/molecules/EditorPanel";
import EditorPanelContextProvider from "../../contexts/EditorPanelContext";
import { Box } from "@mui/material";

const Create = () => {
  return (
    <EditorPanelContextProvider value={{}}>
      <WithMarginTop>
        <Box sx={{ display: "flex", height: "100%" }}>
          <EditorPanel />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flex: "1",
              backgroundColor: "#F8F8F8",
            }}
          ></Box>
        </Box>
      </WithMarginTop>
    </EditorPanelContextProvider>
  );
};

export default Create;
