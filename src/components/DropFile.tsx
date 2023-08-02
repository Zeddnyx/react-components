import { useState, useRef } from "react";

export default function DropFile() {
  const [file, setFile] = useState<File[]>([]);
  const [isError, setIsError] = useState(false);
  const fileSize = 3 * 1024 * 1024; // 3MB
  const acceptedFileTypes = ["image/jpeg", "image/png"];

  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFile((prev: File[]) => [...prev, e.dataTransfer.files[0]]);
    // file[0].size <= fileSize && acceptedFileTypes.includes(file[0].type)
    // TODO validate file
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    files ? setFile((prev: File[]) => [...prev, files[0]]) : null;
  };

  const handleDelete = (id: number) => {
    setFile((prev: File[]) => prev.filter((_, index) => index !== id));
  };

  const handleSubmit = () => {
    console.log(file);
  };

  return (
    <>
      <div className="relative w-full p-2 flex justify-center flex-col items-center border-4 border-gray-300 border-dashed rounded-md h-40">
        <div
          className="w-full h-full flex text-center justify-center items-center gap-1 hover:opacity-40"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <p>Drag & Drop files </p>
          <p
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer text-blue-600"
          >
            or click here
          </p>
        </div>
        <input
          type="file"
          multiple
          hidden
          onChange={handleClick}
          ref={inputRef}
        />
      </div>

      {isError && (
        <p>Maximum size allowed is 3MB and only accept JPEG and PNG</p>
      )}

      <div className="flex flex-wrap justify-center w-full gap-2 mt-2">
        {file?.map((file, index) => (
          <div key={index} className="w-20 h-20 bg-gray-300 p-1">
            <p onClick={() => handleDelete(index)}>x</p>
            <p className="line-clamp-1">{file.name}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={handleSubmit} className={isError ? "hidden" : "block"}>
          Submit file
        </button>
      </div>
    </>
  );
}
