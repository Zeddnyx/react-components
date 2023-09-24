import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { data } from "utils/homepage";
import { iconLogo } from "~/configs/images";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  return (
    <aside className="sidebar hide-scrollbar">
      <div className="sidebar-content">
        <div className="logo" onClick={() => navigate("/form-input")}>
          <img src={iconLogo} alt="logo" />
        </div>
        <div>
          {data.map((item) => {
            return (
              <Link to={item.slug} key={item.title}>
                <div
                  className={`sidebar-item ${pathname.includes(item.slug) && "sidebar-item-active"
                    }`}
                >
                  <item.icons />
                  <p
                    className="hidden md:block"
                    onClick={() => setIsActive(!isActive)}
                  >
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="sidebar-children">{children}</div>
    </aside>
  );
}
