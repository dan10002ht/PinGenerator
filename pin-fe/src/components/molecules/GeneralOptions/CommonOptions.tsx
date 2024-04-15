import { Redo, Undo } from "@mui/icons-material"
import OptionButton from "../../atoms/OptionButton/OptionButton"

export default function CommonOptions() {
  const buttons = [
    {
      icon: Undo,
      onClick: () => {console.log("undo")}
    },
    {
      icon: Redo,
      onClick: () => {console.log("redo")}
    },
  ]
  return <>
    {buttons.map((x) => <OptionButton Icon={x.icon} onClick={x.onClick}/>)}
  </>
}