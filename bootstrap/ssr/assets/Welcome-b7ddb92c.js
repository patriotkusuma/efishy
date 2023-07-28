import { a as jsx, j as jsxs } from "../ssr.js";
import { Box, Container, Grid, Typography, Card, CardHeader, CardContent, Stack, TextField } from "@mui/material";
import { blue } from "@mui/material/colors/index.js";
import { G as Guest } from "./GuestLayout-942820df.js";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@mui/material/styles/index.js";
import "react";
import "react-scroll";
import "./AuthNavigation-3dbdb55c.js";
import "@mui/icons-material";
const HomeHero = () => {
  return /* @__PURE__ */ jsx(Box, { id: "hero", sx: { position: "relative", pt: { xs: 4, md: 12 }, pb: { xs: 8, md: 10 } }, children: /* @__PURE__ */ jsx(Container, { maxWidth: "lg", children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 0, direction: { xs: "column", md: "unset" }, children: [
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 7, children: /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          textAlign: { xs: "center", md: "left" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        },
        children: [
          /* @__PURE__ */ jsx(Box, { sx: { mb: 3 }, children: /* @__PURE__ */ jsxs(
            Typography,
            {
              component: "h3",
              sx: {
                position: "relative",
                fontSize: { xs: 40, md: 62 },
                letterSpacing: 1.5,
                fontWeight: "bold",
                lineHeight: 1.3,
                "& span": {
                  color: "text.secondary"
                }
              },
              children: [
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    component: "mark",
                    sx: {
                      position: "relative",
                      color: "text.secondary",
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      backgroundColor: "unset"
                    },
                    children: [
                      "Welcome",
                      " "
                    ]
                  }
                ),
                "to",
                " ",
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    component: "b",
                    sx: {
                      fontSize: "inherit",
                      fontWeight: "inherit",
                      position: "relative",
                      "& svg": {
                        position: "absolute",
                        top: -16,
                        right: -21,
                        width: { xs: 22, md: 30 },
                        height: "auto"
                      }
                    },
                    children: [
                      "Efishy",
                      /* @__PURE__ */ jsx("svg", { version: "1.1", viewBox: "0 0 3183 3072", children: /* @__PURE__ */ jsxs("g", { id: "Layer_x0020_1", children: [
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fill: blue[700],
                            d: "M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fill: blue[700],
                            d: "M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "path",
                          {
                            fill: blue[700],
                            d: "M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                          }
                        )
                      ] }) })
                    ]
                  }
                ),
                " ",
                /* @__PURE__ */ jsx("br", {}),
                "pond Monitoring ",
                " ",
                /* @__PURE__ */ jsx("span", { children: "App" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Box, { sx: { mb: 4, width: { xs: "100%", md: "70%" } }, children: /* @__PURE__ */ jsx(Typography, { sx: { color: "text.secondary", lineHeight: 1.6 }, children: "Aplikasi yang dapat melakukan pemberian pakan secara otomatis serta dapat memonitoring keadaan kolam secara RealTime berbasis web dengan komunikasi MQTT." }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 5, sx: { position: "relative" }, children: /* @__PURE__ */ jsx(Box, { sx: { lineHeight: 0 }, children: /* @__PURE__ */ jsxs(Card, { sx: { borderRadius: 3, boxShadow: 3 }, children: [
      /* @__PURE__ */ jsx(CardHeader, { title: "Mqtt Configuration" }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Box, { component: "form", children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, children: [
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            id: "outlined-read-only-input",
            label: "Host",
            defaultValue: "mqtt.efishy.my.id",
            InputProps: {
              readOnly: true
            }
          }
        ),
        /* @__PURE__ */ jsxs(Stack, { direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "outlined-read-only-input",
              label: "Mqtt Port",
              defaultValue: "8883",
              InputProps: {
                readOnly: true
              }
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "outlined-read-only-input",
              label: "Websocket Port",
              defaultValue: "8083",
              InputProps: {
                readOnly: true
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            id: "outlined-read-only-input",
            label: "Username",
            defaultValue: "patriot",
            InputProps: {
              readOnly: true
            }
          }
        ),
        /* @__PURE__ */ jsx(
          TextField,
          {
            fullWidth: true,
            id: "outlined-read-only-input",
            label: "Password",
            defaultValue: "as Usual",
            InputProps: {
              readOnly: true
            }
          }
        )
      ] }) }) })
    ] }) }) })
  ] }) }) });
};
const HomeHero$1 = HomeHero;
function Welcome({ auth, laravelVersion, phpVersion }) {
  return /* @__PURE__ */ jsxs(Guest, { user: auth.user, children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome to Efishy" }),
    /* @__PURE__ */ jsx(HomeHero$1, {})
  ] });
}
export {
  Welcome as default
};
