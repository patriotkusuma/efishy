import { j as jsxs, a as jsx } from "../ssr.js";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles/index.js";
import { Card, CardHeader, CardContent } from "@mui/material";
import Chart from "react-apexcharts";
import "react";
import "moment";
const useChartOptions = (dateChart) => {
  const theme = useTheme();
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
    colors: [theme.palette.warning.light, theme.palette.error.light],
    dataLabels: {
      enabled: true
    },
    stroke: {
      curve: "smooth",
      width: [4, 4]
    },
    plotOptions: {
      area: {
        fillTo: "origin"
      }
    },
    xaxis: {
      categories: dateChart
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Ph Minimum",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Ph Maksimum",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 0
    }
  };
};
const ChartPh = (props) => {
  const { chartSeries, sx, dateChart } = props;
  const chartOptions = useChartOptions(dateChart);
  return /* @__PURE__ */ jsxs(Card, { sx, children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Ph 30 Hari Terakhir" }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
      Chart,
      {
        height: 300,
        options: chartOptions,
        series: chartSeries,
        type: "line",
        width: "100%"
      }
    ) })
  ] });
};
ChartPh.prototype = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
  dateChart: PropTypes.any
};
export {
  ChartPh as C
};
