import Animation from "components/Animation";
import { data } from "utils/dummyData";

export default function Index() {
  return (
    <Animation>
      <>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </>
    </Animation>
  );
}
