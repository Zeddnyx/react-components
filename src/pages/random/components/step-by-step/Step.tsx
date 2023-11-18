import Input from "~/components/Form/Input";

export default function Step({
  value,
  onChange,
  type,
  name,
  isValueSecond = true,
  valueSecond,
  onChangeSecond,
  typeSecond,
  nameSecond,
}: {
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: any;
  isValueSecond?: any;
  valueSecond?: any;
  onChangeSecond?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeSecond?: string;
  nameSecond?: any;
}) {
  return (
    <div className="grid w-full gap-5">
      <Input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        placeholder={name}
      />
      {isValueSecond && (
        <Input
          value={valueSecond}
          onChange={onChangeSecond}
          name={nameSecond}
          type={typeSecond}
          placeholder={nameSecond}
        />
      )}
    </div>
  );
}
