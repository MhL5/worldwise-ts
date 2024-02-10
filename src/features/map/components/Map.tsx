import { type FC } from "react";
import { MapContainer } from "react-leaflet";
import styled from "styled-components";
import "../../../styles/MapStyles.css";
import MapStuff from "./MapStuff";

const Wrapper = styled.div`
  position: relative;
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
        <MapStuff />
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
