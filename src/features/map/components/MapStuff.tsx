import { type FC } from "react";
import Button from "../../../components/Button";
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import useMoveToUserPosition from "../hooks/useMoveToUserPosition";
import { useNavigate } from "react-router-dom";
import useSetViewOnClick from "../hooks/useSetViewOnClick";
import { useCitiesContext } from "../../../context/CitiesContext";

const ButtonContainer = styled.div`
  position: absolute !important;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 1000;
`;
const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    min-width: 10rem;
    font-size: medium;
    position: relative;
    height: 5rem;
    text-align: center;

    background-color: var(--color-dark--1);
    border-radius: 0.5rem;

    & > div {
      color: white;
    }
    &::before {
      content: "";
      position: absolute;
      background-color: var(--color-brand--2);
      width: 0.5rem;
      height: 5rem;
      border-radius: 0.5rem;

      top: 50%;
      left: 0%;
      transform: translate(-50%, -50%);
      z-index: 1000;
    }
  }
  .leaflet-popup-tip-container {
    .leaflet-popup-tip {
      background-color: var(--color-dark--1);
    }
  }
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
          <StyledPopup>{position.note}</StyledPopup>
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
