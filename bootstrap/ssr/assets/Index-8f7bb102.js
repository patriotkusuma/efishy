import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as Authenticated } from "./AuthenticatedLayout-01696a32.js";
import { usePage, useForm, router, Head } from "@inertiajs/react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Stack, Button, TablePagination, Card, CardContent, Typography, Avatar, SvgIcon, Modal, Box, Grid, Container, CardHeader, FormControl, InputLabel, OutlinedInput, InputAdornment, Snackbar, Alert } from "@mui/material";
import Grid$1 from "@mui/material/Unstable_Grid2/index.js";
import { a as OverviewPakanTerakhir } from "./OverviewPakanTerakhir-6a42ed39.js";
import "./TableTempatPakan-f78124a9.js";
import PropTypes from "prop-types";
import { BiEdit, BiTrash, BiTimeFive, BiSearch } from "react-icons/bi/index.esm.js";
import "moment";
import { useState, useEffect, useCallback } from "react";
import { T as TableRiwayatPakan } from "./TableRiwayatPakan-08c9e625.js";
import "./ModalJadwalPakan-9d6b996d.js";
import { BsArrowLeft, BsCalendarPlus } from "react-icons/bs/index.esm.js";
import "react/jsx-runtime";
import "dayjs";
import { grey, yellow, red } from "@mui/material/colors/index.js";
import { ImWarning } from "react-icons/im/index.esm.js";
import { S as SearchRiwayatPakan } from "./SearchRiwayatPakan-a9fc57ae.js";
import "react-dom/server";
import "@inertiajs/react/server";
import "@headlessui/react";
import "mqtt-vue-hook";
import "react-icons/io5/index.esm.js";
import "react-icons/gi/index.esm.js";
import "@mui/material/styles/index.js";
import "react-apexcharts";
import "./Scrollbar-6c64c108.js";
import "simplebar-react";
import "@mui/material/useMediaQuery/index.js";
import "@mui/x-date-pickers";
import "@mui/x-date-pickers/internals/demo/index.js";
import "react-icons/fa/index.esm.js";
import "@mui/x-date-pickers/AdapterDayjs/index.js";
const TableJadwalPakan = (props) => {
  const {
    count = 0,
    items = [],
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    handleModalOpen,
    handleEdit,
    handleDelete
  } = props;
  usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: "No" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Jumlah Pemberian" }),
        /* @__PURE__ */ jsx(TableCell, { children: "Waktu" }),
        /* @__PURE__ */ jsx(TableCell, {})
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: items.map((jadwalPakan, index) => {
        return /* @__PURE__ */ jsxs(
          TableRow,
          {
            hover: true,
            children: [
              /* @__PURE__ */ jsx(TableCell, { children: (page - 1) * rowsPerPage + index + rowsPerPage + 1 }),
              /* @__PURE__ */ jsxs(TableCell, { children: [
                /* @__PURE__ */ jsx("b", { children: jadwalPakan.jumlah }),
                " gram"
              ] }),
              /* @__PURE__ */ jsx(TableCell, { children: jadwalPakan.set_waktu }),
              /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, justifyContent: "center", direction: "row", alignItems: "center", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => {
                      handleEdit(jadwalPakan.id);
                    },
                    "data-item": JSON.stringify(jadwalPakan),
                    size: "small",
                    color: "warning",
                    variant: "contained",
                    startIcon: /* @__PURE__ */ jsx(BiEdit, {}),
                    children: "Edit"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => {
                      handleDelete(jadwalPakan);
                    },
                    size: "small",
                    color: "error",
                    variant: "contained",
                    startIcon: /* @__PURE__ */ jsx(BiTrash, {}),
                    children: "Delete"
                  }
                )
              ] }) })
            ]
          },
          jadwalPakan.id
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
TableJadwalPakan.prototype = {
  count: PropTypes.number,
  items: PropTypes.array,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  handleModalOpen: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func
};
const OverviewJam = (props) => {
  const { customColor, sx, value } = props;
  const [date, setDate] = useState(/* @__PURE__ */ new Date());
  function refreshClock() {
    setDate(/* @__PURE__ */ new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1e3);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);
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
            /* @__PURE__ */ jsx(
              Typography,
              {
                color: "text.secondary",
                variant: "overline",
                children: "Info Jam"
              }
            ),
            /* @__PURE__ */ jsx(
              Typography,
              {
                variant: "h4",
                children: date.toLocaleTimeString("id")
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Avatar,
            {
              sx: {
                backgroundColor: customColor,
                height: 56,
                width: 56
              },
              children: /* @__PURE__ */ jsx(SvgIcon, { children: /* @__PURE__ */ jsx(BiTimeFive, {}) })
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
            children: "PH"
          }
        )
      }
    )
  ] }) });
};
OverviewJam.prototype = {
  customColor: PropTypes.string,
  sx: PropTypes.object
};
({
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  handleInputLainnya: PropTypes.func,
  item: PropTypes.array,
  dateValue: PropTypes.string,
  handleDatePicker: PropTypes.func,
  handleDataChange: PropTypes.func,
  onSubmit: PropTypes.func,
  jumlahPakan: PropTypes.number,
  handleJumlahPakan: PropTypes.func,
  handleInputWaktu: PropTypes.func,
  waktuPakan: PropTypes.any,
  jumlahLainnya: PropTypes.any
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: "15px",
  p: 4
};
function ModalDelete(props) {
  const {
    isOpen,
    handleClose,
    dataDelete,
    handleDelete
  } = props;
  return /* @__PURE__ */ jsx(
    Modal,
    {
      open: isOpen,
      onClose: handleClose,
      "aria-labeldby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxs(Box, { sx: style, children: [
        /* @__PURE__ */ jsx(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", children: "Hapus Data" }),
        /* @__PURE__ */ jsx(Stack, { children: dataDelete ? /* @__PURE__ */ jsxs(
          Typography,
          {
            id: "modal-modal-title",
            variant: "",
            component: "h6",
            children: [
              "Hapus Data",
              /* @__PURE__ */ jsx("strong", { children: " " + dataDelete.jumlah + " " }),
              "gram, pada Waktu",
              /* @__PURE__ */ jsx("strong", { children: " " + dataDelete.set_waktu + " " }),
              "?"
            ]
          }
        ) : "" }),
        /* @__PURE__ */ jsxs(Grid, { container: true, xs: "auto", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleClose,
              sx: { marginTop: "5%" },
              style: {
                backgroundColor: grey[500]
              },
              startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(BsArrowLeft, {}) }),
              variant: "contained",
              children: "Batal"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              sx: { marginTop: "5%" },
              style: {
                backgroundColor: yellow[700],
                color: red[900]
              },
              onClick: handleDelete,
              startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(ImWarning, {}) }),
              variant: "contained",
              children: "Hapus"
            }
          )
        ] })
      ] })
    }
  );
}
ModalDelete.prototype = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  dataDelete: PropTypes.array,
  handleDelete: PropTypes.func
};
const routeOptions = () => {
  const options = {
    preserveState: true,
    preserveScroll: true,
    replace: true,
    only: ["jadwalPakans"]
  };
  return options;
};
function Index() {
  const { auth, jadwalPakans, flash, riwayatPakan } = usePage().props;
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [queryAturPakan, setQueryAturPakan] = useState(null);
  const [deleteAturPakan, setDeleteAturPakan] = useState(false);
  const { delete: destroy, get } = useForm();
  const [isEdit, setIsEdit] = useState(false);
  const [dataDelete, setDataDelete] = useState(null);
  useForm();
  const [alert, setAlert] = useState(false);
  const [searchRiwayatPakan, setSearchRiwayatPakan] = useState(null);
  const [dateFromRiwayatPakan, setDateFromRiwayatPakan] = useState(null);
  const [dateToRiwayatPakan, setDateToRiwayatPakan] = useState(null);
  const [currentRiwayatPage, setCurrentRiwayatPage] = useState(0);
  const [rowRiwayatPage, setRowRiwayatPage] = useState(5);
  const fetchRiwayatPakan = (row = null, pg = null) => {
    router.get(
      route("pakan.atur-pakan.index"),
      {
        riwayat_pakan_page: pg ? pg : currentRiwayatPage,
        rowsPerPageRiwayatPakan: row ? row : rowRiwayatPage,
        searchRiwayatPakan: searchRiwayatPakan ? searchRiwayatPakan : "",
        dateFromRiwayatPakan: dateFromRiwayatPakan ? dateFromRiwayatPakan.format("YYYY-MM-DD") : "",
        dateToRiwayatPakan: dateToRiwayatPakan ? dateToRiwayatPakan.format("YYYY-MM-DD") : ""
      },
      {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ["riwayatPakan"]
      }
    );
  };
  const handleRowsRiwayatChange = useCallback((e) => {
    setRowRiwayatPage(+e.target.value);
    setCurrentRiwayatPage(0);
    let page = currentRiwayatPage + 1;
    fetchRiwayatPakan(e.target.value, page);
  }, [rowRiwayatPage]);
  const handlePageRiwayatChange = useCallback((e, value) => {
    setCurrentRiwayatPage(value);
    let page = currentRiwayatPage + 1;
    fetchRiwayatPakan(null, page);
  }, [currentRiwayatPage]);
  useEffect(() => {
    if (queryAturPakan != null) {
      router.get(
        route("pakan.atur-pakan.index"),
        { searchAturPakan: queryAturPakan },
        routeOptions()
      );
    }
    if (flash.success != null) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    if (searchRiwayatPakan != null || dateFromRiwayatPakan != null || dateToRiwayatPakan != null) {
      setCurrentRiwayatPage(0);
      let page = currentRiwayatPage + 1;
      fetchRiwayatPakan(null, page);
    }
  }, [
    queryAturPakan,
    flash.success,
    searchRiwayatPakan,
    dateFromRiwayatPakan,
    dateToRiwayatPakan
  ]);
  const onPageChange = (event, value) => {
    setCurrentPage(value);
    let page = value + 1;
    router.get(
      route("pakan.atur-pakan.index"),
      {
        page,
        rowsPerPage
      },
      routeOptions()
    );
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setCurrentPage(0);
    let page = currentPage + 1;
    router.get(
      route("pakan.atur-pakan.index"),
      { page, rowsPerPage: event.target.value },
      routeOptions()
    );
  };
  const handleEdit = (id) => {
    get(route("pakan.atur-pakan.edit", id));
  };
  const create = () => {
    get(route("pakan.atur-pakan.create"));
  };
  const handleDelete = (id) => {
    setDataDelete(id);
    setIsEdit(true);
    setDeleteAturPakan(true);
  };
  const deleteProcess = (data2) => {
    destroy(
      route("pakan.atur-pakan.destroy", dataDelete.id),
      routeOptions()
    );
    setDataDelete(null);
    setDeleteAturPakan(false);
  };
  const handleCloseAtur = (event) => {
    setDeleteAturPakan(false);
  };
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Atur Pakan" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Infomasi Tempat Pakan" }),
        /* @__PURE__ */ jsx(Container, { className: "py-12", children: /* @__PURE__ */ jsxs(Stack, { spacing: 3, children: [
          /* @__PURE__ */ jsxs(Grid$1, { container: true, spacing: 3, sx: { flexDirection: { xs: "column", md: "row" } }, justifyContent: "space-between", children: [
            /* @__PURE__ */ jsx(Grid$1, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, direction: "column", alignItems: "stretch", children: [
              /* @__PURE__ */ jsx(
                OverviewJam,
                {
                  customColor: "blue",
                  sx: {
                    height: "100%",
                    borderRadius: "10px"
                  }
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
                  value: "50",
                  time: "18-Agustus-2019"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(Grid$1, { item: true, xs: 12, md: 8, children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(
                CardHeader,
                {
                  title: "Jadwal Pemberian Pakan"
                }
              ),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxs(Grid$1, { container: true, spacing: 2, sx: { flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "center" } }, justifyContent: "center", children: [
                  /* @__PURE__ */ jsx(Grid$1, { item: true, xs: 12, md: 8, children: /* @__PURE__ */ jsxs(FormControl, { fullWidth: true, variant: "outlined", children: [
                    /* @__PURE__ */ jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: "Search" }),
                    /* @__PURE__ */ jsx(
                      OutlinedInput,
                      {
                        id: "outlined-adornment-password",
                        type: "text",
                        value: queryAturPakan ? queryAturPakan : "",
                        onChange: ({ target }) => setQueryAturPakan(target.value),
                        startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(BiSearch, {}) }),
                        label: "Search"
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsx(Grid$1, { item: true, xs: 12, md: 4, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      fullWidth: true,
                      onClick: create,
                      variant: "contained",
                      startIcon: /* @__PURE__ */ jsx(BsCalendarPlus, {}),
                      children: " Tambah Jadwal"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx(
                  TableJadwalPakan,
                  {
                    count: jadwalPakans.total,
                    items: jadwalPakans.data,
                    page: currentPage,
                    rowsPerPage,
                    onPageChange,
                    onRowsPerPageChange,
                    handleEdit,
                    handleDelete
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { title: "Riwayat Pemberian Pakan" }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Stack, { spacing: 2, children: [
              /* @__PURE__ */ jsx(
                SearchRiwayatPakan,
                {
                  searchData: searchRiwayatPakan,
                  dateFrom: dateFromRiwayatPakan,
                  dateTo: dateToRiwayatPakan,
                  onSearchData: ({ target }) => setSearchRiwayatPakan(target.value),
                  onDateFrom: (value) => setDateFromRiwayatPakan(value),
                  onDateTo: (value) => setDateToRiwayatPakan(value)
                }
              ),
              /* @__PURE__ */ jsx(
                TableRiwayatPakan,
                {
                  items: riwayatPakan.data,
                  count: riwayatPakan.total,
                  rowsPerPage: rowRiwayatPage,
                  onRowsPerPageChange: handleRowsRiwayatChange,
                  onPageChange: handlePageRiwayatChange,
                  page: currentRiwayatPage
                }
              )
            ] }) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(
          ModalDelete,
          {
            isOpen: deleteAturPakan,
            handleClose: handleCloseAtur,
            dataDelete,
            handleDelete: deleteProcess
          }
        ),
        /* @__PURE__ */ jsx(
          Snackbar,
          {
            anchorOrigin: { vertical: "top", horizontal: "right" },
            open: alert,
            autoHideDuration: 6e3,
            children: /* @__PURE__ */ jsx(
              Alert,
              {
                onClose: () => {
                  setAlert(false);
                },
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
  Index as default
};
