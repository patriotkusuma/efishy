import { a as jsx, j as jsxs } from "../ssr.js";
import { Card, CardContent, Stack, Typography, Avatar, SvgIcon } from "@mui/material";
import PropTypes from "prop-types";
import { IoWaterOutline } from "react-icons/io5/index.esm.js";
const OverviewPh = (props) => {
  const { phColors, sx, value } = props;
  return /* @__PURE__ */ jsx(Card, { sx, children: /* @__PURE__ */ jsxs(CardContent, { children: [
    /* @__PURE__ */ jsxs(
      Stack,
      {
        alignItems: "flex-start",
        direction: "row",
        justifyContent: "space-between",
        spacing: 3,
        children: [
          /* @__PURE__ */ jsxs(Stack, { spacing: 1, children: [
            /* @__PURE__ */ jsx(
              Typography,
              {
                color: "text.secondary",
                variant: "overline",
                children: "PH Kolam"
              }
            ),
            /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h4",
                children: value
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: phColors,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(IoWaterOutline, {}) })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Stack,
      {
        alignItems: "center",
        direction: "row",
        spacing: 2,
        sx: { mt: 2 },
        children: /* @__PURE__ */ jsx(
          Typography,
          {
            color: "text.secondary",
            variant: "caption",
            children: "PH"
          }
        )
      }
    )
  ] }) });
};
OverviewPh.prototype = {
  phColors: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
export {
  OverviewPh as O
};
