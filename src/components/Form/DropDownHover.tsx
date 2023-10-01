import { memo } from "react";
import { iconArrow } from "configs/images";

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
        <span className="dropdown-active">
          <img className="w-3 fill-gray-50 group-hover:rotate-180" src={iconArrow} alt="arrow" />
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
