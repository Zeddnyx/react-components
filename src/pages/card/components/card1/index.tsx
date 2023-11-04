import Card from "./Card";

import {data} from "data/dummyArticle"

 export default function Index() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card {...data[0]} />
    </div>
  )
}
