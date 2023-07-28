import { j as jsxs, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { useForm, router, Head, Link } from "@inertiajs/react";
import { Card, CardHeader, CardContent, Stack, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment, Button, Container, Snackbar, Alert, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/index.js";
import { O as OverviewSuhu } from "./OverviewSuhu-4a59290b.js";
import { O as OverviewPh } from "./OverviewPh-44abeeae.js";
import { styled } from "@mui/material/styles/index.js";
import { O as OverviewSisaPakan, a as OverviewPakanTerakhir } from "./OverviewPakanTerakhir-6a42ed39.js";
import { useMQTT } from "mqtt-vue-hook";
import { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { green, yellow } from "@mui/material/colors/index.js";
import { T as TableRiwayatPakan } from "./TableRiwayatPakan-08c9e625.js";
import { S as SearchRiwayatPakan } from "./SearchRiwayatPakan-a9fc57ae.js";
import { PropTypes } from "prop-types";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "react-icons/io5/index.esm.js";
import "react-icons/gi/index.esm.js";
import "./Scrollbar-6c64c108.js";
import "simplebar-react";
import "@mui/material/useMediaQuery/index.js";
import "react-icons/im/index.esm.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/AdapterDayjs/index.js";
import "@mui/x-date-pickers/internals/demo/index.js";
import "react-icons/bi/index.esm.js";
const PakanManual = (props) => {
  const {
    jumlah,
    isMore,
    handleJumlahChange,
    submit,
    moreValue,
    handleMoreValue
  } = props;
  return /* @__PURE__ */ jsxs(Card, { sx: { borderRadius: "10px" }, children: [
    /* @__PURE__ */ jsx(CardHeader, { title: "Pakan Manual" }),
    /* @__PURE__ */ jsx(CardContent, { md: 6, children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, alignItems: "flex-start", children: [
      /* @__PURE__ */ jsxs(FormControl, { sx: { minWidth: 300 }, children: [
        /* @__PURE__ */ jsx(InputLabel, { id: "demo-simple-select-label", htmlFor: "demo-simple-select-label", children: "Jumlah Pakan" }),
        /* @__PURE__ */ jsxs(
          Select,
          {
            labelId: "demo-simple-select-label",
            id: "demo-simple-select",
            value: jumlah,
            label: "Jumlah Pakan",
            onChange: handleJumlahChange,
            children: [
              /* @__PURE__ */ jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsx("em", { children: "None" }) }),
              /* @__PURE__ */ jsx(MenuItem, { value: 100, children: "100" }),
              /* @__PURE__ */ jsx(MenuItem, { value: 200, children: "200" }),
              /* @__PURE__ */ jsx(MenuItem, { value: 300, children: "300" }),
              /* @__PURE__ */ jsx(MenuItem, { value: "lain", children: "Lainnya..." })
            ]
          }
        )
      ] }),
      isMore == true ? /* @__PURE__ */ jsxs(FormControl, { sx: { minWidth: 300 }, variant: "outlined", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: "Jumlah Lainnya" }),
        /* @__PURE__ */ jsx(
          OutlinedInput,
          {
            value: moreValue ? moreValue : "",
            onChange: handleMoreValue,
            name: "moreValue",
            id: "outlined-adornment-password",
            type: "number",
            endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: "gram" }),
            label: "Input Lainnya"
          }
        )
      ] }) : "",
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: submit,
          variant: "contained",
          color: "success",
          size: "large",
          children: "Makan Sekarang"
        }
      )
    ] }) })
  ] });
};
PakanManual.protoType = {
  jumlah: PropTypes.number,
  isMore: PropTypes.bool,
  handleJumlahChange: PropTypes.func,
  moreValue: PropTypes.number,
  handleMoreValue: PropTypes.func,
  submit: PropTypes.func
};
const PakanManual$1 = PakanManual;
styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const paramOption = () => {
  const option = {
    preserveState: true,
    preserveScroll: true,
    replace: true,
    only: ["riwayatPakan"]
  };
  return option;
};
function Dashboard(props) {
  const mqttHook = useMQTT();
  const { riwayatPakan, flash, pakanTerakhir } = props;
  const [message, setMessage] = useState();
  const [suhuValue, setSuhuValue] = useState(0);
  const [suhuColor, setSuhuColor] = useState(green[500]);
  const [phValue, setPhValue] = useState(0);
  const [phColor, setPhColor] = useState(green[500]);
  const [pakanValue, setPakanValue] = useState(0);
  const [pakanColor, setPakanColor] = useState(green[500]);
  const [jumlah, setJumlah] = useState();
  const [isMore, setIsMore] = useState(false);
  const [countMore, setCountMore] = useState(0);
  const [searchRiwayatPakan, setSearchRiwayatPakan] = useState(null);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsRiwayatPakan, setRowsRiwayatPakan] = useState(5);
  useForm();
  const [alert, setAlert] = useState({ value: false, count: 0 });
  useEffect(() => {
    mqttHook.connect("wss://mqtt.efishy.my.id:8083/", { keepalive: 60 });
    mqttHook.subscribe(
      ["realTime"],
      0,
      {},
      () => {
        console.log("subrek");
      }
    );
    if (flash.success != null && alert.count == 0) {
      setAlert({ value: true });
    }
  }, [mqttHook, flash.success]);
  const fetchRiwayatPakan = () => {
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("dashboard"),
      {
        page: page ? page : 0,
        searchReportPakan: searchRiwayatPakan,
        dateFromReportPakan: dateFrom != null ? dateFrom.format("YYYY-MM-DD") : "",
        dateToReportPakan: dateTo != null ? dateTo.format("YYYY-MM-DD") : "",
        rowsPerPageReport: rowsRiwayatPakan ? rowsRiwayatPakan : 5
      },
      paramOption()
    );
  };
  useEffect(() => {
    if (searchRiwayatPakan != null || dateFrom != null || dateTo != null) {
      fetchRiwayatPakan();
    }
  }, [searchRiwayatPakan, dateFrom, dateTo]);
  mqttHook.registerEvent("realTime", (topic, message2) => {
    var msg = JSON.parse(message2);
    if (msg == 0) {
      setMessage(false);
    } else {
      setMessage(true);
      setSuhuValue(msg.valuesSuhu);
      setPhValue(msg.valuePh);
      setPakanValue(msg.valueSisaPakan);
      if (suhuValue > 32) {
        setSuhuColor("red");
      } else if (suhuValue < 26) {
        setSuhuColor(yellow[700]);
      } else {
        setSuhuColor(green[500]);
      }
      if (phValue > 8) {
        setPhColor("red");
      } else if (phValue < 6) {
        setPhColor(green[500]);
      } else {
        setPhColor(yellow[700]);
      }
      if (pakanValue < 20) {
        setPakanColor("red");
      } else if (pakanValue > 20 && pakanValue < 80) {
        setPakanColor(yellow[700]);
      } else {
        setPakanColor(green[500]);
      }
    }
  });
  const handleJumlahChange = (e) => {
    if (e.target.value == "lain") {
      setIsMore(true);
    } else {
      setIsMore(false);
    }
    setCountMore(e.target.value);
    setJumlah(e.target.value);
  };
  const handleMoreValue = (e) => {
    setCountMore(e.target.value);
  };
  const submitManual = (e) => {
    e.preventDefault();
    router.post(
      route("pakan-manual"),
      {
        jumlah_keluar: countMore
      },
      {
        preserveScroll: true,
        preserveState: true
      }
    );
    setAlert({ count: 0 });
  };
  const handleRowsRiwayatChange = useCallback((e) => {
    setRowsRiwayatPakan(+e.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("dashboard"),
      {
        page,
        searchReportPakan: searchRiwayatPakan ? searchRiwayatPakan : "",
        dateFromReportPakan: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateToReportPakan: dateTo ? dateTo.format("YYYY-MM-DD") : "",
        rowsPerPageReport: e.target.value
      },
      paramOption()
    );
  }, []);
  const handlePageRiwayatChange = (e, value) => {
    setCurrentPage(value);
    let page = currentPage + 1;
    router.get(
      route("dashboard"),
      {
        page: page ? page : 0,
        searchReportPakan: searchRiwayatPakan ? searchRiwayatPakan : "",
        dateFromReportPakan: dateFrom ? dateFrom.format("YYYY-MM-DD") : "",
        dateToReportPakan: dateTo ? dateTo.format("YYYY-MM-DD") : "",
        rowsPerPageReport: rowsRiwayatPakan
      },
      paramOption()
    );
  };
  const alertClose = () => {
    setAlert({ value: false, count: 1 });
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: props.auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { direction: "column", spacing: 4, children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1, sx: { flexDirection: { xs: "column", md: "row" } }, alignItems: "flex-start", justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 2.5, children: /* @__PURE__ */ jsx(Link, { href: route("kualitas-air.suhu.index"), children: /* @__PURE__ */ jsx(
              OverviewSuhu,
              {
                suhuColors: suhuColor,
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: suhuValue.toLocaleString("id-ID", { maximumFractionDigits: 2 })
              }
            ) }) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 2.5, children: /* @__PURE__ */ jsx(Link, { href: route("kualitas-air.sensor-ph.index"), children: /* @__PURE__ */ jsx(
              OverviewPh,
              {
                phColors: phColor,
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: phValue
              }
            ) }) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 2.5, children: /* @__PURE__ */ jsx(Link, { href: route("pakan.sisa-pakan.index"), children: /* @__PURE__ */ jsx(
              OverviewSisaPakan,
              {
                customColor: pakanColor,
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: pakanValue
              }
            ) }) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(Link, { href: route("pakan.atur-pakan.index"), children: /* @__PURE__ */ jsx(
              OverviewPakanTerakhir,
              {
                customColor: "blue",
                sx: {
                  height: "100%",
                  borderRadius: "10px"
                },
                value: pakanTerakhir.jumlah_keluar,
                time: moment(pakanTerakhir.created_at).format("DD MMMM YYYY, HH:mm:ss")
              }
            ) }) })
          ] }),
          /* @__PURE__ */ jsx(
            PakanManual$1,
            {
              jumlah,
              isMore,
              handleJumlahChange,
              moreValue: countMore,
              handleMoreValue,
              submit: submitManual
            }
          ),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { title: "Riwayat Pemberian Pakan" }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsx(
                SearchRiwayatPakan,
                {
                  searchData: searchRiwayatPakan,
                  dateFrom,
                  dateTo,
                  onSearchData: ({ target }) => setSearchRiwayatPakan(target.value),
                  onDateFrom: (value) => setDateFrom(value),
                  onDateTo: (value) => setDateTo(value)
                }
              ),
              /* @__PURE__ */ jsx(
                TableRiwayatPakan,
                {
                  items: riwayatPakan.data,
                  count: riwayatPakan.total,
                  rowsPerPage: rowsRiwayatPakan,
                  onRowsPerPageChange: handleRowsRiwayatChange,
                  onPageChange: handlePageRiwayatChange,
                  page: currentPage
                }
              )
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          Snackbar,
          {
            anchorOrigin: { vertical: "top", horizontal: "right" },
            open: alert.value,
            autoHideDuration: 6e3,
            children: /* @__PURE__ */ jsx(
              Alert,
              {
                onClose: alertClose,
                severity: "success",
                sx: { width: "100%" },
                variant: "filled",
                children: flash ? flash.success : ""
              }
            )
          }
        )
      ]
    }
  );
}
export {
  Dashboard as default
};
