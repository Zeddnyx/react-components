import { useState } from "react";
import DropdownHover from "components/Form/DropDownHover";
import { data } from "data/dummyData";

export default function DropDownSection() {
  const [select, setSelect] = useState("select");
  const handleChange = (e: string) => {
    setSelect(e);
  };
  return (
    <DropdownHover
      data={data}
      select={select}
      setSelect={setSelect}
      onChange={handleChange}
    />
  );
}
