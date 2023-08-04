import { useState } from "react";
import { useGeolocation } from "~/hooks/useGeoLocation";

export default function GeoLocation() {
  const [isActive, setIsActive] = useState(false);

  // on render
  // const geoObj = useGeolocation()

  // on Click
  const geo = useGeolocation({ when: isActive });

  return (
    <div>
      <h2>Get Geo Location section</h2>
      <button onClick={() => setIsActive(true)}> Get Location</button>
      <p>{geo && JSON.stringify(geo, null, 2)}</p>
      {/* <pre>{JSON.stringify(geoObj, null, 2)}</pre> */}
    </div>
  );
}
