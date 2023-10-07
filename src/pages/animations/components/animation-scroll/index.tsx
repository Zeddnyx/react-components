import Animation from "./AnimationScroll";
import { data } from "utils/dummyData";

export default function Index() {
  return (
    <>
      {data.map((item) => {
        // you need wrap each element with this Animations component
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
