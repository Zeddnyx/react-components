import { useState } from "react";
// import Arrow from "/arrow.svg";

interface DropdownProps {
  data: string[];
  select: string;
  setSelect: any;
}

export default function Dropdown({ data, select, setSelect }: DropdownProps) {
  const [isActive, setIsActive] = useState(false);

  const handeSelect = (e: string) => {
    setSelect(e);
    setIsActive(false);
  };
  return (
    <div>
      <div className="dropdown">
        <button
          className="outline-none flex items-center gap-2"
          onClick={() => setIsActive(!isActive)}
        >
          {/* <span className={isActive ? "" : "rotate-180"}> */}
          {/*   <img className="w-3" src={Arrow} alt="arrow" /> */}
          {/* </span> */}
          {select}
        </button>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {data.map((item) => (
            <div
              key={item}
              className="dropdown-item"
              onClick={() => handeSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
