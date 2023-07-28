import { j as jsxs, a as jsx, F as Fragment } from "../ssr.js";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles/index.js";
import { Card, CardHeader, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Typography, TablePagination } from "@mui/material";
import Chart from "react-apexcharts";
import "react";
import moment from "moment";
import "./Scrollbar-6c64c108.js";
import { ImWarning } from "react-icons/im/index.esm.js";
import { grey, yellow } from "@mui/material/colors/index.js";
const useChartOptions = (dateChart) => {
  useTheme();
  return {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: true
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(value) {
        return value + " %";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"]
      }
    },
    stroke: {
      curve: "smooth",
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top"
          // top, center, bottom
        }
      }
    },
    xaxis: {
      categories: dateChart,
      position: "top",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5
          }
        }
      },
      tooltip: {
        enabled: true
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        formatter: function(val) {
          return val + "%";
        }
      }
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    title: {
      text: "Tempat Pakan 15 Hari Terakhir",
      floating: false,
      offsetY: 280,
      align: "center",
      style: {
        color: "#444"
      }
    }
  };
};
const ChartTempatPakan = (props) => {
  const { chartSeries, sx, dateChart } = props;
  const chartOptions = useChartOptions(dateChart);
  return /* @__PURE__ */ jsxs(Card, { sx, children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Tempat Pakan 15 Hari Terakhir" }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      Chart,
      {
        height: 300,
        options: chartOptions,
        series: chartSeries,
        type: "bar",
        width: "100%"
      }
    ) })
  ] });
};
ChartTempatPakan.prototype = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
  dateChart: PropTypes.any
};
const TableTempatPakan = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange = () => {
    },
    onRowsPerPageChange,
    page = 0,
    rowsPerPage = 0
  } = props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: "No" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Sisa Pakan" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Keterangan" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Waktu" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: items.length == 0 ? /* @__PURE__ */ jsx(
        TableRow,
        {
          style: {
            backgroundColor: grey[200]
          },
          children: /* @__PURE__ */ jsx(TableCell, { colSpan: 4, align: "center", children: /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "center", justifyContent: "center", spacing: 2, children: [
            /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) }),
            /* @__PURE__ */ jsx(Typography, { color: grey[900], variant: "h6", component: "h6", children: "Data Tidak Ditemukan" }),
            /* @__PURE__ */ jsx(Typography, { color: yellow[900], variant: "h5", component: "h6", children: /* @__PURE__ */ jsx(ImWarning, {}) })
          ] }) })
        }
      ) : items.map((sisaPakan, index) => {
        return /* @__PURE__ */ jsxs(
          TableRow,
          {
            hover: true,
            children: [
              /* @__PURE__ */ jsx(TableCell, { children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("b", { children: sisaPakan.tinggi_pakan + " %" }) }),
              /* @__PURE__ */ jsx(TableCell, { children: sisaPakan.keterangan }),
              /* @__PURE__ */ jsx(TableCell, { children: moment(sisaPakan.created_at).format("DD MMMM YYYY, hh:mm:ss") })
            ]
          },
          sisaPakan.id
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
TableTempatPakan.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number
};
export {
  ChartTempatPakan as C,
  TableTempatPakan as T
};
