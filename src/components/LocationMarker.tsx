import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export default function LocationMarker() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
