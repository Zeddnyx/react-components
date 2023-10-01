interface IFile {
  file: {
    name: string;
    size: number;
  };
  image: string;
  handleDeleteId: (id: number) => void;
  id: number;
}

export default function DragAndDropViewFile({
  file,
  image,
  handleDeleteId,
  id,
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
      <button onClick={() => handleDeleteId(id)}>x</button>
    </>
  );
}
