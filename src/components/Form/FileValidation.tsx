import { IFileValidation } from "types/form";

export default function DragAndDropValidation({
  file,
  acceptType,
  maxSize,
}: IFileValidation) {
  const fileSizes = maxSize?.toString()?.slice(0, 1);
  const fileTypesFilter = acceptType.map((item) => {
    const regex = /\/(.*)$/;
    const regexResult = item.match(regex);
    const finalResult = regexResult?.filter((item) => !item.includes("/"));
    return finalResult;
  });

  return (
    <div className="flex w-full gap-1 text-xs text-r lowercase text-red">
      {!acceptType.includes(file.type) && (
        <p>Only accept {fileTypesFilter.join(" ")}</p>
      )}
      {file.size <= maxSize ? null : <p>Max size {fileSizes}mb.</p>}
    </div>
  );
}
