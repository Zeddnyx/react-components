import Copy from "~/components/CopyText";
import Input from "components/Input";
import { useState } from "react";

export default function CopySection() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>Copy Section</h2>
      <div className="flex items-center">
        <Input
          type="text"
          placeholder="Text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isError=""
        />
        <Copy text={value} />
      </div>
    </div>
  );
}
