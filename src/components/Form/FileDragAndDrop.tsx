import { useState, useRef, Fragment, useEffect } from "react";
import { iconImage } from "configs/images";

import FileView from "./FileView";
import { IFileDrag } from "types/form";

export default function DropFile({
  multiple = true,
  acceptType,
  maxSize,
  file,
  setFile,
}: IFileDrag) {
  const [isError, setIsError] = useState(true);
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

  const hasInvalidFileType = file.some(
    (item) => !acceptType.includes(item.type),
  );
  const hasInvalidFileSize = file.some((item) => item.size > maxSize);

  useEffect(() => {
    if (hasInvalidFileType || hasInvalidFileSize) {
      setIsError(true);
    } else if (!file) {
      setIsError(true);
    } else if (file[0]) {
      setIsError(false);
    } else if (file.length == 0) {
      setIsError(true);
    }
  }, [file]);

  const isDisabled = isError;

  return (
    <>
      {!multiple && file[0] ? (
        <div className="dropFile">
          {file?.map((item, index) => (
            <Fragment key={index}>
              <FileView
                image={iconImage}
                file={item}
                handleDelete={() => handleDelete(index)}
                id={index}
                maxSize={maxSize}
                acceptType={acceptType}
              />
            </Fragment>
          ))}
        </div>
      ) : (
        <>
          <div className="dropzone">
            <div
              className="dropzone-content"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <h2>Drag files here </h2>
              <p>or</p>
              <button
                className="btn"
                onClick={() => inputRef?.current?.click()}
              >
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
          <div className="dropFile">
            {file?.map((item, index) => (
              <Fragment key={index}>
                <FileView
                  image={iconImage}
                  file={item}
                  handleDelete={() => handleDelete(index)}
                  id={index}
                  maxSize={maxSize}
                  acceptType={acceptType}
                />
              </Fragment>
            ))}
          </div>
        </>
      )}

      <div className={isDisabled ? "btn-disabled" : "btn"}>
        <button onClick={handleSubmit} disabled={isDisabled}>
          Submit file
        </button>
      </div>
    </>
  );
}
