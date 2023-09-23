import Copy from "components/CopyText";
import Input from "components/Input";
import { useState } from "react";

export default function CopySection() {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center">
      <Input
        type="text"
        placeholder="Insert text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        isError=""
      />
      <Copy text={value} />
    </div>
  );
}
