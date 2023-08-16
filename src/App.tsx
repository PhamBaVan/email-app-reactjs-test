import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useState } from "react";
import emailsData from "./data/messages.json";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./components/Login/Login";
import EmailPage from "./pages/EmailPage/EmailPage";
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { GlobalContext } from "./contexts/global";

function App() {
  const [authFromChild, setAuthFromChild] = useState(false);
  const [emails, setEmails] = useState(emailsData);
  const handleAuthFromChild = (auth: boolean) => {
    setAuthFromChild(auth);
  };
  return (
    <GlobalContext.Provider value={{ emails, setEmails }}>
      <Routes>
        <Route element={<PrivateRoute auth={authFromChild} />}>
          <Route path="/main" element={<MainPage />}>
            <Route index element={<Navigate to="email" />}></Route>
            <Route path="home" element={<HomePage />} />
            <Route path="email" element={<EmailPage />}>
              <Route path=":folder" element={<Outlet />}>
                <Route path=":id" />
              </Route>
            </Route>
            <Route path="contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to={"/login"} />}></Route>
        </Route>
        <Route
          path="/login"
          element={<Login auth={authFromChild} authen={handleAuthFromChild} />}
        />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
