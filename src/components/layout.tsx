import React, { FC } from "react";
import { Box, useLocation } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "../pages/index";
import StudentPage from "../pages/student";
import ParentPage from "../pages/parent";
import CategoryPage from "../pages/category";
import CartPage from "../pages/cart";
import NotificationPage from "../pages/notification";
import ProfilePage from "../pages/profile";
import SearchPage from "../pages/search";
import CheckoutResultPage from "../pages/result";
import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";
import { useHandlePayment } from "../hooks";

if (import.meta.env.DEV) {
  document.body.style.setProperty("--zaui-safe-area-inset-top", "24px");
} else if (getSystemInfo().platform === "android") {
  const statusBarHeight =
    window.ZaloJavaScriptInterface?.getStatusBarHeight() ?? 0;
  const androidSafeTop = Math.round(statusBarHeight / window.devicePixelRatio);
  document.body.style.setProperty(
    "--zaui-safe-area-inset-top",
    `${androidSafeTop}px`
  );
}

const pages: Record<string, React.ReactNode> = {
  "/": <HomePage />,
  "/student": <StudentPage />,
  "/parent": <ParentPage />,
  "/search": <SearchPage />,
  "/category": <CategoryPage />,
  "/notification": <NotificationPage />,
  "/cart": <CartPage />,
  "/profile": <ProfilePage />,
  "/result": <CheckoutResultPage />,
};

export const Layout: FC = () => {
  useHandlePayment();
  const location = useLocation();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        {pages[location.pathname] || <HomePage />}
      </Box>
      <Navigation />
    </Box>
  );
};
