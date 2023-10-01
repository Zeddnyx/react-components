import { useState } from "react";
import Input from "./Input";

export default function InputTag() {
  const [input, setInput] = useState("");
  const [tag, setTag] = useState<string[]>([]);
  const [isKeyRealesed, setIsKeyRealesed] = useState(false);

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    const trimInput = input.trim();

    if (
      key === "," ||
      (key === "Enter" && !!trimInput && !tag.includes(trimInput))
    ) {
      e.preventDefault();

      setTag((prev) => [...prev, trimInput]);
      setInput("");
    }

    if (key === "Backspace" && !input && !!tag && isKeyRealesed) {
      const tagCopy = [...tag];
      const poppedTag = tagCopy.pop();
      e.preventDefault();
      setTag(tagCopy);
      setInput(poppedTag || "");
    }
    setIsKeyRealesed(false);
  };

  const handleOnKeyUp = () => {
    setIsKeyRealesed(true);
  };

  const handleDelete = (id: number) => {
    setTag((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div>
      <div className="flex gap-2">
        {tag?.map((item, index) => (
          <div className="btn p-2 flex gap-5 select-none" key={index}>
            {item} <span onClick={() => handleDelete(index)}>x</span>
          </div>
        ))}
      </div>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleOnKeyDown}
        onKeyUp={handleOnKeyUp}
        type="text"
        placeholder="Tag"
      />
    </div>
  );
}
