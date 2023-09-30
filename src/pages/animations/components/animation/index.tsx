import Animation from "components/Animation";
import { data } from "utils/dummyData";

export default function Index() {
  return (
    <>
      {data.map((item) => {
        return (
          <Animation key={item.id}>
            <>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </>
          </Animation>
        );
      })}
      {data.map((item) => {
        return (
          <Animation key={item.id}>
            <>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </>
          </Animation>
        );
      })}
      {data.map((item) => {
        return (
          <Animation key={item.id}>
            <>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </>
          </Animation>
        );
      })}
    </>
  );
}
