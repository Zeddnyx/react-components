import { memo } from "react";

interface IInput {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  logo?: string;
  isDisabled?: boolean;
  isError?: string;
}

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
          className={`${logo ? "pl-7" : "px-3"} ${
            isError ? "border border-red" : "border-gray_alt"
          } input`}
        />
      </div>
      <p className="error-input">{isError}</p>
    </div>
  );
}

export default memo(Input);
