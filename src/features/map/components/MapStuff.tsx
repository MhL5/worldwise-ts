import { type FC } from "react";
import Button from "../../../components/Button";
// import SetViewOnClick from "../SetViewOnClick";
import { TileLayer } from "react-leaflet";
import styled from "styled-components";
import useMoveToUserPosition from "../hooks/useMoveToUserPosition";
import useSetViewOnClick from "../hooks/useSetViewOnClick";

const ButtonContainer = styled.div`
  position: absolute !important;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -5%);
  z-index: 1000;
`;

const MapStuff: FC = function () {
  const { goToUserPosition } = useMoveToUserPosition();
  useSetViewOnClick({ animate: true });

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <SetViewOnClick animate={true} /> */}

      <ButtonContainer>
        <Button el="button" onClick={() => goToUserPosition()}>
          USE YOUR POSITION
        </Button>
      </ButtonContainer>
    </>
  );
};

export default MapStuff;
