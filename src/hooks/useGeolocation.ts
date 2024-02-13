import { useEffect, useState } from "react";

type position = { lat: number; lng: number };

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<position | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });

        setIsLoading(false);
      },
      (error) => {
        setError(error.message);

        setIsLoading(false);
      }
    );
  }, []);

  return { isLoading, position, error };
}

export { useGeolocation };
