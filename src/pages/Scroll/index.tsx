import Sidebar from "~/components/Sidebar";
import { data } from "utils/list-scroll";
import { data as dummy } from "utils/dummyData";

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        {data.map((item) => {
          return (
            <div key={item.title} className="children-item" id={`#${item.id}`}>
              <h2>{item.title}</h2>
              <item.element data={dummy} />
            </div>
          );
        })}
      </div>
    </Sidebar>
  );
}
