// 3rd lib
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// layouts
import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import ManageLayout from "./components/layouts/ManageLayout";

// pages
import Home from "./pages/Home";
import PostDetails from "./pages/PostDetails";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

// auth pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";

// manage pages
import DashBoard from "./pages/manage/DashBoard";
import KcalDashboard from "./pages/manage/KcalDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<PostDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<Category />} />

          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>

        <Route
          path="/dashboard"
          element={<Navigate to="/dashboard/home" replace />}
        />
        <Route
        path="/dashboard"
          element={
            <ProtectedRoute>
              <ManageLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<DashBoard />} />
          <Route path="kcal" element={<KcalDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
