import React, {useRef, useState} from 'react';
import WithMarginTop from '../../components/molecules/WithMarginTop';
import EditorPanel from '../../components/molecules/EditorPanel';
import {Box} from '@mui/material';
import testData from '../../components/organisms/Template/testData.json';
import Template from '../../components/organisms/Template';
import useInput from '../../hooks/useInput';
import Moveable, {OnDrag, OnDragEnd, OnResize, OnResizeEnd, OnRotate} from 'react-moveable';
import EditorPanelContextProvider from '../../contexts/EditorPanelContext';
import {TYPE_TEXT, getElementByType} from '../../const/default';
import GeneralOptions from '../../components/molecules/GeneralOptions/GeneralOptions';
import useCreateApi from '../../hooks/api/useCreateApi';
import {IPairKeyValue} from '../../interfaces/interface.ts';

const Create = () => {
  const {input, setInput, handleChangeInput, handleChangeComponentSettings} = useInput(testData[0]);

  const {creating, handleCreate} = useCreateApi({
    url: '/template',
  });

  const [selectedKey, setSelectedKey] = useState('');
  const [_, componentIndex] = selectedKey.split('-');

  const handleChangeStyles = ({key, value}: IPairKeyValue) => {
    handleChangeComponentSettings({
      key: 'styles',
      value: {
        [key]: value,
      },
      componentIndex,
    });
  };
  const handleChangeWrapperStyles = ({key, value}: IPairKeyValue) => {
    handleChangeComponentSettings({
      key: 'wrapperStyles',
      value: {
        [key]: value,
      },
      componentIndex,
    });
  };

  const handleChangeImageStyles = (key: string, value: object) => {
    handleChangeComponentSettings({
      key: 'imageStyles',
      value: {
        [key]: value,
      },
      componentIndex,
    });
  };

  const selectedComponent = input.components[componentIndex];

  const moveableRef = useRef<Moveable>(null);
  const templateRef = useRef<any>({});
  const currentSelectedElement = templateRef.current[selectedKey];

  const setComponentRef = (el: any, key: string) => {
    templateRef.current[key] = el;
  };

  const handleDrag = (e: OnDrag) => {
    currentSelectedElement.style.top = `${e.top}px`;
    currentSelectedElement.style.left = `${e.left}px`;
    currentSelectedElement.style.bottom = `${e.bottom}px`;
    currentSelectedElement.style.right = `${e.right}px`;
  };

  const handleDragEnd = (e: OnDragEnd) => {
    if (!e.lastEvent) return;
    handleChangeComponentSettings({
      componentIndex,
      key: 'wrapperStyles',
      value: {
        top: currentSelectedElement.style.top,
        right: currentSelectedElement.style.right,
        bottom: currentSelectedElement.style.bottom,
        left: currentSelectedElement.style.left,
      },
    });
  };

  const handleResize = (e: OnResize) => {
    const [xAxis, yAxis] = e.delta;
    currentSelectedElement.style.width = `${
      parseFloat(currentSelectedElement.style.width) + xAxis
    }px`;
    currentSelectedElement.style.height = `${
      parseFloat(currentSelectedElement.style.height) + yAxis
    }px`;
    currentSelectedElement.style.transform = e.drag.transform;
  };

  const handleResizeEnd = (e: OnResizeEnd) => {
    if (!e.lastEvent) return;
    handleChangeComponentSettings({
      componentIndex,
      key: 'wrapperStyles',
      value: {
        width: `${e.lastEvent.width}px`,
        height: `${e.lastEvent.height}px`,
      },
    });
  };

  const handleRotate = (e: OnRotate) => {
    handleChangeComponentSettings({
      componentIndex,
      key: 'wrapperStyles',
      value: {
        transform: e.drag.transform,
      },
    });
  };

  const handleAddElement = (type: string) => {
    setInput((prev: any) => ({
      ...prev,
      components: [...prev.components, getElementByType(type, prev.components.length)],
    }));
  };

  const handleFocus = (key: string) => {
    if (templateRef.current[key] && input.components[key.split('-')[1]]['type'] === TYPE_TEXT)
      templateRef.current[key].firstChild.focus();
  };

  console.log({input: JSON.stringify(input)});

  return (
    <EditorPanelContextProvider
      value={{
        input,
        handleChangeComponentSettings,
        setInput,
        handleChangeInput,
        setComponentRef,
        setSelectedKey,
        handleAddElement,
        selectedComponent,
        handleChangeStyles,
        handleChangeWrapperStyles,
        handleChangeImageStyles,
        creating,
        handleCreate,
      }}
    >
      <WithMarginTop>
        <Box sx={{display: 'flex', height: '100%'}}>
          <EditorPanel />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              flex: '1',
              backgroundColor: '#F8F8F8',
            }}
          >
            <Box
              sx={{
                width: '100%',
                paddingTop: '10px',
                backgroundColor: '#DDDDDD',
              }}
            >
              <Box sx={{minHeight: '45px', flexFlow: 'wrap'}}>
                <GeneralOptions />
              </Box>
            </Box>
            <Box sx={{flex: '1', display: 'flex', alignItems: 'center'}}>
              <Moveable
                ref={moveableRef}
                target={currentSelectedElement}
                draggable={true}
                throttleDrag={1}
                edgeDraggable={false}
                startDragRotate={0}
                throttleDragRotate={0}
                resizable={true}
                keepRatio={false}
                throttleResize={0}
                renderDirections={['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se']}
                rotatable={true}
                throttleRotate={1}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onResize={handleResize}
                onResizeEnd={handleResizeEnd}
                onRotate={handleRotate}
              />

              <Template
                template={input}
                setComponentRef={setComponentRef}
                onSelectComponent={(key: string) => {
                  setSelectedKey(key);
                  handleFocus(key);
                }}
                size={{width: 1000, height: 1500}}
                scale={0.4}
                onTextChange={(val: string) =>
                  setInput((prev) => {
                    const components = [...prev.components];
                    components[componentIndex]['textContent'] = val;
                    return {...prev, components};
                  })
                }
              />
            </Box>
          </Box>
        </Box>
      </WithMarginTop>
    </EditorPanelContextProvider>
  );
};

export default Create;
