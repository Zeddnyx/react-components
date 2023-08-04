import { memo } from "react";

interface INotify {
  message: string;
}

function Notify({ message }: INotify) {
  return (
    <div className="notify">
      <p>{message}</p>
    </div>
  );
}
export default  memo(Notify)
