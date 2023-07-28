import { a as jsx, j as jsxs } from "../ssr.js";
import { Card, CardContent, Stack, Typography, Avatar, SvgIcon } from "@mui/material";
import PropTypes from "prop-types";
import { IoFastFoodOutline } from "react-icons/io5/index.esm.js";
import { GiForkKnifeSpoon } from "react-icons/gi/index.esm.js";
const OverviewSisaPakan = (props) => {
  const { customColor, sx, value } = props;
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
                children: "Pakan"
              }
            ),
            /* @__PURE__ */ jsxs(
              Typography,
              {
                variant: "h4",
                children: [
                  value,
                  " %"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: customColor,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(IoFastFoodOutline, {}) })
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
            children: "sisa pakan"
          }
        )
      }
    )
  ] }) });
};
OverviewSisaPakan.prototype = {
  customColor: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
const OverviewPakanTerakhir = (props) => {
  const { customColor, sx, value, time } = props;
  return /* @__PURE__ */ jsx(Card, { sx, children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(
    Stack,
    {
      alignItems: "flex-start",
      direction: "row",
      justifyContent: "space-between",
      children: [
        /* @__PURE__ */ jsxs(Stack, { spacing: 1, children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              color: "text.secondary",
              variant: "overline",
              children: "Pemberian Makan Terakhir"
            }
          ),
          /* @__PURE__ */ jsx(
            Typography,
            {
              variant: "h4",
              fontWeight: 700,
              children: value + " gram"
            }
          ),
          /* @__PURE__ */ jsx(
            Typography,
            {
              variant: "h6",
              color: "text.secondary",
              children: time
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Avatar,
          {
            sx: {
              backgroundColor: customColor,
              height: 56,
              width: 56
            },
            children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(GiForkKnifeSpoon, {}) })
          }
        )
      ]
    }
  ) }) });
};
OverviewPakanTerakhir.prototype = {
  customColor: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};
export {
  OverviewSisaPakan as O,
  OverviewPakanTerakhir as a
};
