import { useState } from "react"
import Dropdown from "components/DropDown"

export default function DropDownSection() {
  const [select, setSelect] = useState("select")
  const data = ["item 1", "item 2", "item 3"]
  return (
    <div>
    <h2>DropDown Section</h2>
      <Dropdown data={data} select={select} setSelect={setSelect} />
    </div>
  )
}
