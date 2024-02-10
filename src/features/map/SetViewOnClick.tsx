import { useMapEvent } from "react-leaflet";

export default function SetViewOnClick({ animate }: { animate: boolean }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animate || false,
    });
  });

  return null;
}
