import { memo, useState } from "react";
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
        <span className={isActive ? "dropdown-active" : ""}>
          <img className="w-3" src={iconArrow} alt="arrow" />
        </span>
      </button>
      {isActive && (
        <div className="dropdown-content">
          {data.map((item) => (
            <div
              key={item.value}
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
