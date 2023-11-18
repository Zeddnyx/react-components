import { data } from "data/dummyImage";
import { useState } from "react";

export default function Carousal() {
  const [current, setCurrent] = useState(data?.length);

  return (
    <div className="w-full">
      <div className="flexCenterCenter gap-1 overflow-auto hide-scrollbar hide-scrollbar-all">
        {data?.map((item) => (
          <img
            src={item.image}
            alt="image slider"
            key={item.id}
            onClick={() => setCurrent(item.id)}
            className={`object-cover h-80 rounded-xl animate ${current === item.id ? "w-80" : "w-8 "
              }`}
          />
        ))}
      </div>
    </div>
  );
}
