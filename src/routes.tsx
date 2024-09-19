import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<BookingPage />} path="/bookings" />
      <Route element={<ConfirmationPage />} path="/confirmation" />
    </Routes>
  );
}
