interface INotify {
  message: string;
}

export default function Notify({ message }: INotify) {
  return (
    <div className="notify">
      <p>{message}</p>
    </div>
  );
}
