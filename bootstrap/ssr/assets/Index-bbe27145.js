import { j as jsxs, a as jsx } from "../ssr.js";
import { M as ModalJadwalPakan } from "./ModalJadwalPakan-9d6b996d.js";
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button, SvgIcon, TablePagination, Container, Card, CardHeader } from "@mui/material";
import "./Scrollbar-6c64c108.js";
import PropTypes from "prop-types";
import { useState } from "react";
import dayjs from "dayjs";
import { FaArrowLeft } from "react-icons/fa/index.esm.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { useForm, Head, router } from "@inertiajs/react";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/internals/demo/index.js";
import "react-icons/bi/index.esm.js";
import "@mui/x-date-pickers/AdapterDayjs/index.js";
import "simplebar-react";
import "@mui/material/styles/index.js";
import "@headlessui/react";
import "mqtt-vue-hook";
const TablePakan = (props) => {
  const {
    count = 0,
    items,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    onEditItem,
    editItem
  } = props;
  useState(false);
  useState(dayjs("2022-04-17"));
  return /* @__PURE__ */ jsxs(Paper, { sx: { width: "100%", overflow: "hidden", padding: "2%" }, children: [
    /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { stickyHeader: true, "aria-label": "sticky table", children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "No" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "Nama" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "Keterangan" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "Jumlah" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "Harga/Kg" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 }, children: "Tanggal" }),
        /* @__PURE__ */ jsx(TableCell, { sx: { fontWeight: 700 } })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: items.map((pakan, index) => {
        return /* @__PURE__ */ jsxs(
          TableRow,
          {
            hover: true,
            children: [
              /* @__PURE__ */ jsx(TableCell, { children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
              /* @__PURE__ */ jsx(TableCell, { children: pakan.nama }),
              /* @__PURE__ */ jsx(TableCell, { children: pakan.keterangan }),
              /* @__PURE__ */ jsx(TableCell, { children: pakan.jumlah }),
              /* @__PURE__ */ jsx(TableCell, { children: pakan.harga }),
              /* @__PURE__ */ jsx(TableCell, { children: pakan.created_at }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => onEditItem(pakan.id),
                  startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(FaArrowLeft, {}) }),
                  variant: "contained",
                  children: "Edit"
                }
              ) })
            ]
          },
          pakan.id
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
TablePakan.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  editItem: PropTypes.array,
  onEditItem: PropTypes.func
};
function Index(props) {
  const auth = props.auth;
  const pakans = props.pakans;
  useForm();
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const [dateValue, setDateValue] = useState(dayjs(/* @__PURE__ */ new Date()));
  const { data, setData, errors, put, post } = useForm({
    id: "",
    nama: "",
    harga: "",
    jumlah: "",
    tanggal: "",
    keterangan: ""
  });
  const onHandleInputChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = value + 1;
    router.get(
      route("pakan.pakan.index"),
      {
        page,
        rowsPerPage
      },
      {
        preserveState: true,
        replace: true,
        only: ["pakans"]
      }
    );
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("pakan.pakan.index"),
      { page, rowsPerPage: event.target.value },
      {
        preserveState: true,
        replace: true,
        only: ["pakans"]
      }
    );
  };
  const handleCreateModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setData({
      nama: "",
      harga: "",
      jumlah: "",
      tanggal: "",
      keterangan: ""
    });
    setIsOpen(false);
  };
  const handleDatePicker = (event) => {
    setDateValue(event);
    setData("tanggal", event.format("DD/MM/YYYY"));
  };
  const handleEditRow = (id) => {
    const filtered = pakans.data.filter((obj) => {
      return obj.id === id;
    });
    setData(filtered[0]);
    setIsOpen(true);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Atur Pakan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Informasi Pakan" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", sx: { borderRadius: "12px" }, children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(
            CardHeader,
            {
              title: "Pakan",
              action: /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: handleCreateModal,
                  startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small" }),
                  variant: "contained",
                  children: "Add"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx(
            TablePakan,
            {
              count: pakans.total,
              page: currentPage,
              rowsPerPage,
              items: pakans.data,
              onPageChange,
              onRowsPerPageChange: handleChangeRowsPerPage,
              editItem: data,
              onEditItem: handleEditRow
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          ModalJadwalPakan,
          {
            isOpen,
            dateValue,
            handleClose,
            handleDatePicker,
            onDataChange: onHandleInputChange,
            item: data,
            onSubmit: submit
          }
        )
      ]
    }
  );
}
export {
  Index as default
};
