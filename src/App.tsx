import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import RoutePage from "./components/RoutePage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/visits-card" element={<RoutePage></RoutePage>} />
      <Route path="/applications" element={<RoutePage></RoutePage>} />
      <Route path="/visits-info" element={<RoutePage></RoutePage>} />
      <Route path="*" element={<ErrorPage></ErrorPage>} />
    </Routes>
  );
}

export default App;
