import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { IDropdown } from "types/form";

function Dropdown({ data, select, setSelect }: IDropdown) {
  const handeSelect = (e: string) => {
    setSelect(e);
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
export default Dropdown
