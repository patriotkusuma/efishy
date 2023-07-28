import { j as jsxs, a as jsx } from "../ssr.js";
import { S as SearchRiwayatPakan } from "./SearchRiwayatPakan-a9fc57ae.js";
import { Card, CardHeader, CardContent, useTheme, Stack, Typography, Avatar, SvgIcon, Container, Grid } from "@mui/material";
import moment from "moment";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { MdAttachMoney } from "react-icons/md/index.esm.js";
import { SiIfood } from "react-icons/si/index.esm.js";
import { T as TableRiwayatPakan } from "./TableRiwayatPakan-08c9e625.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { usePage, useForm, router, Head } from "@inertiajs/react";
import { green } from "@mui/material/colors/index.js";
import { useState, useEffect } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDayjs/index.js";
import "@mui/x-date-pickers/internals/demo/index.js";
import "react-icons/bi/index.esm.js";
import "./Scrollbar-6c64c108.js";
import "simplebar-react";
import "@mui/material/styles/index.js";
import "@mui/material/useMediaQuery/index.js";
import "react-icons/im/index.esm.js";
import "@headlessui/react";
import "mqtt-vue-hook";
const useChartOptions = (dateChart) => {
  useTheme();
  return {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: "Data Pakan Per bulan Tahun " + moment().format("YYYY"),
      align: "left",
      offsetX: 110
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
          color: "#008FFB"
        },
        labels: {
          style: {
            colors: "#008FFB"
          }
        },
        title: {
          text: "Pakan Keluar (dalam gram)",
          style: {
            color: "#008FFB"
          }
        },
        tooltip: {
          enabled: true
        }
      },
      {
        seriesName: "Income",
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#00E396"
        },
        labels: {
          style: {
            colors: "#00E396"
          }
        },
        title: {
          text: "Operating Cashflow",
          style: {
            color: "#00E396"
          }
        }
      }
      // {
      //     seriesName: 'Revenue',
      //       opposite: true,
      //       axisTicks: {
      //         show: true,
      //     },
      //       axisBorder: {
      //         show: true,
      //         color: '#FEB019'
      //     },
      //       labels: {
      //         style: {
      //           colors: '#FEB019',
      //     },
      //       },
      //       title: {
      //         text: "Revenue (thousand crores)",
      //         style: {
      //           color: '#FEB019',
      //         }
      //     }
      // }
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: "topLeft",
        // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
      intersect: true
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
    /* chart: {
                background: 'transparent',
                stacked:false,
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: true,
                        zoomout: true,
                        pan: true,
    
                    },
                }
            },
            dataLabels: {
                enabled:true,
                formatter: function (value) {
                    return value.toLocaleString('id') + " gram"
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            stroke: {
                curve: 'smooth',
                width: [4, 4]
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            xaxis: {
                categories: dateChart,
                position: 'top',
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled:true,
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + " gram";
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
                text: 'Pakan keluar per bulan',
                floating: false,
                offsetY: 280,
                align: 'center',
                style: {
                    color: '#444'
                }
            }, */
  };
};
const ChartPakanKeluar = (props) => {
  const { chartSeries, sx, dateChart } = props;
  const chartOptions = useChartOptions(dateChart);
  return /* @__PURE__ */ jsxs(Card, { sx: {
    borderRadius: "10px"
  }, children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Pakan Keluar per Bulan" }),
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
ChartPakanKeluar.prototype = {
  chartSeries: PropTypes.array.isRequired,
  sx: PropTypes.object,
  dateChart: PropTypes.any
};
const OverviewDanaKeluar = (props) => {
  const { color, sx, value } = props;
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
            /* @__PURE__ */ jsxs(
              Typography,
              {
                color: "text.secondary",
                variant: "overline",
                children: [
                  "Dana Keluar bulan ",
                  /* @__PURE__ */ jsxs("strong", { children: [
                    " ",
                    moment().format("MMMM YYYY")
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(Typography, { variant: "h4", children: "Rp " + value.toLocaleString("id") })
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: color,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(MdAttachMoney, {}) })
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
            children: "Total Keluar"
          }
        )
      }
    )
  ] }) });
};
OverviewDanaKeluar.protoType = {
  color: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
const OverviewPakanKeluar = (props) => {
  const { color, sx, value } = props;
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
            /* @__PURE__ */ jsxs(
              Typography,
              {
                color: "text.secondary",
                variant: "overline",
                children: [
                  "Pakan Keluar bulan ",
                  /* @__PURE__ */ jsxs("strong", { children: [
                    " ",
                    moment().format("MMMM YYYY")
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(Typography, { variant: "h4", children: value + " gram" })
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: color,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(SiIfood, {}) })
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
            children: "Total Keluar"
          }
        )
      }
    )
  ] }) });
};
OverviewPakanKeluar.protoType = {
  color: PropTypes.string,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
const Index = () => {
  const { auth, jumlahKeluar, chartPakan, reportPakan } = usePage().props;
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerpage, setRowsPerPage] = useState(5);
  const [searchData, setSearchData] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  useForm();
  const [dateChart, setDateChart] = useState(() => {
    if (chartPakan) {
      var dt = [];
      chartPakan.map((item) => {
        dt.push(item.months);
      });
      return dt;
    }
  });
  const [valueChart, setValueChart] = useState(() => {
    if (chartPakan) {
      var max = [];
      chartPakan.map((item) => {
        max.push(item.keluar);
      });
      return max;
    }
  });
  useEffect(() => {
    if (searchData != null || dateFrom != null || dateTo != null) {
      setCurrentPage(0);
      let page = currentPage + 1;
      fetchData(null, page);
    }
  }, [searchData, dateFrom, dateTo]);
  const fetchData = (row = null, pg = null) => {
    router.get(
      route("report.index"),
      {
        page: pg ? pg : currentPage,
        rowsPerPage: row ? row : rowsPerpage,
        searchData: searchData ? searchData : "",
        dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
      },
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ["reportPakan"]
      }
    );
  };
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = value + 1;
    fetchData(null, page);
  };
  const onRowsPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    fetchData(event.target.value, page);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Report" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Report" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsx(
                OverviewPakanKeluar,
                {
                  color: "green",
                  sx: {
                    borderRadius: "10px"
                  },
                  value: jumlahKeluar ? jumlahKeluar.toLocaleString("id") : 0
                }
              ),
              /* @__PURE__ */ jsx(
                OverviewDanaKeluar,
                {
                  color: green[500],
                  sx: {
                    borderRadius: "10px"
                  },
                  value: "1000000"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 8, children: /* @__PURE__ */ jsx(
              ChartPakanKeluar,
              {
                dateChart,
                chartSeries: [
                  {
                    name: "Pakan Bulanan",
                    data: valueChart
                  },
                  {
                    name: "Dana Bulanan",
                    data: valueChart
                  }
                ]
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { sx: { borderRadius: "10px" }, children: [
            /* @__PURE__ */ jsx(CardHeader, { title: "Report" }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx(
                SearchRiwayatPakan,
                {
                  searchData,
                  dateFrom,
                  dateTo,
                  onSearchData: ({ target }) => setSearchData(target.value),
                  onDateFrom: (value) => setDateFrom(value),
                  onDateTo: (value) => setDateTo(value)
                }
              ),
              /* @__PURE__ */ jsx(
                TableRiwayatPakan,
                {
                  count: reportPakan.total,
                  items: reportPakan.data,
                  onPageChange,
                  onRowsPerPageChange: onRowsPageChange,
                  page: currentPage,
                  rowsPerPage: rowsPerpage
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
};
export {
  Index as default
};
