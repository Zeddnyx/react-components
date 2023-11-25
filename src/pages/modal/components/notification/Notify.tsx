import { memo } from "react";
import { slideInDownAnimate } from "pages/animations/components/Animations";

interface INotify {
  message: string;
  className?: string;
  color?: string;
}

function Notify({
  message,
  className = "bg-[#3e3e3e]",
  color = "#fff",
}: INotify) {
  return (
    <div className={`notify ${className}`} style={slideInDownAnimate("100ms")}>
      <div>
        <p style={{ color }}>{message}</p>
      </div>
    </div>
  );
}
export default memo(Notify);
