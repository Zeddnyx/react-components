import { FaCheck } from "react-icons/fa6";

export default function StepNumber({
  id,
  current,
}: {
  id: number;
  current: number;
}) {

  const active = current === id;
  const pasActive = current - 1 === id || current - 1 === id + 1;

  return (
    <div
      className={`flex items-center text-center w-full w-[58px] h-14 md:h-20 md:w-20 text-white rounded-full 
        } ${active || pasActive ? "bg-blue animate" : "bg-gray animate"} `}
    >
      <h2 className="flexCenterCenter">{pasActive ? <FaCheck /> : id}</h2>
    </div>
  );
}
