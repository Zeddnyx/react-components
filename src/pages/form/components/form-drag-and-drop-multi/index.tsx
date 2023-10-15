import DragAndDropFile from "components/Form/FileDragAndDrop";

export default function Index() {
  return (
    <div>
      <DragAndDropFile
        multiple={true}
        acceptType={["image/png", "image/jpg", "application/pdf"]}
        maxSize={3 * 1024 * 1024}
      />
    </div>
  );
}
