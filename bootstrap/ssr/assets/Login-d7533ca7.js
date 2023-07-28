import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useEffect } from "react";
import { Box, Container, Stack, Link, Typography, Card, CardHeader, CardContent, TextField, FormControlLabel, Checkbox, Grid, Button } from "@mui/material";
import "react-scroll";
import "./AuthNavigation-3dbdb55c.js";
import { grey, blue } from "@mui/material/colors/index.js";
import { useForm, Head } from "@inertiajs/react";
import "./TextInput-a9b2354a.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsx(Box, { id: "hero", sx: {
      alignItems: "center",
      backgroundColor: grey[200],
      position: "relative",
      justifyContent: "center",
      height: "100vh",
      pt: 12
    }, children: /* @__PURE__ */ jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsx(Box, { sx: { lineHeight: 0 }, children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, direction: "column", justifyContent: "center", children: [
      /* @__PURE__ */ jsx(Link, { href: route("welcome"), underline: "none", color: "text.primary", children: /* @__PURE__ */ jsxs(
        Typography,
        {
          sx: {
            fontSize: { xs: 40, md: 58 },
            fontWeight: "bold",
            lineHeight: 1.3,
            "& b": {
              color: blue[700]
            }
          },
          variant: "h2",
          children: [
            "E",
            /* @__PURE__ */ jsx("b", { children: "fishy" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs(Card, { sx: { borderRadius: 3 }, children: [
        /* @__PURE__ */ jsx(CardHeader, { title: "Sign In" }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
          /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: submit, children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                autoComplete: "username",
                focused: true,
                onChange: (e) => setData("email", e.target.value),
                error: errors.email ? true : false,
                label: "E-mail",
                fullWidth: true,
                helperText: errors.email && errors.email
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                id: "outlined-password-input",
                type: "password",
                name: "password",
                value: data.password,
                autoComplete: "current-password",
                focused: true,
                onChange: (e) => setData("password", e.target.value),
                error: errors.password ? true : false,
                label: "Password",
                fullWidth: true,
                helperText: errors.password && errors.password
              }
            ),
            /* @__PURE__ */ jsx(
              FormControlLabel,
              {
                control: /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    name: "remember",
                    checked: data.remember,
                    onChange: (e) => setData("remember", e.target.checked)
                  }
                ),
                label: "Remember Me"
              }
            ),
            /* @__PURE__ */ jsxs(Grid, { container: true, justifyContent: "space-between", alignItems: "center", children: [
              canResetPassword && /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(
                Link,
                {
                  href: route("password.request"),
                  color: "text.secondary",
                  children: "Forgot your password?"
                }
              ) }),
              /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "contained", disabled: processing, children: "Log in" }) })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }) }) })
  ] });
}
export {
  Login as default
};
