import { useForm } from "@inertiajs/react";
import {useState} from "react";
import PropTypes from "prop-types"
import {
    Box,
    Button,
    FormControl, Grid,
    InputAdornment,
    InputLabel, MenuItem,
    Modal, OutlinedInput, Select,
    Stack,
    SvgIcon,
    TextField,
    Typography
} from "@mui/material";
import {DatePicker, LocalizationProvider, MobileTimePicker} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { FaArrowLeft } from "react-icons/fa";
import { BiSave } from "react-icons/bi";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect } from "react";
import {MdOutlineCancel} from "react-icons/md";
import {BsCalendar2Plus} from "react-icons/bs";

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

export default function ModalAturJadwal(props){
    const {
        isOpen,
        item,
        handleClose,
        handleSave,
        inputLainnya,
        handleInputLainnya,
        jumlahPakan,
        handleJumlahPakan,
        handleInputWaktu,
        jumlahLainnya,
        waktuPakan,
    }=props;

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={{outline: "none"}}
        >
            <Box sx={style}>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Jadwal Pakan
                </Typography>
                <Stack sx={{marginTop:"5%"}} spacing={2}>

                    {/* Waktu Pemberian pakan */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker','MobileTimePicker']}>
                            <MobileTimePicker value={ item.set_waktu ? item.set_waktu : ''} onChange={handleInputWaktu} label="Waktu Pakan"  ampm />
                        </DemoContainer>
                    </LocalizationProvider>

                    {/* Jumlah Pemberian Pakan */}
                    <FormControl fullwidth>
                        <InputLabel id="demo-simple-select-label">
                            Jumlah Pakan

                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            // value={age}
                            label="Age"
                            value={item.jumlah ? item.jumlah : ''}
                            onChange={handleInputLainnya}
                        >
                            <MenuItem value={100} >100 gram</MenuItem>
                            <MenuItem value={200}  >200 gram</MenuItem>
                            <MenuItem value={300} >300 gram</MenuItem>
                            <MenuItem value={'lain'} >Lainnya...</MenuItem>
                        </Select>


                    </FormControl>

                    {/* custom jumlah keluar */}
                    {
                        inputLainnya == true ?
                            <FormControl fullwidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Jumlah Lainnya</InputLabel>
                                <OutlinedInput
                                    value={jumlahLainnya ? jumlahLainnya :''}
                                    onChange={handleJumlahPakan}
                                    name="jumlahPakan"
                                    id="outlined-adornment-password"
                                    type="number"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            gram
                                        </InputAdornment>
                                    }
                                    label="Input Lainnya"
                                />
                                {/*<TextField id="outlined-basic" label="Jumlah Lainnya" variant="outlined" />*/}
                            </FormControl>
                            : ''
                    }
                </Stack>

                <Grid container xs="auto" justifyContent="space-between">
                    <Button
                        onClick={handleClose}
                        sx={{marginTop:"5%"}}
                        style={{
                            backgroundColor:"#009688"
                        }}

                        // onClick={handleSave}
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <MdOutlineCancel />
                            </SvgIcon>
                        )}

                        variant="contained"
                    >
                        Cancel
                    </Button>

                    <Button
                        sx={{marginTop:"5%"}}

                        onClick={handleSave}
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <BsCalendar2Plus />
                            </SvgIcon>
                        )}

                        variant="contained"
                    >
                        Save
                    </Button>
                </Grid>


            </Box>
        </Modal>
    );
}

ModalAturJadwal.prototype = {
    isOpen : PropTypes.bool,
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
    waktuPakan:PropTypes.any,
    jumlahLainnya:PropTypes.any,
};
