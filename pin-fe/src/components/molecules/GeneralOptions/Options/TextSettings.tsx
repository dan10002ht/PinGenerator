import { useContext } from "react";
import { EditorPanelContext } from "../../../../contexts/EditorPanelContext";

export default function TextSettings() {
  const {input} = useContext(EditorPanelContext);

  const textOptions = [
    {
      label: "Text color",
      key: ""
    }
  ]


}