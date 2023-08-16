import { useLocation } from "react-router-dom";
import styles from "./NavBarHeader.module.css";
import users from "../../data/users.json";
const NavBarHeader = () => {
  const { name, email, avatarUrl } = users[0];
  const location = useLocation();
  return (
    <div className={styles.navBarHeader}>
      <div>
        Pathname : <span>{location.pathname}</span>
      </div>
      <div className={styles.navBarColRight}>
        <div className={styles.userInfor}>
          <h4>{name}</h4>
          <p>{email}</p>
        </div>
        <div className={styles.navBarAvatar}>
          <img src={avatarUrl} alt="" />
        </div>
        <div className={styles.containerLogOut}>Log Out</div>
      </div>
    </div>
  );
};

export default NavBarHeader;
