import { BrowserRouter } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Home } from "./pages/Home";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Home />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
