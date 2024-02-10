import { type FC } from "react";
import styled from "styled-components";
import Map from "../features/map/Map";
import SideBar from "../components/SideBar";

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
      <SideBar />
      <Map />
    </PageContainer>
  );
};

export default AppLayout;
