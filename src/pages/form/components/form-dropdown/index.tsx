import { useState } from "react";
import Dropdown from "components/Form/DropDown";
import { data } from "data/dummyData";

export default function DropDownSection() {
  const [select, setSelect] = useState("select");
  const handleChange = (e: string) => {
    setSelect(e);
  };
  return (
    <Dropdown
      data={data}
      select={select}
      setSelect={setSelect}
      onChange={handleChange}
    />
  );
}
