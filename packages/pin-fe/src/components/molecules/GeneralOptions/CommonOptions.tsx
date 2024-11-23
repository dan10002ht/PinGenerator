import { Redo, Undo } from "@mui/icons-material"
import OptionButton from "../../atoms/OptionButton/OptionButton"

export default function CommonOptions() {
  const buttons = [
    {
      children: <Undo/>,
      label: 'Undo',
      onClick: () => {console.log("undo")}
    },
    {
      children: <Redo/>,
      label: 'Redo',
      onClick: () => {console.log("redo")}
    },
  ]
  return <>
    {buttons.map((x) => <OptionButton children={x.children} onClick={x.onClick}/>)}
  </>
}