import { useState, useRef, Fragment, useEffect } from "react";
import { iconImage } from "configs/images";

import DragAndDropViewFileMulti from "components/Form/DragAndDropViewFileMulti";
import DragAndDropValidation from "components/Form/DragAndDropValidation";

export default function DropFile() {
  const [file, setFile] = useState<File[]>([]);
  const [isError, setIsError] = useState(false);
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Submited file", file);
    setFile([]);
  };

  // Check if any file is not a PNG or JPEG
  const hasInvalidFileType = file.some(
    (item) => !acceptedTypes.includes(item.type),
  );

  // Check if any file is larger than the allowed file size
  const hasInvalidFileSize = file.some((item) => item.size > fileSize);

  useEffect(() => {
    if (hasInvalidFileType || hasInvalidFileSize) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [file]);

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
        {file?.map((item, index) => (
          <Fragment key={index}>
            <div
              className={`dropFile-item ${!acceptedTypes.includes(item.type) || item.size > fileSize
                  ? "bg-red"
                  : "bg-green"
                }`}
            >
              <DragAndDropViewFileMulti
                image={iconImage}
                file={item}
                handleDeleteId={() => handleDelete(index)}
                id={index}
              />
            </div>

            {/* error section */}
            <DragAndDropValidation
              file={item}
              acceptedTypes={acceptedTypes}
              fileSize={fileSize}
            />
          </Fragment>
        ))}
        <div className={isError ? "btn-disabled" : "btn"}>
          <button onClick={handleSubmit} disabled={isError}>
            Submit file
          </button>
        </div>
      </div>
    </>
  );
}
