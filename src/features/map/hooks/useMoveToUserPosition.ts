import { useMap } from "react-leaflet";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useState } from "react";

const useMoveToUserPosition = function () {
  const [isLoading, setIsLoading] = useState(false);
  const { error, position } = useGeolocation();
  const map = useMap();

  function goToUserPosition() {
    setIsLoading(true);

    if (position) {
      map.flyTo(position, map.getZoom());
    }

    setIsLoading(false);
  }

  return { goToUserPosition, isLoading, error };
};

export default useMoveToUserPosition;
