import { type FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Button from "./Button";
import styled from "styled-components";
import LocationMarker from "./LocationMarker";
import "../styles/MapStyles.css";

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

        <ButtonContainer>
          <Button el="button">
            <LocationMarker />
            USE YOUR POSITION
          </Button>
        </ButtonContainer>
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
