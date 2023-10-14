import { IDragAndDropValidation } from "types/form";

export default function DragAndDropValidation({
  file,
  acceptedTypes,
  fileSize,
}: IDragAndDropValidation) {
  return (
    <div className="flex w-full gap-1 text-xs text-red">
      {!acceptedTypes.includes(file.type) ? (
        <p>Only accept jpeg and png.</p>
      ) : null}
      {file.size <= fileSize ? null : <p>Max size 3mb.</p>}
    </div>
  );
}
