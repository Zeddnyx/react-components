import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IDropdown } from "types/form";

function Dropdown({ data, select, setSelect, onChange }: IDropdown) {
  const [isActive, setIsActive] = useState(false);

  const handeSelect = (e: string) => {
    setSelect(e);
    onChange(e);
    setIsActive(false);
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="dropdown-btn"
      >
        <p>{select}</p>
        <span className={isActive ? "dropdown-active animate" : "animate"}>
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>
      <div
        className={`dropdown-content ${
          isActive ? "max-h-40 animate" : "max-h-0 !invisible animate"
        }`}
      >
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
    </div>
  );
}
export default Dropdown;
