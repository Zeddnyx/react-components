import { useState, useRef } from "react";

export default function DropFile() {
  const [file, setFile] = useState<File | null>();
  const [iDisable, setIDisable] = useState(false)
  const fileSize = 3 * 1024 * 1024; // 3MB
  const acceptedTypes = ["image/jpeg", "image/png"];
  const inputRef = useRef<HTMLInputElement>(null);

  // store files in state
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  // handle file choose
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    files ? setFile(files[0]) : null;
  };

  const handleDelete = () => {
    setFile(null);
  };

  const handleSubmit = () => {
    if (!acceptedTypes.includes(file!.type) || file!.size > fileSize) {
      return
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
          <button onClick={() => inputRef.current?.click()}>
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
        {file && (
          <>
            <div
              className={`dropFile-item ${!acceptedTypes.includes(file.type) || file.size > fileSize
                  ? "bg-red"
                  : "bg-green"
                }`}
            >
              <p>{file.name}</p>
              <button onClick={() => handleDelete()}>x</button>
            </div>

            {/* error section */}
            <div className="flex w-full gap-1 text-xs text-red-500">
              {!acceptedTypes.includes(file.type) ? (
                <p>Only accept jpeg and png.</p>
              ) : null}
              {file.size <= fileSize ? null : <p>Max size 3mb.</p>}
            </div>
          </>
        )}

        <div className="btn-dropzone">
          <button onClick={handleSubmit} disabled={!file}>
            Submit file
          </button>
        </div>
      </div>
    </>
  );
}
