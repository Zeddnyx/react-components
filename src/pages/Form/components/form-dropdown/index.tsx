import { useState } from "react";
import Dropdown from "components/DropDown";
import { data } from "utils/dummyData";

export default function DropDownSection() {
  const [select, setSelect] = useState("select");
  return <Dropdown data={data} select={select} setSelect={setSelect} />;
}
