import { useState, useRef } from "react";
import { iconImage } from "configs/images";

import DragAndDropViewFile from "components/Form/DragAndDropViewFile";
import DragAndDropValidation from "components/Form/DragAndDropValidation";

export default function DropFile() {
  const [file, setFile] = useState<File | null>();
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!acceptedTypes.includes(file!.type) || file!.size > fileSize) {
      return;
    }
    console.log("Submited file", file);
    alert("Submited file succes...");
    setFile(null);
  };

  return (
    <>
      {!file && (
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
      )}

      {/* shows file */}
      <div className="dropFile">
        {file && (
          <>
            <div
              className={`dropFile-item ${!acceptedTypes.includes(file.type) || file.size > fileSize
                  ? "bg-red"
                  : "bg-green"
                }`}
            >
              <DragAndDropViewFile
                file={file}
                image={iconImage}
                handleDelete={handleDelete}
              />
            </div>

            {/* error section */}
            <DragAndDropValidation
              file={file}
              acceptedTypes={acceptedTypes}
              fileSize={fileSize}
            />
          </>
        )}
      </div>
      <div className={file ? "btn" : "btn-disabled"}>
        <button onClick={handleSubmit} disabled={!file}>
          Submit file
        </button>
      </div>
    </>
  );
}
