import { j as jsxs, a as jsx } from "../ssr.js";
import { I as InputLabel } from "./InputLabel-164e4edc.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { useForm, Head } from "@inertiajs/react";
import { Container, Grid, Card, CardHeader, CardContent, Stack, FormControl, Select, MenuItem, OutlinedInput, InputAdornment, Button, SvgIcon } from "@mui/material";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/index.js";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { BsCalendar2Plus } from "react-icons/bs/index.esm.js";
import { MdArrowBack } from "react-icons/md/index.esm.js";
import "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "mqtt-vue-hook";
function Create(props) {
  const auth = props.auth;
  const jadwalPakan = props.jadwalPakan;
  const [selectJumlah, setSelectJumlah] = useState(() => {
    if (jadwalPakan) {
      if (jadwalPakan.jumlah > 300 || jadwalPakan.jumlah < 100) {
        return "lain";
      } else {
        return jadwalPakan.jumlah;
      }
    } else {
      return 0;
    }
  });
  const [isMore, setIsMore] = useState(() => {
    if (jadwalPakan) {
      if (jadwalPakan.jumlah > 300 || jadwalPakan.jumlah < 100) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
  const [moreValue, setMoreValue] = useState(() => {
    if (jadwalPakan) {
      return jadwalPakan.jumlah;
    } else {
      return 0;
    }
  });
  const [waktuPakan, setWaktuPakan] = useState(() => {
    if (jadwalPakan) {
      let waktu = dayjs(jadwalPakan.set_waktu, "HH:mm:ss");
      return waktu;
    } else {
      dayjs();
    }
  });
  const { data, setData, put, post, errors, get } = useForm({
    id: jadwalPakan ? jadwalPakan.id : "",
    set_waktu: jadwalPakan ? jadwalPakan.set_waktu : "",
    jumlah: jadwalPakan ? jadwalPakan.jumlah : ""
  });
  useEffect(() => {
    if (waktuPakan) {
      setData("set_waktu", waktuPakan.format("HH:mm:ss"));
    }
  }, [waktuPakan]);
  const back = () => {
    get(route("pakan.atur-pakan.index"));
  };
  const submit = (e) => {
    setData("jumlah", moreValue);
    e.preventDefault();
    if (!data.id) {
      post(route("pakan.atur-pakan.store", data));
    } else {
      put(route("pakan.atur-pakan.update", jadwalPakan.id));
    }
  };
  const handleSelectJumlah = (e) => {
    if (e.target.value == "lain") {
      setSelectJumlah(e.target.value);
      setIsMore(true);
    } else {
      setData("jumlah", e.target.value);
      setMoreValue(e.target.value);
      setSelectJumlah(e.target.value);
      setIsMore(false);
    }
  };
  const handleMoreValue = (e) => {
    setMoreValue(e.target.value);
    setData("jumlah", e.target.value);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Atur Pakan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Atur Pakan" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsx(Grid, { container: true, spacing: 3, sx: { flexDirection: { xs: "column", md: "row" } }, justifyContent: "space-between", children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 6, children: /* @__PURE__ */ jsxs(Card, { sx: { borderRadius: "10px" }, children: [
          /* @__PURE__ */ jsx(CardHeader, { title: "Atur jadwal Pakan" }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Stack, { direction: "column", spacing: 2, justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsx(DemoContainer, { components: ["TimePicker", "MobileTimePicker"], children: /* @__PURE__ */ jsx(
              MobileTimePicker,
              {
                value: waktuPakan,
                onChange: (e) => {
                  setWaktuPakan(e);
                },
                label: "Waktu Pakan",
                ampm: true
              }
            ) }) }),
            /* @__PURE__ */ jsxs(FormControl, { children: [
              /* @__PURE__ */ jsx(InputLabel, { id: "demo-simple-select-label", children: "Jumlah Pakan" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  labelId: "demo-simple-select-label",
                  id: "demo-simple-select",
                  label: "Age",
                  type: "number",
                  value: selectJumlah,
                  onChange: handleSelectJumlah,
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: 100, children: "100 gram" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: 200, children: "200 gram" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: 300, children: "300 gram" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: "lain", children: "Lainnya..." })
                  ]
                }
              )
            ] }),
            isMore == true ? /* @__PURE__ */ jsxs(FormControl, { fullwidth: true, variant: "outlined", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: "Jumlah Lainnya" }),
              /* @__PURE__ */ jsx(
                OutlinedInput,
                {
                  value: moreValue ? moreValue : "",
                  onChange: handleMoreValue,
                  name: "jumlahPakan",
                  id: "outlined-adornment-password",
                  type: "number",
                  endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: "gram" }),
                  label: "Input Lainnya"
                }
              )
            ] }) : "",
            /* @__PURE__ */ jsxs(Stack, { xs: "auto", direction: "row", justifyContent: "space-between", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: back,
                  sx: { marginTop: "5%" },
                  style: {
                    backgroundColor: "#009688"
                  },
                  startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(MdArrowBack, {}) }),
                  variant: "contained",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  sx: { marginTop: "5%" },
                  onClick: submit,
                  startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(BsCalendar2Plus, {}) }),
                  variant: "contained",
                  children: "Save"
                }
              )
            ] })
          ] }) })
        ] }) }) }) })
      ]
    }
  );
}
export {
  Create as default
};
