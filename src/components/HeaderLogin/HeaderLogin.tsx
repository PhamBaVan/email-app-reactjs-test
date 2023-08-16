import Logo from "../../images/connect-logo-black.svg";
import styles from "./HeaderLogin.module.css";
const HeaderLogin = () => {
  return (
    <div>
      <div className={styles.logoHeaderLoginWrap}>
        <img src={Logo} />
      </div>
      <p>Login to check your email!!</p>
    </div>
  );
};

export default HeaderLogin;
