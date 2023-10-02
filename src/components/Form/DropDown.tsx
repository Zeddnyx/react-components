import { memo, useState } from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"

interface IDropdown {
  data: {
    value: string;
    name: string;
  }[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

function Dropdown({ data, select, setSelect }: IDropdown) {
  const [isActive, setIsActive] = useState(false);

  const handeSelect = (e: string) => {
    setSelect(e);
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        className="dropdown-btn"
      >
        <p>{select}</p>
        <span className={isActive ? "dropdown-active animate" : "animate"}>
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>
      {isActive && (
        <div className="dropdown-content">
          {data.map((item) => (
            <div
              key={item.name}
              className="dropdown-item"
              onClick={() => handeSelect(item.name)}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default memo(Dropdown);
