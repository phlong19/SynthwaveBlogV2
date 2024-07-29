// 3rd lib
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Notifications } from "@mantine/notifications";

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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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

      <Notifications />
      <ReactQueryDevtools
        initialIsOpen={false}
        buttonPosition="bottom-left"
        position="left"
      />
    </QueryClientProvider>
  );
}

export default App;
