import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./Feed";

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
