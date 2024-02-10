import { useEffect, type FC, Dispatch, SetStateAction } from "react";
import { useMap } from "react-leaflet";
import { useGeolocation } from "../../hooks/useGeolocation";

const Test: FC<{
  setUseUserPosition: Dispatch<SetStateAction<boolean>>;
}> = function ({ setUseUserPosition }) {
  const map = useMap();
  const { position } = useGeolocation();

  useEffect(() => {
    if (position) {
      map.flyTo(position, map.getZoom());
      setUseUserPosition(false);
    }
  }, [map, position, setUseUserPosition]);

  return null;
};

export default Test;
