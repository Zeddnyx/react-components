import Animation from "components/Animation";
import { data } from "utils/dummyData";

export default function AnimationSection() {
  return (
    <div>
      <h2>Animation Section</h2>
      <Animation>
        <>
          {data.map((item) => {
            return <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>;
          })}
        </>
      </Animation>
    </div>
  );
}
