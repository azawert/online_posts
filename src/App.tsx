import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Home } from "./pages/home/Home";
import { About } from "./pages/About";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route path={"/users/:id"} />
            <Route path={"/about-me"} element={<About />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
