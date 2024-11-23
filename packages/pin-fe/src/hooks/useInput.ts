import { useState } from "react";

export default function useInput(defaultState = {}) {
  const [input, setInput] = useState(defaultState);

  const handleChangeInput = (key, value) => {
    setInput((prev) => {
      return { ...prev, [key]: value };
    });
  };
  const handleChangeComponentSettings = ({ key, value, componentIndex }) => {
    setInput((prev) => {
      const components = [...prev.components];
      components[componentIndex][key] = {
        ...components[componentIndex][key],
        ...value,
      };
      return { ...prev, components };
    });
  };
  
  return { input, handleChangeInput, handleChangeComponentSettings, setInput };
}
