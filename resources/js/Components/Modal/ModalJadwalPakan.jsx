import { useForm } from "@inertiajs/react";
import {useState} from "react";
import PropTypes from "prop-types"
import { Box, Button, FormControl, InputAdornment, Modal, Stack, SvgIcon, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { FaArrowLeft } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
};

export default function ModalJadwalPakan(props){
    const {
        isOpen,
        item,
        handleClose,
        dateValue,
        handleSave,
        handleDatePicker,
        onDataChange,
        onSubmit,
    }=props;

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labeldby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-input" variant="h6" component="h2">
                    {/* {titleModal} */} Pakan
                </Typography>
                <FormControl fullWidth variant="outlined">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <Stack fullWidth  alignItems="stretch" sx={{marginTop:'5%'}} spacing={2} direction="column">

                            {/* Nama Pakan */}
                            <TextField
                                id="nama"
                                name="nama"
                                label="Nama"
                                value={item ? (item.name ? item.name : "") : ''}
                                onChange={onDataChange}
                            />

                            {/* Harga */}
                            <TextField
                                id="harga"
                                label="Harga per Kg"
                                InputProps={{
                                    startAdornment:<InputAdornment position="start">Rp</InputAdornment>,
                                    endAdornment:<InputAdornment position="start">/Kg</InputAdornment>
                                }}
                                name="harga"
                                type="number"
                                value={item ? (item.harga ? item.harga : '') : ''}
                                onChange={onDataChange}
                            />

                            {/* Jumlah */}
                            <TextField
                                id="jumlah"
                                label="Jumlah Pakan"
                                InputProps={{
                                    endAdornment:<InputAdornment position="end">Gram</InputAdornment>
                                }}
                                name="jumlah"
                                type="number"
                                value={item? (item.jumlah ? item.jumlah : '') :''}
                                onChange={onDataChange}
                            />

                            {/* Tanggal */}
                            <DemoContainer components={['DatePicker']}>
                                    {/* Tanggal */}
                                    <DatePicker
                                        format="DD MMMM YYYY"
                                        label="Tanggal Masuk"
                                        value={dateValue}
                                        onChange={handleDatePicker}
                                    />
                            </DemoContainer>

                            {/* Keterangan */}
                            <TextField
                                id="keterangan"
                                label="Keterangan"
                                multiline
                                minRows={4}
                                name="keterangan"
                                value={item ? (item.keterangan ? item.keterangan : '') : ''}
                                onChange={onDataChange}
                            />
                        </Stack>
                    </LocalizationProvider>
                </FormControl>
                <Stack sx={{marginTop:"5%"}} spacing={2} direction="row" justifyContent="space-between">
                    <Button
                        onClick={handleClose}
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <FaArrowLeft/>
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onSubmit}
                        color="success"
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <BiSave/>
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        Save
                    </Button>
                </Stack>
            </Box>
        </Modal>
    );
}

ModalJadwalPakan.prototype = {
    isOpen : PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func,
    item: PropTypes.array,
    dateValue: PropTypes.string,
    handleDatePicker: PropTypes.func,
    onDataChange: PropTypes.func,
    onSubmit: PropTypes.func
};
