import DropdownHover from "components/Form/DropDownHover";
import { useState } from "react";
import { data } from "utils/dummyData";

export default function Index() {
  const [select, setSelect] = useState("Select");
  return (
    <div>
      <DropdownHover data={data} select={select} setSelect={setSelect} />
    </div>
  );
}
