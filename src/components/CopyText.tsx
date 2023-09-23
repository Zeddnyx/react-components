import { memo } from "react";

function Copy({ text }: { text: string }) {
  const handleCopy = () => {
    if (text.length != 0 || text != undefined) {
      navigator.clipboard.writeText(text);
    }
  };

  return <button onClick={handleCopy}>Copy</button>;
}

export default memo(Copy);
