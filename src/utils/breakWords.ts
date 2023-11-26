export default function breakWord(value: string, length: number) {
  const words = value.split("");
  if (words.length > length) {
    return words.slice(0, length).join("") + "...";
  }
  return value;
}
