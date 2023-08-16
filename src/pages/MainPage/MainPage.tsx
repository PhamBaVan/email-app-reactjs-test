import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./MainPage.module.css";
import NavBarHeader from "../../components/NavBarHeader/NavBarHeader";
const MainPage = () => {
  return (
    <div className={styles.mainLayOut}>
      <div className={styles.sideBarContainer}>
        <Header />
        <SideBar />
      </div>
      <div>
        <NavBarHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
