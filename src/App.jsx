import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import Dashboard from "./assets/pages/Dashboard";
import AppLayout from "./assets/components/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}
