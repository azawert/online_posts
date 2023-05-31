import { BrowserRouter } from "react-router-dom";
import Layout from "./shared/components/Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout></Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
