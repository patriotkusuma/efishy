import {Box, Button, Card, CardHeader, FormControl, InputAdornment, Modal, OutlinedInput, Paper, Stack, SvgIcon, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TextField, Typography} from "@mui/material";
import {Scrollbar} from "@/Components/CustomComponents/Scrollbar.js";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import dayjs from "dayjs";
import { BiSave, BiLeftArrowAlt } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import {format} from "date-fns";

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


export const TablePakan = (props) => {
    const{
        count =0,
        items,
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
        onEditItem,
        editItem,
    } = props;


    const [modalInputOpen, setModalInputOpen] = useState(false);
    const [value, setValue] = useState(dayjs('2022-04-17'));

    /* Create */
    const modalCreate = () => {
        setModalInputOpen(true);
    }

    /* Modal Close */
    const handleModalInputClose = () => {
        setModalInputOpen(false);
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' , padding: '2%'}}>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow >
                                <TableCell sx={{fontWeight:700}}>
                                    {"No"}
                                </TableCell>
                                <TableCell sx={{fontWeight:700}}>
                                    Nama
                                </TableCell>
                                <TableCell sx={{fontWeight:700}}>
                                    Keterangan
                                </TableCell>
                                <TableCell sx={{fontWeight:700}}>
                                    Jumlah
                                </TableCell>
                                <TableCell sx={{fontWeight:700}}>
                                    Harga/Kg
                                </TableCell>
                                <TableCell sx={{fontWeight:700}}>
                                    Tanggal
                                </TableCell >
                                <TableCell sx={{fontWeight:700}}/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((pakan,index) => {
                                // const waktu = format(suhu.waktu, 'dd/MM/yyyy');
                                // const tanggal = format(pakan.created_at, 'DD/MM/YYYY');


                                return (
                                    <TableRow
                                        hover
                                        key={pakan.id}
                                    >
                                        <TableCell>
                                            {
                                                (((page - 1) * rowsPerPage) + index + rowsPerPage + 1)
                                            }
                                        </TableCell>
                                        <TableCell>
                                            {pakan.nama}
                                        </TableCell>
                                        <TableCell>
                                            {pakan.keterangan}
                                        </TableCell>
                                        <TableCell>
                                            {pakan.jumlah}
                                        </TableCell>
                                        <TableCell>
                                            {pakan.harga}
                                        </TableCell>
                                        <TableCell>
                                            {pakan.created_at}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={()=>onEditItem(pakan.id)}
                                                startIcon={(
                                                    <SvgIcon fontSize="small">
                                                        <FaArrowLeft/>
                                                    </SvgIcon>
                                                )}
                                                variant="contained"
                                            >
                                                Edit
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>





                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={count}
                    onPageChange={onPageChange}
                    onRowsPerPageChange={onRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5,10,25]}
                />
        </Paper>
    )
}

TablePakan.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    editItem: PropTypes.array,
    onEditItem: PropTypes.func,
};
