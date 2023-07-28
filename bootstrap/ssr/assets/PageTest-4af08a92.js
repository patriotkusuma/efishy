import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import "react";
import { styled } from "@mui/material/styles/index.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react";
import "@inertiajs/react/server";
const StyledHeader = styled("header")(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: "100%",
  position: "absolute",
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(5, 5, 0)
  }
}));
function EfishyAuthenticated({ user, header, children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(StyledHeader, {}),
    children
  ] });
}
function PageTest() {
  return /* @__PURE__ */ jsx(EfishyAuthenticated, {});
}
export {
  PageTest as default
};
