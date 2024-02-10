import { type FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;
const ButtonContainer = styled.div`
  position: absolute !important;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 1000;
`;

const Map: FC = function () {
  const { error, getPosition, isLoading, position } = useGeolocation();

  if (error) return <div>SOMETHING WENT WRONG!</div>;
  return (
    <Wrapper>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: `100%` }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {!isLoading && position && (
          <Marker position={[position.lat, position.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
      </MapContainer>

      <ButtonContainer>
        <Button el="button" onClick={() => getPosition()} disabled={isLoading}>
          {isLoading ? "Loading..." : "USE YOUR POSITION"}
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Map;
