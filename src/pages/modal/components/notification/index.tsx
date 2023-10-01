import { useState } from "react";
import Notify from "./Notify";

export default function NotifySection() {
  const [isActive, setIsActive] = useState(false);
  const handleNotify = () => {
    setIsActive(true);
  };

  isActive ? setTimeout(() => setIsActive(false), 3000) : null;

  return (
    <div>
      <button className="btn" onClick={handleNotify}>Notif Me</button>
      {isActive && <Notify message="hello thereeee this is a meessage!" />}
    </div>
  );
}
