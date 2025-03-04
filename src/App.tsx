import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ProtectedRoute } from "./entities/user";
import { Menu } from "./features";
import { Login, Notes, Register } from "./pages";

import "./App.css";

const App = () => (
  <Router>
    <Menu />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/notes" element={<Notes />} />
        <Route path="*" element={<Navigate to="/notes" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/notes" replace />} />
    </Routes>
  </Router>
);

export default App;
