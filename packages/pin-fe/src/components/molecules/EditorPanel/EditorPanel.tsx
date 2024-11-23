import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ImageIcon from "@mui/icons-material/Image";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { EditorPanelContext } from "../../../contexts/EditorPanelContext";
import { TYPE_BOX, TYPE_IMAGE, TYPE_TEXT } from "../../../const/default";
import ElementLayerItem from "../ElementLayerItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const EditorPanel = () => {
  const {
    handleAddElement,
    input,
    setInput,
    setSelectedKey,
    creating,
    handleCreate,
    handleChangeInput,
  } = useContext(EditorPanelContext);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    setInput((prev: any) => ({ ...prev, components: result }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    reorder(input.components, result.source.index, result.destination.index);
  };

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
          <Button
            onClick={() => {
              const html = document.querySelector(
                ".Pin-Template__DesignContainer"
              );
              handleCreate({ ...input, html });
            }}
            fullWidth
            variant="contained"
            color="primary"
            disabled={creating}
          >
            SAVE TEMPLATE
          </Button>
        </Box>
        <Typography variant="body1">Template name</Typography>
        <TextField
          label=""
          hiddenLabel={true}
          variant="filled"
          value={input.templateName}
          onChange={(e) => handleChangeInput("templateName", e.target.value)}
        />
      </Box>
      <Divider />
      <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Add element</Typography>
        <Box sx={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            {
              Icon: DashboardIcon,
              label: "Rectangle",
              onClick: () => handleAddElement(TYPE_BOX),
            },
            {
              Icon: TextFieldsIcon,
              label: "Text",
              onClick: () => handleAddElement(TYPE_TEXT),
            },
            {
              Icon: ImageIcon,
              label: "Image",
              onClick: () => handleAddElement(TYPE_IMAGE),
            },
            { Icon: AddReactionIcon, label: "Svg", onClick: () => {} },
          ].map((item) => (
            <Button
              key={item.label}
              size="medium"
              variant="contained"
              color="secondary"
              startIcon={<item.Icon />}
              onClick={item.onClick}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Divider />
      <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <Typography variant="body1">Element layers</Typography>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
                {input.components.map((component: any, index: number) => {
                  const key = `${component.name}-${index}`;
                  return (
                    <Draggable key={key} draggableId={key} index={index}>
                      {(provided2) => (
                        <div
                          ref={provided2.innerRef}
                          {...provided2.draggableProps}
                          {...provided2.dragHandleProps}
                        >
                          <ListItem sx={{ padding: "0", marginBlock: "5px" }}>
                            <ElementLayerItem
                              component={component}
                              onClick={() =>
                                setSelectedKey(`${input.id}-${index}`)
                              }
                            />
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </Box>
  );
};

export default EditorPanel;
