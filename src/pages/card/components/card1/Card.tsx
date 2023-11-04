import { ICard } from "types/card";

export default function Index(props: ICard) {
  const { title, description, image, date } = props;
  return (
    <div className="rounded-md hover:bg-white hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="rounded-t-md rounded-b-none w-full h-60"
      />
      <div className="p-2 flex flex-col gap-2">
        <h3 className="line-clamp-2">{title}</h3>
        <p className="line-clamp-3">{description}</p>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
}
