import { memo } from 'react';

interface IProps {
  text: string;
}
function Copy({ text }: IProps) {
  console.log("render copy");
  const handleCopy = () => {
    if (text.length != 0 || text != undefined) {
      navigator.clipboard.writeText(text);
    } else {
      return;
    }
  };
  return (
    <button
      onClick={handleCopy}
    >
      Copy
    </button>
  );
}

export default memo(Copy);

