import { j as jsxs, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { usePage, useForm, router, Head } from "@inertiajs/react";
import Grid from "@mui/material/Unstable_Grid2/index.js";
import { Container, Stack } from "@mui/material";
import "@faker-js/faker";
import { T as TablePh } from "./TablePh-a7fa0fc9.js";
import { O as OverviewPh } from "./OverviewPh-44abeeae.js";
import { C as ChartPh } from "./ChartPh-bda74feb.js";
import { green, blue, red } from "@mui/material/colors/index.js";
import { useState, useEffect } from "react";
import "dayjs";
import { useMQTT } from "mqtt-vue-hook";
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
import "react-icons/io5/index.esm.js";
import "moment";
import "react-icons/im/index.esm.js";
import "react-apexcharts";
const routeOptions = () => {
  const option = {
    preserveState: true,
    preserveScroll: true,
    replace: true,
    only: ["phValues"]
  };
  return option;
};
function Index() {
  const mqttHook = useMQTT();
  const [message, setMessage] = useState();
  const { auth, phValues, lastPh, chartPh } = usePage().props;
  const [phValue, setPhValue] = useState(0);
  const [phColor, setPhColor] = useState(green[500]);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchPh, setSearchPh] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  useForm();
  ({
    page: currentPage ? currentPage + 1 : 0,
    searchPh: searchPh ? searchPh : "",
    rowsPerPage: rowsPerPage ? rowsPerPage : 5,
    dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
    dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
  });
  const [maxValue, setMaxValue] = useState(() => {
    if (chartPh) {
      var max = [];
      chartPh.map((item) => {
        max.push(item.max);
      });
      return max;
    }
  });
  const [minValue, setMinValue] = useState(() => {
    if (chartPh) {
      var min = [];
      chartPh.map((item) => {
        min.push(item.min);
      });
      return min;
    }
  });
  const [dateChart, SetDateChart] = useState(() => {
    if (chartPh) {
      var dt = [];
      chartPh.map((item) => {
        dt.push(item.date);
      });
      return dt;
    }
  });
  useEffect(() => {
    mqttHook.connect("wss://mqtt.efishy.my.id:8083/", { keepalive: 60 });
    mqttHook.subscribe(
      ["realTime"],
      0,
      {},
      () => {
        console.log("subscribed RealTime");
        setPhValue(lastPh.status_ph);
      }
    );
    mqttHook.registerEvent("realTime", (topic, message2) => {
      var msg = JSON.parse(message2);
      if (msg == 0) {
        setMessage(false);
        if (phValue > 8) {
          setPhColor(blue[500]);
        } else if (phValue < 6 || phValue == 0) {
          setPhColor(red[500]);
        } else {
          setPhColor(green[500]);
        }
      } else {
        setMessage(true);
        setPhValue(msg.valuesPh);
        if (phValue > 8) {
          setPhColor(blue[500]);
        } else if (phValue < 6 || phValue == 0) {
          setPhColor(red[500]);
        } else {
          setPhColor(green[500]);
        }
      }
    });
  }, []);
  useEffect(() => {
    if (searchPh != null || dateFrom != null || dateTo != null) {
      setCurrentPage(0);
      let page = currentPage + 1;
      router.get(
        route("kualitas-air.sensor-ph.index"),
        {
          page: page ? page : 0,
          searchPh: searchPh ? searchPh : "",
          rowsPerPage: rowsPerPage ? rowsPerPage : 5,
          dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
          dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
        },
        routeOptions()
      );
    }
  }, [searchPh, dateFrom, dateTo]);
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = currentPage + 1;
    router.get(
      route("kualitas-air.sensor-ph.index"),
      {
        page: page ? page : 0,
        searchPh: searchPh ? searchPh : "",
        rowsPerPage: rowsPerPage ? rowsPerPage : 5,
        dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
      },
      routeOptions()
    );
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("kualitas-air.sensor-ph.index"),
      {
        page,
        searchPh: searchPh ? searchPh : "",
        rowsPerPage: event.target.value,
        dateFrom: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateTo: dateTo ? dateTo.format("YYYY-MM-DD") : ""
      },
      routeOptions()
    );
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Informasi Ph Air" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Infomasi Ph Air" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 3, alignItems: { xs: "stretch", md: "flex-start" }, direction: { xs: "column", md: "row" }, alignItems: "flex-start", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(Grid, { items: true, xs: 12, md: 3, alignItems: "center", alignContent: "center", children: /* @__PURE__ */ jsx(
              OverviewPh,
              {
                phColors: phColor,
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: phValue
              }
            ) }),
            /* @__PURE__ */ jsx(Grid, { items: true, xs: 12, md: 9, children: /* @__PURE__ */ jsx(
              ChartPh,
              {
                dateChart,
                chartSeries: [
                  {
                    name: "Ph Minimum",
                    data: minValue
                  },
                  {
                    name: "Ph Maksimum",
                    data: maxValue
                  }
                ],
                sx: { height: "100%" }
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            TablePh,
            {
              items: phValues.data,
              count: phValues.total,
              rowsPerPage,
              page: currentPage,
              onRowsPerPageChange,
              onPageChange,
              searchPh,
              onSearchPh: ({ target }) => setSearchPh(target.value),
              dateFrom,
              onDateFromSearch: (value) => setDateFrom(value),
              dateTo,
              onDateToSearch: (value) => setDateTo(value)
            }
          )
        ] }) })
      ]
    }
  );
}
export {
  Index as default
};
