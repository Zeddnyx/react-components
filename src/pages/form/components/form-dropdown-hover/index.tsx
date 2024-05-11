import { useState } from "react";
import DropdownHover from "components/Form/DropDownHover";
import { data } from "data/dummyData";

export default function DropDownSection() {
  const [select, setSelect] = useState("select");
  const handleChange = (e: string) => {
    setSelect(e);
  };
  const opt = data.map((item) => {
    return {
      label: item.name,
      value: item.name,
    };
  });
  return (
    <DropdownHover
      options={opt}
      select={select}
      setSelect={setSelect}
      onChange={handleChange}
    />
  );
}
