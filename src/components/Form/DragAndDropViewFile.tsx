import { IFile } from "types/form";

export default function DragAndDropViewFile({
  file,
  image,
  handleDelete,
}: IFile) {
  return (
    <>
      <div className="flex gap-1">
        <img src={image} alt="icon image" className="w-10 fill-gray-50" />
        <div className="normal-case grid gap-2">
          <p>{file.name}</p>
          <p>{file.size.toLocaleString("en-US")}</p>
        </div>
      </div>
      <button onClick={() => handleDelete()}>x</button>
    </>
  );
}
