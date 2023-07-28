import { a as jsx, j as jsxs } from "../ssr.js";
import { useMediaQuery, Box, Container, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles/index.js";
import { useState } from "react";
import "react-scroll";
import { A as AuthNavigation } from "./AuthNavigation-3dbdb55c.js";
import { Menu, Close } from "@mui/icons-material";
import { blue } from "@mui/material/colors/index.js";
import "@inertiajs/react";
function Header({ user }) {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  return /* @__PURE__ */ jsx(Box, { sx: { backgroundColor: "background.paper" }, children: /* @__PURE__ */ jsx(Container, { sx: { py: { xs: 2, md: 3 } }, children: /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
      Typography,
      {
        variant: "h4",
        component: "h2",
        sx: { fontWeight: 700, "& span": { color: blue[500] } },
        children: [
          "E",
          /* @__PURE__ */ jsx("span", { children: "fishy" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { sx: { ml: "auto", display: { xs: "inline-flex", md: "none" } }, children: /* @__PURE__ */ jsx(IconButton, { onClick: () => setVisibleMenu(!visibleMenu), children: /* @__PURE__ */ jsx(Menu, {}) }) }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          transition: (theme) => theme.transitions.create(["top"]),
          ...matchMobileView && {
            py: 6,
            backgroundColor: "background.paper",
            zIndex: "appBar",
            position: "fixed",
            height: { xs: "100vh", md: "auto" },
            top: visibleMenu ? 0 : "-120vh",
            left: 0
          }
        },
        children: [
          /* @__PURE__ */ jsx(Box, { display: { xs: "none", md: "block" } }),
          " ",
          /* @__PURE__ */ jsx(AuthNavigation, { user }),
          visibleMenu && matchMobileView && /* @__PURE__ */ jsx(
            IconButton,
            {
              sx: {
                position: "fixed",
                top: 10,
                right: 10
              },
              onClick: () => setVisibleMenu(!visibleMenu),
              children: /* @__PURE__ */ jsx(Close, {})
            }
          )
        ]
      }
    )
  ] }) }) });
}
function Guest({ user, children }) {
  return (
    // <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
    //     <div>
    //         <Link href="/">
    //             <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
    //         </Link>
    //     </div>
    // <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
    //     {children}
    // </div>
    // </div>
    /* @__PURE__ */ jsxs(Box, { component: "main", sx: { height: "100vh" }, children: [
      /* @__PURE__ */ jsx(Header, { user }),
      children
    ] })
  );
}
export {
  Guest as G
};
