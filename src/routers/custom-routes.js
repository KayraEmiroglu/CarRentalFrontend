import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/common/scroll-to-top/scroll-to-top";
import AuthPage from "../pages/common/auth-page";
import NotFoundPage from "../pages/common/not-found-page";
import UnauthorizedPage from "../pages/common/unauthorized-page";
import AboutPage from "../pages/user/about-page";
import ContactPage from "../pages/user/contact-page";
import HomePage from "../pages/user/home-page";
import PrivacyPolicyPage from "../pages/user/privacy-policy-page";
import ProfilePage from "../pages/user/profile-page";
import ReservationDetailsPage from "../pages/user/reservation-details-page";
import ReservationsPage from "../pages/user/reservations-page";
import VehicleDetailsPage from "../pages/user/vehicle-details-page";
import VehiclesPage from "../pages/user/vehicles-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="unauthorized" element={<UnauthorizedPage />} />

          <Route path="vehicles">
            <Route index element={<VehiclesPage />} />
            <Route path=":vehicleId"element={<VehicleDetailsPage />}/>
          </Route>

          <Route path="user">
            <Route index element={<ProfilePage/>}/>
            <Route path="reservations">
                <Route index element={<ReservationsPage/>}/>
                <Route path=":reservationId" element={<ReservationDetailsPage/>}/>
            </Route>

          </Route>

          <Route path="admin">

          </Route>

          <Route path="*" element={<NotFoundPage/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
