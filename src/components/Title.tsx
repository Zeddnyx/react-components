import { useLocation, useNavigate } from "react-router-dom";
import { iconArrow } from "configs/images";

export default function Title() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const filter = pathname.split("/")[1].split("-").join(" ");

  return (
    <div className="mt-5">
      <button onClick={() => navigate("/")} className="flex gap-3 items-center capitalize">
        <img src={iconArrow} alt="arrow" className="rotate-90 w-5 h-5" />
        <h3>All - {filter}</h3>
      </button>
    </div>
  );
}
