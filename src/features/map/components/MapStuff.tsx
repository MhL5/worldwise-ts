import { type FC } from "react";
import Button from "../../../components/Button";
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import useMoveToUserPosition from "../hooks/useMoveToUserPosition";
import { useNavigate } from "react-router-dom";
import useSetViewOnClick from "../hooks/useSetViewOnClick";
import { useCitiesContext } from "../context/CitiesContext";

const ButtonContainer = styled.div`
  position: absolute !important;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 1000;
`;

const MapStuff: FC = function () {
  const { state } = useCitiesContext();
  const { error, isLoading, goToUserPosition } = useMoveToUserPosition();
  const navigate = useNavigate();
  useSetViewOnClick({ animate: true });
  useMapEvents({
    click(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  const positions = state.cities.map((c) => ({
    position: c.position,
    note: c.note,
  }));

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
        <Marker position={position.position} key={Math.random() * 4945632}>
          <Popup>{position.note}</Popup>
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
