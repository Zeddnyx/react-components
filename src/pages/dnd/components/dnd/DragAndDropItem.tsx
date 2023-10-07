import { useRef, useState } from "react";

interface IDrag {
  id: number;
  value: string;
  name: string;
}

export default function DragAndDropItem({ data }: { data: IDrag[] }) {
  const [listItem, setListItem] = useState(data);

  const dragRef = useRef<any>(null);
  const dragOverRef = useRef<any>(null);

  const handleShort = () => {
    let resItem = [...data];

    //remove and save
    const dragItemContent = resItem.splice(dragRef.current, 1)[0];

    //switch position
    resItem.splice(dragOverRef.current, 0, dragItemContent);

    // reset
    dragRef.current = null;
    dragOverRef.current = null;

    // update
    setListItem(resItem);
  };

  return (
    <div className="flex flex-col gap-2">
      {listItem?.slice(0, 5).map((item, id) => {
        return (
          <div
            key={id}
            draggable
            onDragStart={() => (dragRef.current = id)}
            onDragEnter={() => (dragOverRef.current = id)}
            onDragEnd={handleShort}
            className="border p-5 cursor-grab rounded-lg"
          >
            {item.id} {item.name}
          </div>
        );
      })}
    </div>
  );
}
