import { memo } from "react";

function Notify({ message }: { message: string }) {
  return (
    <div className="notify">
      <p>{message}</p>
    </div>
  );
}
export default memo(Notify);
