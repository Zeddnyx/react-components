import Sidebar from "~/components/Sidebar";
import Notif1 from ".//Notify1";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        <Notif1 />
      </div>
    </Sidebar>
  );
}
