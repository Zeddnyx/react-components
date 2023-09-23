import { useState } from "react"
import Dropdown from "components/DropDown"
import {data} from "utils/dummyData"

export default function DropDownSection() {
  const [select, setSelect] = useState("select")
  return (
    <div>
    <h2>DropDown Section</h2>
      <Dropdown data={data} select={select} setSelect={setSelect} />
    </div>
  )
}
