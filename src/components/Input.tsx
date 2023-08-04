import { memo } from "react";

interface Props {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  logo?: string;
  isError: string;
}

function Input({ type, placeholder, value, onChange, logo, isError }: Props) {
  return (
    <div className="relative flex flex-col gap-1">
      <div className="relative flex items-center">
        {logo && (
          <img src={logo} alt="input logo" className="w-4 h-4 absolute ml-2" />
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${
            logo ? "pl-7 " : ""
          } focus:ring-0 outline-none w-full text-sm border p-1 rounded-md`}
        />
      </div>
      <p className="text-start text-xs text-red-500">{isError}</p>
    </div>
  );
}

export default memo(Input);
