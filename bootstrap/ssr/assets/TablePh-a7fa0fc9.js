import { j as jsxs, a as jsx } from "../ssr.js";
import { Card, CardHeader, CardContent, Stack, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, Hidden, Typography, Box, Table, TableHead, TableRow, TableCell, TableBody, TablePagination } from "@mui/material";
import "./Scrollbar-6c64c108.js";
import PropTypes from "prop-types";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/index.js";
import { BiSearch } from "react-icons/bi/index.esm.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import { grey, yellow, blue, red, green } from "@mui/material/colors/index.js";
import { IoWater } from "react-icons/io5/index.esm.js";
import moment from "moment";
import { ImWarning } from "react-icons/im/index.esm.js";
const TablePh = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    searchPh,
    dateFrom,
    onSearchPh,
    onDateFromSearch,
    dateTo,
    onDateToSearch
  } = props;
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Data Ph" }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(
      Stack,
      {
        spacing: 2,
        children: [
          /* @__PURE__ */ jsxs(
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
                      value: searchPh,
                      onChange: onSearchPh,
                      startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(BiSearch, {}) })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsxs(Stack, { direction: { xs: "column", md: "row" }, spacing: 0.5, justifyContent: "space-between", children: [
                  /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
                    DatePicker,
                    {
                      componentsProps: {
                        actionBar: {
                          actions: ["cancel", "clear", "accept"]
                        }
                      },
                      value: dateFrom,
                      onAccept: onDateFromSearch,
                      label: "Dari tanggal"
                    }
                  ) }) }),
                  /* @__PURE__ */ jsx(Hidden, { only: "xs", children: /* @__PURE__ */ jsx(Typography, { variant: "h2", color: grey[500], children: "-" }) }),
                  /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
                    DatePicker,
                    {
                      value: dateTo,
                      componentsProps: {
                        actionBar: {
                          actions: ["cancel", "clear", "accept"]
                        }
                      },
                      onAccept: onDateToSearch,
                      label: "Sampai tanggal",
                      minDate: dateFrom
                    }
                  ) }) })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: "No" }),
              /* @__PURE__ */ jsx(TableCell, { children: "Ph" }),
              /* @__PURE__ */ jsx(TableCell, { children: "Waktu" })
            ] }) }),
            /* @__PURE__ */ jsx(TableBody, { children: items.length == 0 ? /* @__PURE__ */ jsx(
              TableRow,
              {
                style: {
                  backgroundColor: grey[200]
                },
                children: /* @__PURE__ */ jsx(TableCell, { colSpan: 3, align: "center", children: /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "center", spacing: 2, children: [
                  /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) }),
                  /* @__PURE__ */ jsx(Typography, { color: grey[900], variant: "h6", component: "h6", children: "Data Tidak Ditemukan" }),
                  /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) })
                ] }) })
              }
            ) : items.map((phValue, index) => {
              var phColor = blue[500];
              if (phValue.status_ph > 8) {
                phColor = blue[500];
              }
              if (phValue.status_ph < 6) {
                phColor = red[500];
              }
              if (phValue.status_ph > 6 && phValue.status_ph < 8) {
                phColor = green[500];
              }
              return /* @__PURE__ */ jsxs(
                TableRow,
                {
                  hover: true,
                  children: [
                    /* @__PURE__ */ jsx(TableCell, { children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
                    /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "center", children: [
                      /* @__PURE__ */ jsx(Typography, { variant: "h5", color: blue, children: /* @__PURE__ */ jsx(IoWater, { color: phColor }) }),
                      /* @__PURE__ */ jsxs(Typography, { variant: "h6", children: [
                        /* @__PURE__ */ jsx("b", { children: phValue.status_ph + " " }),
                        "Ph"
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(TableCell, { children: moment(phValue.created_at).format("HH:mm:ss, DD MMMM YYYY") })
                  ]
                },
                phValue.id
              );
            }) })
          ] }) }),
          /* @__PURE__ */ jsx(
            TablePagination,
            {
              component: "div",
              count,
              onPageChange,
              onRowsPerPageChange,
              page,
              rowsPerPage,
              rowsPerPageOptions: [5, 10, 25]
            }
          )
        ]
      }
    ) })
  ] });
};
TablePh.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  searchPh: PropTypes.string,
  dateFrom: PropTypes.any,
  onSearchPh: PropTypes.func,
  onDateFromSearch: PropTypes.func,
  dateTo: PropTypes.any,
  onDateToSearch: PropTypes.func
};
export {
  TablePh as T
};
