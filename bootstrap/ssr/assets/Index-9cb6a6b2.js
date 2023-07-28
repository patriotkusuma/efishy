import { j as jsxs, a as jsx } from "../ssr.js";
import "@faker-js/faker";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { useForm, Head, router } from "@inertiajs/react";
import { Container, Stack, Card, CardHeader, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/index.js";
import "./TablePh-a7fa0fc9.js";
import { O as OverviewSisaPakan, a as OverviewPakanTerakhir } from "./OverviewPakanTerakhir-6a42ed39.js";
import { C as ChartTempatPakan, T as TableTempatPakan } from "./TableTempatPakan-f78124a9.js";
import { useMQTT } from "mqtt-vue-hook";
import { useState, useEffect } from "react";
import moment from "moment";
import { S as SearchRiwayatPakan } from "./SearchRiwayatPakan-a9fc57ae.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "./Scrollbar-6c64c108.js";
import "simplebar-react";
import "@mui/material/styles/index.js";
import "prop-types";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/internals/demo/index.js";
import "react-icons/bi/index.esm.js";
import "@mui/x-date-pickers/AdapterDayjs/index.js";
import "@mui/material/colors/index.js";
import "react-icons/io5/index.esm.js";
import "react-icons/im/index.esm.js";
import "react-icons/gi/index.esm.js";
import "react-apexcharts";
function Index(props) {
  const mqttHook = useMQTT();
  const { auth, pakanTerakhir, chartSisaPakan, sisaPakans } = props;
  const [message, setMessage] = useState();
  const [pakanValue, setPakanValue] = useState(0);
  useForm();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchData, setSearchData] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [chartData, setChartData] = useState(() => {
    if (chartSisaPakan) {
      var max = [];
      chartSisaPakan.map((item) => {
        max.push(item.tinggi_pakan);
      });
      return max;
    } else {
      return null;
    }
  });
  const [dateChart, setDateChart] = useState(() => {
    if (chartSisaPakan) {
      var dt = [];
      chartSisaPakan.map((item) => {
        dt.push(moment(item.created_at).format("DD MMMM"));
      });
      return dt;
    } else {
      return null;
    }
  });
  const fetchData = (row = null, pg = null) => {
    router.get(
      route("pakan.sisa-pakan.index"),
      {
        page: pg ? pg : currentPage,
        rowsPerPage: row ? row : rowsPerPage,
        searchData: searchData ? searchData : "",
        dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
      },
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ["sisaPakans"]
      }
    );
  };
  useEffect(() => {
    mqttHook.connect("wss://mqtt.efishy.my.id:8083/", { keepalive: 60 });
    mqttHook.subscribe(
      ["realTime"],
      0,
      {},
      () => {
        console.log("subscribed RealTime");
        setPakanValue(chartSisaPakan[0].tinggi_pakan);
      }
    );
    if (searchData != null || dateFrom || dateTo) {
      console.log(dateFrom);
      setCurrentPage(0);
      let page = currentPage + 1;
      fetchData(null, page);
    }
  }, [searchData, dateFrom, dateTo, ""]);
  mqttHook.registerEvent("realTime", (topic, message2) => {
    var msg = JSON.parse(message2);
    if (msg == 0) {
      setMessage(false);
    } else {
      setMessage(true);
      setPakanValue(msg.valueSisaPakan);
      console.log(msg.valueSisaPakan);
    }
  });
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = value + 1;
    fetchData(null, page);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    fetchData(event.target.value, page);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Informasi Tempat Pakan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Infomasi Tempat Pakan" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 3, sx: { flexDirection: { xs: "column", md: "row" } }, justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", md: "auto", children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, direction: "column", alignItems: "stretch", children: [
              /* @__PURE__ */ jsx(
                OverviewSisaPakan,
                {
                  customColor: "#fbc02d",
                  sx: {
                    height: "100%",
                    borderRadius: "10px"
                  },
                  value: pakanValue ? pakanValue : 0
                }
              ),
              /* @__PURE__ */ jsx(
                OverviewPakanTerakhir,
                {
                  customColor: "#fbc02d",
                  sx: {
                    height: "100%",
                    borderRadius: "10px"
                  },
                  value: pakanTerakhir.jumlah_keluar,
                  time: moment(pakanTerakhir.created_at).format("DD MMMM YYYY")
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: "auto", md: 8, children: /* @__PURE__ */ jsx(
              ChartTempatPakan,
              {
                dateChart,
                chartSeries: [
                  {
                    name: "Sisa Pakan",
                    data: chartData
                  }
                ],
                sx: { width: 1 }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { title: "Riwayat Tempat Pakan" }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx(
                SearchRiwayatPakan,
                {
                  searchData,
                  dateFrom,
                  dateTo,
                  onDateFrom: (value) => setDateFrom(value),
                  onDateTo: (value) => setDateTo(value),
                  onSearchData: ({ target }) => setSearchData(target.value)
                }
              ),
              /* @__PURE__ */ jsx(
                TableTempatPakan,
                {
                  count: sisaPakans.total,
                  page: currentPage,
                  rowsPerPage,
                  items: sisaPakans.data,
                  onPageChange,
                  onRowsPerPageChange: handleChangeRowsPerPage
                }
              )
            ] })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  Index as default
};
