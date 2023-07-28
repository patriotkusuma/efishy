import { j as jsxs, a as jsx } from "../ssr.js";
import { Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, Stack, Hidden, Typography } from "@mui/material";
import { grey } from "@mui/material/colors/index.js";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/index.js";
import { BiSearch } from "react-icons/bi/index.esm.js";
import PropTypes from "prop-types";
const SearchRiwayatPakan = (props) => {
  const { searchData, dateFrom, dateTo, onSearchData, onDateFrom, onDateTo } = props;
  return /* @__PURE__ */ jsxs(
    Grid,
    {
      container: true,
      spacing: 2,
      direction: { xs: "column", md: "row" },
      alignItems: "stretch",
      justifyContent: "center",
      children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, sx: { m: 1 }, variant: "outlined", children: [
          /* @__PURE__ */ jsx(InputLabel, { htmlFor: "outlined-adorment-search", children: "Cari" }),
          /* @__PURE__ */ jsx(
            OutlinedInput,
            {
              id: "outlined-adorment-search",
              type: "text",
              label: "Cari",
              value: searchData,
              onChange: onSearchData,
              startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(BiSearch, {}) })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsxs(Stack, { direction: { xs: "column", md: "row" }, spacing: 0.5, justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
            DatePicker,
            {
              slotProps: {
                actionBar: {
                  actions: ["cancel", "clear", "accept"]
                }
              },
              clearable: true,
              clearText: "Clear",
              value: dateFrom,
              onAccept: onDateFrom,
              label: "Dari tanggal"
            }
          ) }) }),
          /* @__PURE__ */ jsx(Hidden, { only: ["xs", "sm"], children: /* @__PURE__ */ jsx(Typography, { variant: "h2", color: grey[500], children: "-" }) }),
          /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
            DatePicker,
            {
              value: dateTo,
              clearable: true,
              onAccept: onDateTo,
              label: "Sampai tanggal",
              minDate: dateFrom ? dateFrom : ""
            }
          ) }) })
        ] }) })
      ]
    }
  );
};
SearchRiwayatPakan.propTypes = {
  searchData: PropTypes.string,
  dateFrom: PropTypes.any,
  dateTo: PropTypes.any,
  onSearchData: PropTypes.func,
  onDateFrom: PropTypes.func,
  onDateTo: PropTypes.func
};
const SearchRiwayatPakan$1 = SearchRiwayatPakan;
export {
  SearchRiwayatPakan$1 as S
};
