import { useState } from "react";
import Modal from "./Modal";

export default function Index() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setIsModal(true)}>Modal</button>
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
    </div>
  );
}
