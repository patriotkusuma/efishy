import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { useTheme, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Typography, TablePagination } from "@mui/material";
import "./Scrollbar-6c64c108.js";
import PropTypes from "prop-types";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery/index.js";
import { ImWarning } from "react-icons/im/index.esm.js";
import { grey, yellow } from "@mui/material/colors/index.js";
const TableRiwayatPakan = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage
  } = props;
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { sx: { maxWidth: "100%" }, children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: "No" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Sisa" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Jumlah Keluar" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Keterangan" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Waktu" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: items.length == 0 ? /* @__PURE__ */ jsx(
        TableRow,
        {
          style: {
            backgroundColor: grey[200]
          },
          children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, align: "center", children: /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "center", spacing: 2, children: [
            /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) }),
            /* @__PURE__ */ jsx(Typography, { color: grey[900], variant: "h6", component: "h6", children: "Data Tidak Ditemukan" }),
            /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) })
          ] }) })
        }
      ) : items.map((riwayatPakan, index) => {
        return /* @__PURE__ */ jsxs(
          TableRow,
          {
            hover: true,
            children: [
              /* @__PURE__ */ jsx(TableCell, { width: "3%", children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
              /* @__PURE__ */ jsx(TableCell, { width: "10%", children: /* @__PURE__ */ jsx(Typography, { variant: "h6", children: riwayatPakan.sisa + " %" }) }),
              /* @__PURE__ */ jsx(TableCell, { width: "15%", children: /* @__PURE__ */ jsx(Typography, { variant: "h6", children: riwayatPakan.jumlah_keluar + " gram" }) }),
              /* @__PURE__ */ jsx(TableCell, { width: "40%", children: /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", children: desktop ? riwayatPakan.keterangan : riwayatPakan.keterangan.slice(0, 100) + " ...." }) }),
              /* @__PURE__ */ jsx(TableCell, { width: "32%", children: /* @__PURE__ */ jsx(Typography, { variant: "h6", children: moment(riwayatPakan.created_at).format("HH:mm:ss, DD MMMM YYYY") }) })
            ]
          },
          riwayatPakan.id
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
  ] });
};
TableRiwayatPakan.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number
};
export {
  TableRiwayatPakan as T
};
