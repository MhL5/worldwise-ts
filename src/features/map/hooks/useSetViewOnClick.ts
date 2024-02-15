import { useMapEvent } from "react-leaflet";

function useSetViewOnClick({ animate }: { animate: boolean }) {
  const map = useMapEvent("click", (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animate || false,
    });
  });
}

export { useSetViewOnClick };
