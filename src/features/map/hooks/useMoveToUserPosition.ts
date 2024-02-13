import { useMap } from "react-leaflet";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { useState } from "react";
import { useNavigate } from "react-router";

const useMoveToUserPosition = function () {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { error, position } = useGeolocation();
  const map = useMap();

  function goToUserPosition() {
    setIsLoading(true);

    if (position) {
      map.flyTo(position, map.getZoom());
      navigate(`form?lat=${position.lat}&lng=${position.lng}`);
    }

    setIsLoading(false);
  }

  return { goToUserPosition, isLoading, error };
};

export default useMoveToUserPosition;
