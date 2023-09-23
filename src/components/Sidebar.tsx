import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { data } from "utils/homepage";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className="sidebar hide-scrollbar">
      <div className="sidebar-content">
        <div className="logo">
          <h1>ZComp</h1>
        </div>
        {data.map((item) => {
          return (
            <Link to={item.slug} key={item.title}>
              <div
                className={`sidebar-item ${
                  pathname.includes(item.slug) && "sidebar-item-active"
                }`}
              >
                <p onClick={() => setIsActive(!isActive)}>{item.title}</p>
                {isActive &&
                  !!item.subtitle &&
                  pathname.includes(item.slug) &&
                  item.subtitle?.map((item, id) => {
                    return (
                      <div key={id} className="sidebar-subtitle">
                        <a href={`#${item.id}`}>
                          <p>{item.title}</p>
                        </a>
                      </div>
                    );
                  })}
              </div>
            </Link>
          );
        })}
      </div>
      <div className="sidebar-children">{children}</div>
    </aside>
  );
}
