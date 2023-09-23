import Sidebar from "~/components/Sidebar";
import Scroll1 from "./Scroll1";
import { data } from "utils/dummyData";

export default function index() {
  return (
    <Sidebar>
      <div>
        <Scroll1 data={data} />
      </div>
    </Sidebar>
  );
}
