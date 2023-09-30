import { useState, useRef, Fragment } from "react";

export default function DropFile() {
  const [file, setFile] = useState<File[]>([]);
  const fileSize = 3 * 1024 * 1024; // 3MB
  const acceptedTypes = ["image/jpeg", "image/png"];
  const inputRef = useRef<HTMLInputElement>(null);

  // store all files in state
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFile((prev: File[]) => [...prev, e.dataTransfer.files[0]]);
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
    // TODO pass the id of the file not add manualy using 0
    if (!acceptedTypes.includes(file[0].type) || file[0].size > fileSize) {
      return;
    }
    console.log("Submited file", file);
    alert("Submited file succes...");
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
          <p>or</p>
          <button className="btn" onClick={() => inputRef.current?.click()}>
            choose your files
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
          <Fragment key={index}>
            <div
              className={`dropFile-item ${!acceptedTypes.includes(file.type) || file.size > fileSize
                  ? "bg-red"
                  : "bg-green"
                }`}
            >
              <p>{file.name}</p>
              <button onClick={() => handleDelete(index)}>x</button>
            </div>

            {/* error section */}
            <div className="flex w-full gap-1 text-xs text-red-500">
              {!acceptedTypes.includes(file.type) ? (
                <p>Only accept jpeg and png.</p>
              ) : null}
              {file.size <= fileSize ? null : <p>Max size 3mb.</p>}
            </div>
          </Fragment>
        ))}
      </div>

      <div className={!!file ? "btn-disabled" : "btn"}>
        <button onClick={handleSubmit} disabled={file.length === 0}>
          Submit file
        </button>
      </div>
    </>
  );
}
