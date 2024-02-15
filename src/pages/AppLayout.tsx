import { type FC } from "react";
import { redirect } from "react-router-dom";
import styled from "styled-components";

import Map from "../features/map/components/Map";
import SideBar from "../ui/SideBar";

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

function appLoader() {
  const loginStatus = localStorage.getItem("login");

  if (loginStatus === "false" || !loginStatus) return redirect("/login");
  return null;
}

// eslint-disable-next-line react-refresh/only-export-components
export { appLoader };
export default AppLayout;
