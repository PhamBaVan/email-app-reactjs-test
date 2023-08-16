import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";

import { ChangeEvent, FormEvent, useState } from "react";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

interface Props {
  authen: (data: boolean) => void;
  auth: boolean;
}
const Login = ({ authen, auth }: Props) => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleTypeEmail = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserLogin({
      ...userLogin,
      email: e.target.value,
    });
  };
  const handleTypePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin({
      ...userLogin,
      password: e.target.value,
    });
  };
  const submitLogin = () => {
    authen(true);
  };
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (userLogin.email == "test1@test.com" && userLogin.password == "123456") {
      submitLogin();
    }
  };
  if (auth) {
    return <Navigate to="/main" />;
  }
  return (
    <>
      <div className={styles.loginBackground}>
        <div className={styles.loginContainer}>
          <HeaderLogin />
          <div className={styles.formContainer}>
            <form action="" onSubmit={handleLogin}>
              <div className={styles.emailFieldContainer}>
                <label htmlFor="email">Email</label>
                <select
                  className={styles.selectEmail}
                  name="email"
                  id="email"
                  onChange={handleTypeEmail}
                >
                  <option value="----Choose an email">
                    ----Choose an email
                  </option>
                  <option value="test1@test.com">test1@test.com</option>
                </select>
              </div>
              <div className={styles.passwordFieldContainer}>
                <label htmlFor="password">Password</label>
                <input
                  className={styles.inputPassword}
                  type="password"
                  id="password"
                  onChange={handleTypePassword}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
