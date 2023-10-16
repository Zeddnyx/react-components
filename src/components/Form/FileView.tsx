import Validation from "./FileValidation";

import { IFileView } from "types/form";

export default function DragAndDropViewFile({
  file,
  image,
  handleDelete,
  id,
  acceptType,
  maxSize,
}: IFileView) {
  const isValid = acceptType.includes(file.type) || file.size < maxSize;
  return (
    <div className="flex flex-col w-full gap-2">
      <div className={`dropFile-item ${isValid ? "bg-green" : "bg-red"}`}>
        <div className="flex justify-between w-full gap-1">
          <div className="flex gap-1">
            <img src={image} alt="icon image" className="w-10 fill-gray-50" />
            <div className="normal-case grid gap-2">
              <p>{file.name}</p>
              <p>{file.size.toLocaleString("en-US")}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(id)}>x</button>
        </div>
      </div>
      <div>
        <Validation file={file} acceptType={acceptType} maxSize={maxSize} />
      </div>
    </div>
  );
}
