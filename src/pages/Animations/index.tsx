import Sidebar from "~/components/Sidebar";
import {data } from "utils/list-animation"

export default function index() {
  return (
    <Sidebar>
      <div className="children">
        {data.map((item) => (
          <div key={item.title} className="children-item" id={`#${item.id}`}>
            <h2>{item.title}</h2>
            <item.element />
          </div>
        ))}
      </div>
    </Sidebar>
  );
}
