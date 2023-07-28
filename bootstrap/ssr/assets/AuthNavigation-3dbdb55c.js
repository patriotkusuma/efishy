import { a as jsx, j as jsxs } from "../ssr.js";
import { useForm, router } from "@inertiajs/react";
import { Box, Button } from "@mui/material";
const AuthNavigation = ({ user }) => {
  useForm();
  return /* @__PURE__ */ jsx(Box, { sx: { "& button:first-child": { mr: 2 } }, children: !user ? /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Button, { disableHoverEffect: true, onClick: () => router.get(route("forgot-password")), variant: "contained", children: "Forgot Password" }),
    /* @__PURE__ */ jsx(Button, { disableHoverEffect: false, onClick: () => router.get(route("login")), variant: "outlined", children: "Sign In" })
  ] }) : /* @__PURE__ */ jsx(Button, { disabledHoverEffect: false, onClick: () => router.get(route("dashboard")), variant: "contained", children: "Dashboard" }) });
};
const AuthNavigation$1 = AuthNavigation;
export {
  AuthNavigation$1 as A
};
