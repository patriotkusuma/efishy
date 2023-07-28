import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { Box, Container, Stack, Link, Typography, Card, CardHeader, CardContent, Alert, AlertTitle, TextField, Grid, Button } from "@mui/material";
import "react";
import "react-scroll";
import "./AuthNavigation-3dbdb55c.js";
import { grey, blue } from "@mui/material/colors/index.js";
import { useForm, Head } from "@inertiajs/react";
import "./TextInput-a9b2354a.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.email"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsx(Box, { id: "hero", sx: {
      alignItems: "center",
      backgroundColor: grey[200],
      position: "relative",
      justifyContent: "center",
      height: "100vh",
      pt: 8
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
        /* @__PURE__ */ jsx(CardHeader, { title: "Forgot Password" }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Box, { component: "form", onSubmit: submit, children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
          status && /* @__PURE__ */ jsxs(Alert, { severity: "success", variant: "filled", children: [
            /* @__PURE__ */ jsx(AlertTitle, { children: "Success" }),
            status
          ] }),
          /* @__PURE__ */ jsx(Typography, { children: "Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." }),
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
          /* @__PURE__ */ jsx(Grid, { container: true, justifyContent: "flex-end", alignItems: "center", children: /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(Button, { type: "submit", variant: "contained", disabled: processing, children: "Email Password Reset Link" }) }) })
        ] }) }) })
      ] })
    ] }) }) }) })
  ] });
}
export {
  ForgotPassword as default
};
