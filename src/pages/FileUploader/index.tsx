import Sidebar from "~/components/Sidebar";
import DragFile1 from "./DragFile1";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        <DragFile1 />
      </div>
    </Sidebar>
  );
}
