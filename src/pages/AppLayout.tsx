import { type FC } from "react";
import styled from "styled-components";
import Map from "../features/map/components/Map";
import SideBar from "../components/SideBar";
import CitiesProvider from "../features/map/context/CitiesContext";

const PageContainer = styled.section`
  min-height: 100dvh;
  display: flex;

  & > div {
    flex: 1 1 70%;
  }
  & > aside {
    flex: 1 1 30%;
  }
`;

const AppLayout: FC = function () {
  return (
    <PageContainer>
      <CitiesProvider>
        <SideBar />
        <Map />
      </CitiesProvider>
    </PageContainer>
  );
};

export default AppLayout;
