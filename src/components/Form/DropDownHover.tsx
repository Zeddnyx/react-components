import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { IDropdown } from "types/form";

function Dropdown({ options, select, setSelect,onChange }: IDropdown) {
  const handeSelect = (e: string) => {
    setSelect(e);
    onChange(e);
  };

  return (
    <div className="dropdown group">
      <button className="dropdown-btn">
        <p>{select}</p>
        <span className="group-hover:rotate-180 animate">
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>

      <div className="dropdown-content max-h-40 invisible group-hover:visible animate group-hover:animate">
        {options?.map((item) => (
          <div
            key={item.label}
            className="dropdown-item"
            onClick={() => handeSelect(item.label)}
          >
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dropdown
