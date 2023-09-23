import Sidebar from "~/components/Sidebar";
import Animation1 from "./Animation1";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        <Animation1 />
      </div>
    </Sidebar>
  );
}
