import { a as jsx, j as jsxs } from "../ssr.js";
import "@inertiajs/react";
import "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, FormControl, Stack, TextField, InputAdornment, Button, SvgIcon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/index.js";
import { FaArrowLeft } from "react-icons/fa/index.esm.js";
import { BiSave } from "react-icons/bi/index.esm.js";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
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
function ModalJadwalPakan(props) {
  const {
    isOpen,
    item,
    handleClose,
    dateValue,
    handleSave,
    handleDatePicker,
    onDataChange,
    onSubmit
  } = props;
  return /* @__PURE__ */ jsx(
    Modal,
    {
      open: isOpen,
      onClose: handleClose,
      "aria-labeldby": "modal-modal-title",
      "aria-describedby": "modal-modal-description",
      children: /* @__PURE__ */ jsxs(Box, { sx: style, children: [
        /* @__PURE__ */ jsx(Typography, { id: "modal-modal-input", variant: "h6", component: "h2", children: " Pakan" }),
        /* @__PURE__ */ jsx(FormControl, { fullWidth: true, variant: "outlined", children: /* @__PURE__ */ jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: /* @__PURE__ */ jsxs(Stack, { fullWidth: true, alignItems: "stretch", sx: { marginTop: "5%" }, spacing: 2, direction: "column", children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "nama",
              name: "nama",
              label: "Nama",
              value: item ? item.name ? item.name : "" : "",
              onChange: onDataChange
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "harga",
              label: "Harga per Kg",
              InputProps: {
                startAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: "Rp" }),
                endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: "/Kg" })
              },
              name: "harga",
              type: "number",
              value: item ? item.harga ? item.harga : "" : "",
              onChange: onDataChange
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "jumlah",
              label: "Jumlah Pakan",
              InputProps: {
                endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "end", children: "Gram" })
              },
              name: "jumlah",
              type: "number",
              value: item ? item.jumlah ? item.jumlah : "" : "",
              onChange: onDataChange
            }
          ),
          /* @__PURE__ */ jsx(DemoContainer, { components: ["DatePicker"], children: /* @__PURE__ */ jsx(
            DatePicker,
            {
              format: "DD MMMM YYYY",
              label: "Tanggal Masuk",
              value: dateValue,
              onChange: handleDatePicker
            }
          ) }),
          /* @__PURE__ */ jsx(
            TextField,
            {
              id: "keterangan",
              label: "Keterangan",
              multiline: true,
              minRows: 4,
              name: "keterangan",
              value: item ? item.keterangan ? item.keterangan : "" : "",
              onChange: onDataChange
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxs(Stack, { sx: { marginTop: "5%" }, spacing: 2, direction: "row", justifyContent: "space-between", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleClose,
              startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(FaArrowLeft, {}) }),
              variant: "contained",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: onSubmit,
              color: "success",
              startIcon: /* @__PURE__ */ jsx(SvgIcon, { fontSize: "small", children: /* @__PURE__ */ jsx(BiSave, {}) }),
              variant: "contained",
              children: "Save"
            }
          )
        ] })
      ] })
    }
  );
}
ModalJadwalPakan.prototype = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func,
  item: PropTypes.array,
  dateValue: PropTypes.string,
  handleDatePicker: PropTypes.func,
  onDataChange: PropTypes.func,
  onSubmit: PropTypes.func
};
export {
  ModalJadwalPakan as M
};
