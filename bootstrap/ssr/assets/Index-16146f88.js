import { j as jsxs, a as jsx } from "../ssr.js";
import "./ChartPh-bda74feb.js";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles/index.js";
import { Card, CardHeader, CardContent, Stack, Grid, FormControl, InputLabel, OutlinedInput, InputAdornment, Box, Table, TableHead, TableRow, TableCell, TableBody, Typography, TablePagination, Container } from "@mui/material";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import moment from "moment";
import { O as OverviewSuhu } from "./OverviewSuhu-4a59290b.js";
import "./Scrollbar-6c64c108.js";
import { BiSearch } from "react-icons/bi/index.esm.js";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/index.js";
import "dayjs";
import { FaTemperatureHigh } from "react-icons/fa/index.esm.js";
import { grey, yellow, blue, red, green } from "@mui/material/colors/index.js";
import { ImWarning } from "react-icons/im/index.esm.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import "@faker-js/faker";
import { usePage, useForm, router, Head } from "@inertiajs/react";
import { useMQTT } from "mqtt-vue-hook";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "simplebar-react";
import "@headlessui/react";
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
          text: "Suhu Minimum",
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
          text: "Suhu Maksimum",
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
const ChartSuhu = (props) => {
  const { chartSeries, sx, dateChart } = props;
  const chartOptions = useChartOptions(dateChart);
  return /* @__PURE__ */ jsxs(Card, { sx, children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Suhu 30 Hari Terakhir" }),
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
ChartSuhu.prototype = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
  dateChart: PropTypes.array.isRequired
};
const TableSuhu = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    searchSuhu,
    dateFrom,
    dateTo,
    onSearchSuhu,
    onDateFromSearch,
    onDateToSearch
  } = props;
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Data Suhu" }),
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
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, sx: { m: 1 }, variant: "outlined", children: [
                  /* @__PURE__ */ jsx(InputLabel, { htmlFor: "outlined-adorment-search", children: "Cari" }),
                  /* @__PURE__ */ jsx(
                    OutlinedInput,
                    {
                      id: "outlined-adorment-search",
                      type: "text",
                      value: searchSuhu,
                      onChange: onSearchSuhu,
                      startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(BiSearch, {}) })
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 3, children: /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
                  DatePicker,
                  {
                    componentsProps: {
                      actionBar: {
                        actions: ["cancel", "clear", "accept"]
                      }
                    },
                    value: dateFrom,
                    onAccept: onDateFromSearch,
                    format: "DD MMMM YYYY",
                    label: "Dari tanggal"
                  }
                ) }) }) }),
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 3, children: /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
                  DatePicker,
                  {
                    componentsProps: {
                      actionBar: {
                        actions: ["cancel", "clear", "accept"]
                      }
                    },
                    value: dateTo,
                    onAccept: onDateToSearch,
                    label: "Sampai tanggal",
                    minDate: dateFrom,
                    format: "DD MMMM YYYY"
                  }
                ) }) }) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Table, { children: [
            /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { children: "No" }),
              /* @__PURE__ */ jsx(TableCell, { children: "Suhu" }),
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
            ) : items.map((suhu, index) => {
              var suhuColor = blue[500];
              if (suhu.status_suhu > 32) {
                suhuColor = red[500];
              }
              if (suhu.status_suhu < 26) {
                suhuColor = blue[500];
              }
              if (suhu.status_suhu > 26 && suhu.status_suhu < 32) {
                suhuColor = green[500];
              }
              return /* @__PURE__ */ jsxs(
                TableRow,
                {
                  hover: true,
                  children: [
                    /* @__PURE__ */ jsx(TableCell, { children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
                    /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [
                      /* @__PURE__ */ jsx(Typography, { variant: "h5", color: suhuColor, children: /* @__PURE__ */ jsx(FaTemperatureHigh, { color: suhuColor }) }),
                      /* @__PURE__ */ jsxs(Typography, { variant: "h6", children: [
                        /* @__PURE__ */ jsx("b", { children: suhu.status_suhu + " " }),
                        "Ph"
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(TableCell, { children: moment(suhu.created_at).format("HH:mm:ss, DD MMMM YYYY") })
                  ]
                },
                suhu.id
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
TableSuhu.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  searchSuhu: PropTypes.string,
  dateFrom: PropTypes.any,
  dateTo: PropTypes.any,
  onSearchSuhu: PropTypes.func,
  onDateFromSearch: PropTypes.func,
  onDateToSearch: PropTypes.func
};
const routeOptions = () => {
  const option = {
    preserveState: true,
    preserveScroll: true,
    replace: true,
    only: ["suhus"]
  };
  return option;
};
const Index = () => {
  const { auth, suhus, lastSuhu, maxChartSuhu } = usePage().props;
  const [suhuValue, setSuhuValue] = useState(0);
  const [suhuColor, setSuhuColor] = useState(green[500]);
  const [searchSuhu, setSearchSuhu] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [maxValue, setMaxValue] = useState(() => {
    if (maxChartSuhu) {
      var max = [];
      maxChartSuhu.map((item) => {
        max.push(item.max);
      });
      return max;
    }
  });
  const [minValue, setMinValue] = useState(() => {
    if (maxChartSuhu) {
      var minVal = [];
      maxChartSuhu.map((item) => {
        minVal.push(item.min);
      });
      return minVal;
    }
  });
  const [dateChart, SetDateChart] = useState(() => {
    if (maxChartSuhu) {
      var dt = [];
      maxChartSuhu.map((item) => {
        dt.push(item.date);
      });
      return dt;
    }
  });
  const mqttHook = useMQTT();
  const [message, setMessage] = useState();
  useForm();
  useEffect(() => {
    mqttHook.connect("wss://mqtt.efishy.my.id:8083/", { keepalive: 60 });
    mqttHook.subscribe(
      ["realTime"],
      0,
      {},
      () => {
        console.log("subscribed RealTime");
        setSuhuValue(lastSuhu.status_suhu);
      }
    );
  }, []);
  mqttHook.registerEvent("realTime", (topic, message2) => {
    var msg = JSON.parse(message2);
    if (msg == 0) {
      setMessage(false);
      console.log("message 0");
      if (suhuValue > 32) {
        setSuhuColor(red[500]);
      } else if (suhuValue < 26) {
        setSuhuColor(yellow[700]);
      } else {
        setSuhuColor(green[500]);
      }
    } else {
      setMessage(true);
      setSuhuValue(msg.valuesSuhu);
      if (suhuValue > 32) {
        setSuhuColor(red[500]);
      } else if (suhuValue < 26) {
        setSuhuColor(yellow[700]);
      } else {
        setSuhuColor(green[500]);
      }
    }
  });
  useEffect(() => {
    if (searchSuhu != null || dateFrom != null || dateTo != null) {
      setCurrentPage(0);
      let page = currentPage + 1;
      router.get(
        route("kualitas-air.suhu.index"),
        {
          page,
          searchSuhu: searchSuhu ? searchSuhu : "",
          rowsPerPage,
          dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : "",
          dateTo: dateTo ? dateTo.format("DD-MM-YYYY") : ""
        },
        routeOptions()
      );
    }
  }, [searchSuhu, dateFrom, dateTo]);
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = currentPage + 1;
    router.get(
      route("kualitas-air.suhu.index"),
      {
        page,
        searchSuhu: searchSuhu ? searchSuhu : "",
        rowsPerPage,
        dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : "",
        dateTo: dateTo ? dateTo.format("DD-MM-YYYY") : ""
      },
      routeOptions()
    );
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("kualitas-air.suhu.index"),
      {
        page,
        searchSuhu: searchSuhu ? searchSuhu : "",
        rowsPerPage: event.target.value,
        dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : "",
        dateTo: dateTo ? dateTo.format("DD-MM-YYYY") : ""
      },
      routeOptions()
    );
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Informasi Suhu Kolam" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Informasi Suhu" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, justifyContent: "space-between", direction: "column", children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, sx: { flexDirection: { xs: "column", md: "row" } }, alignItems: { xs: "stretch", md: "flex-start" }, justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 3, children: /* @__PURE__ */ jsx(
              OverviewSuhu,
              {
                suhuColors: suhuColor,
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: suhuValue.toLocaleString("id-ID", { maximumFractionDigits: 2 })
              }
            ) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 9, children: /* @__PURE__ */ jsx(
              ChartSuhu,
              {
                dateChart,
                chartSeries: [
                  {
                    name: "Suhu Minimum",
                    data: minValue
                  },
                  {
                    name: "Suhu Maksimum",
                    data: maxValue
                  }
                ],
                sx: { height: "100%" }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            TableSuhu,
            {
              items: suhus.data,
              count: suhus.total,
              page: currentPage,
              onPageChange,
              onRowsPerPageChange,
              rowsPerPage,
              searchSuhu,
              onSearchSuhu: ({ target }) => setSearchSuhu(target.value),
              onDateFromSearch: (value) => setDateFrom(value),
              dateFrom,
              dateTo,
              onDateToSearch: (value) => setDateTo(value)
            }
          )
        ] }) })
      ]
    }
  );
};
export {
  Index as default
};
