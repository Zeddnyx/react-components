import { memo } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface IDropdown {
  data: {
    value: string;
    name: string;
  }[];
  select: string;
  setSelect: React.Dispatch<React.SetStateAction<string>>;
}

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
      <div className="dropdown-content opacity-0 group-hover:opacity-100">
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
export default memo(Dropdown);
