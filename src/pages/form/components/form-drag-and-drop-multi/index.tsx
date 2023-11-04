import DragAndDropFile from "components/Form/FileDragAndDrop";
import { useState } from "react";

export default function Index() {
  const [file, setFile] = useState<File[]>([]);
  return (
    <div>
      <DragAndDropFile
        file={file}
        setFile={setFile}
        multiple={true}
        acceptType={["image/png", "image/jpg", "application/pdf"]}
        maxSize={3 * 1024 * 1024}
      />
    </div>
  );
}
