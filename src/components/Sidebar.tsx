import { Link, useLocation } from "react-router-dom";
import { data } from "utils/homepage";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar hide-scrollbar">
      <div className="sidebar-content">
        <div className="logo"><h1>ZComp</h1></div>
        {data.map((item) => {
          return (
            <Link to={item.slug}>
              <div
                key={item.title}
                className={`sidebar-item ${pathname.includes(item.slug) && "sidebar-item-active"
                  }`}
              >
                <p>{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sidebar-children">{children}</div>
    </aside>
  );
}
