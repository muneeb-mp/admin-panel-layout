import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Search from "./pages/search";
import Layout from "./layout";
import { useAppSelector } from "./hooks/redux";

function App() {
  const auth = useAppSelector((state) => state.common.auth);

  return !auth ? (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Layout>
      <Routes>
        <Route path="/select/search" element={<Search />} />
      </Routes>
    </Layout>
  );
}

export default App;
