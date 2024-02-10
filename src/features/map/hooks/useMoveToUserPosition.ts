import { useMap } from "react-leaflet";
import { useGeolocation } from "../../../hooks/useGeolocation";

const useMoveToUserPosition = function () {
  const map = useMap();
  const { position } = useGeolocation();

  function goToUserPosition() {
    if (position) {
      map.flyTo(position, map.getZoom());
    }
  }

  return { goToUserPosition };
};

export default useMoveToUserPosition;
