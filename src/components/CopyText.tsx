interface IProps {
  text: string;
}
export default function Copy({ text }: IProps) {
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

