import { Redo, Undo } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useContext } from 'react';
import CommonOptions from './CommonOptions';
import { EditorPanelContext } from '../../../contexts/EditorPanelContext';

export default function GeneralOptions() {
  const {selectedType} = useContext(EditorPanelContext);
  
  return <Box sx={{display: "flex", gap: "8px"}}>
    <CommonOptions/>
  </Box>
}

