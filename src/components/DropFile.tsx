import { useState, useRef } from "react";

export default function DropFile() {
  const [file, setFile] = useState<File[]>([]);
  const [isErrorType, setIsErrorType] = useState(false);
  const [isErrorMax, setIsErrorMax] = useState(false);
  const fileSize = 3 * 1024 * 1024; // 3MB
  const acceptedFileTypes = ["image/jpeg", "image/png"];
  const inputRef = useRef<HTMLInputElement>(null);

  // store all files in state
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFile((prev: File[]) => [...prev, e.dataTransfer.files[0]]);

    let id = 0;
    for (id; id < file.length; id++) {
      acceptedFileTypes.includes(file[id].type) && file[id].size <= fileSize
        ? (setIsErrorType(false),
          setIsErrorMax(false),
          console.log("error false"))
        : (setIsErrorType(true),
          setIsErrorMax(true),
          console.log("error true"));
    }
  };

  // handle file choose
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    files ? setFile((prev: File[]) => [...prev, files[0]]) : null;
  };

  const handleDelete = (id: number) => {
    setFile((prev: File[]) => prev.filter((_, index) => index !== id));
  };

  const handleSubmit = () => {
    isErrorMax === false && isErrorType === false && file.length > 0
      ? alert("File Submitted")
      : null;
  };

  return (
    <>
      <div className="dropzone">
        <div
          className="dropzone-content"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <h2>Drag files here </h2>
          <button
            onClick={() => inputRef.current?.click()}
            className="text-blue-600"
          >
            or choose your files
          </button>
        </div>
        <input
          type="file"
          multiple
          hidden
          onChange={handleClick}
          ref={inputRef}
        />
      </div>

      {/* list file section */}
      <div className="dropFile">
        {file?.map((file, index) => (
          <div
            key={index}
            className={`dropFile-item ${
              !acceptedFileTypes.includes(file.type) || file.size > fileSize
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          >
            <p>{file.name}</p>
            <div className="grid">
              <p>
                {acceptedFileTypes.includes(file.type)
                  ? ""
                  : "Invalid file format!"}
              </p>
              <p>{file.size <= fileSize ? "" : "Max file size 3MB!"}</p>
            </div>
            <button onClick={() => handleDelete(index)}>x</button>
          </div>
        ))}
      </div>

      <div className="btn-dropzone">
        <button onClick={handleSubmit}>Submit file</button>
      </div>
    </>
  );
}
