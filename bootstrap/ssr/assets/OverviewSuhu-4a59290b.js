import { a as jsx, j as jsxs } from "../ssr.js";
import { Card, CardContent, Stack, Typography, Avatar, SvgIcon } from "@mui/material";
import { FaTemperatureHigh } from "react-icons/fa/index.esm.js";
import PropTypes from "prop-types";
const OverviewSuhu = (props) => {
  const { suhuColors, sx, value } = props;
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
                children: "Suhu Kolam"
              }
            ),
            /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h4",
                children: value + " °"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: suhuColors,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(FaTemperatureHigh, {}) })
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
            children: "Celcius"
          }
        )
      }
    )
  ] }) });
};
OverviewSuhu.prototype = {
  suhuColors: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
export {
  OverviewSuhu as O
};
