import { useState, type FC } from "react";
import Button from "../../../components/Button";
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import useMoveToUserPosition from "../hooks/useMoveToUserPosition";
import { useNavigate } from "react-router-dom";
// import useSetViewOnClick from "../hooks/useSetViewOnClick";

const ButtonContainer = styled.div`
  position: absolute !important;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 1000;
`;

const MapStuff: FC = function () {
  const { error, isLoading, goToUserPosition } = useMoveToUserPosition();
  // useSetViewOnClick({ animate: true });
  const { positions } = useLocationMarker();

  let status;
  status = `USE YOUR POSITION`;
  if (isLoading) status = `isLoading`;
  if (error) status = `error`;

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {positions?.map((position) => (
        <Marker position={position} key={position.lat}>
          <Popup>You are here</Popup>
        </Marker>
      ))}

      <ButtonContainer>
        <Button el="button" onClick={() => goToUserPosition()}>
          {status === `USE YOUR POSITION` && status}
          {status === `isLoading` && "Loading..."}
          {status === "error" && `${error}`}
        </Button>
      </ButtonContainer>
    </>
  );
};

export default MapStuff;

function useLocationMarker() {
  const navigate = useNavigate();
  // it should open a form
  // city name / date / note
  const [positions, setPositions] = useState<{ lat: number; lng: number }[]>(
    []
  );

  useMapEvents({
    click(e) {
      setPositions((p) => [...p, e.latlng]);
      navigate("form");
    },
  });

  return { positions };
}
