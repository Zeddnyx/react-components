import { memo } from "react";

interface INotify {
  message: string;
  bg?: string;
  color?: string;
}

function Notify({ message, bg = "#3e3e3e", color = "#fff" }: INotify) {
  return (
    <div className="notify" style={{ background: bg }}>
      <p style={{ color }}>{message}</p>
    </div>
  );
}
export default memo(Notify);
