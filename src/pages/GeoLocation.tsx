import { useState } from "react"
import { useGeolocation } from "~/hooks/useGeoLocation"

export default function GeoLocation() {
  const [isActive, setIsActive] = useState(false)
  // const geoObj = useGeolocation()

 // on Click
 const geo = useGeolocation({when: isActive})
 console.log(isActive);

  return (
    <div>
    <h2>Get Geo Location section</h2>
    {/* <pre>{JSON.stringify(geoObj, null, 2)}</pre> */}
    <button onClick={() => setIsActive(true)}> Get Location</button>
    <p>{geo && JSON.stringify(geo)}</p>
    </div>
  )
}
