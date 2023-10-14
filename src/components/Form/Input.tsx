import { memo } from "react";
import { iconInfo } from "configs/images";

import { IInput } from "types/form";

function Input({
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
  onKeyDown,
  onKeyUp,
  logo,
  isDisabled = false,
  isError,
  className,
  style,
}: IInput) {
  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <div className="relative flex items-center">
        {logo && (
          <img src={logo} alt="input logo" className="w-4 h-4 absolute ml-2" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          disabled={isDisabled}
          style={style}
          className={`${logo ? "pl-7" : "px-3"} ${isError ? "border border-red" : "border-gray_alt"
            } input ${className}`}
        />
      </div>
      {isError && (
        <div className="flex items-center gap-2 lowercase">
          <img className="w-4 h-4 fill-red" src={iconInfo} alt="info" />
          <p className="error-input">{isError}</p>
        </div>
      )}
    </div>
  );
}

export default memo(Input);
