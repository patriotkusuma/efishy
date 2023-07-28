import {Box, Button, Card, CardContent, CardHeader, FormControl, Grid, Hidden, InputAdornment, InputLabel, OutlinedInput, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography} from "@mui/material";
import {Scrollbar} from "@/Components/CustomComponents/Scrollbar.js";
import PropTypes from "prop-types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { BiSearch, BiWater } from "react-icons/bi";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { blue, green, grey, red, teal, yellow } from "@mui/material/colors";
import { IoWater } from "react-icons/io5";
import moment from "moment";
import { ImWarning } from "react-icons/im";

export const TablePh = (props) => {
    const{
        count=0,
        items=[],
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
        searchPh,
        dateFrom,
        onSearchPh,
        onDateFromSearch,
        dateTo,
        onDateToSearch,
    } = props;

    return (
        <Card>
            <CardHeader title="Data Ph"/>
            <CardContent>
                <Stack spacing={2}
                >
                    <Grid
                        container
                        spacing={2}
                        direction={{xs:"column", md:"row"}}
                        alignItems="stretch"
                        justifyContent="center"
                    >

                        {/* Form Cari */}
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth sx={{m:1}} variant="outlined">
                                <InputLabel htmlFor="outlined-adorment-search">Cari</InputLabel>
                                <OutlinedInput
                                    id="outlined-adorment-search"
                                    type="text"
                                    value={searchPh}
                                    onChange={onSearchPh}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BiSearch/>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack direction={{xs:"column" ,md:"row"}} spacing={0.5} justifyContent="space-between">

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker',]}>
                                    <DatePicker
                                        componentsProps={{
                                            actionBar: {
                                                actions: ["cancel", "clear","accept"]
                                            }
                                        }}
                                        value={dateFrom}
                                        // // closeOnSelect={false}
                                        onAccept={onDateFromSearch}

                                        // // onChange={onDateFromSearch}
                                        label="Dari tanggal"

                                        />

                                </DemoContainer>

                            </LocalizationProvider>
                            <Hidden only="xs">

                            <Typography variant="h2" color={grey[500]}>
                                    -
                            </Typography>
                            </Hidden>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker',]}>
                                    <DatePicker
                                        value={dateTo}
                                        componentsProps={{
                                            actionBar: {
                                                actions: ["cancel", "clear","accept"]
                                            }
                                        }}
                                        onAccept={onDateToSearch}
                                        label="Sampai tanggal"
                                        minDate={dateFrom}
                                        />
                                </DemoContainer>
                            </LocalizationProvider>
                            </Stack>

                        </Grid>
                        {/* <Grid item xs={1}>

                        </Grid>
                        <Grid item xs={2}>

                        </Grid> */}

                    </Grid>
                    <Box >
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {"No"}
                                    </TableCell>
                                    <TableCell>
                                        Ph
                                    </TableCell>
                                    <TableCell>
                                        Waktu
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {

                                items.length == 0?
                                    <TableRow
                                        style={{
                                            backgroundColor: grey[200],

                                        }}
                                    >
                                        <TableCell colSpan={3} align="center">
                                            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
                                                <Typography color={yellow[900]} variant="h5" component="h6" >
                                                    <ImWarning/>
                                                </Typography>
                                                <Typography color={grey[900]} variant="h6" component="h6" >
                                                    Data Tidak Ditemukan
                                                </Typography>
                                                <Typography color={yellow[900]} variant="h5" component="h6" >
                                                    <ImWarning/>
                                                </Typography>
                                            </Stack>

                                        </TableCell>

                                    </TableRow>

                                    :

                                items.map((phValue, index) => {
                                    // const waktu = format(suhu.waktu, 'dd/MM/yyyy');
                                    var phColor = blue[500];
                                    if(phValue.status_ph > 8){
                                        phColor = blue[500];
                                    }
                                    if(phValue.status_ph <6){
                                        phColor = red[500]
                                    }
                                    if(phValue.status_ph >6 && phValue.status_ph < 8){
                                        phColor = green[500];
                                    }

                                    return (
                                        <TableRow
                                            hover
                                            key={phValue.id}
                                        >
                                            <TableCell>
                                                {(((page - 1) * rowsPerPage) + index + rowsPerPage + 1)}
                                            </TableCell>
                                            <TableCell>
                                                <Stack direction="row" alignItems="center">
                                                    <Typography variant="h5" color={blue}>

                                                        <IoWater color={phColor } />
                                                    </Typography>
                                                    <Typography variant="h6">

                                                        <b>
                                                            {phValue.status_ph + " "}
                                                        </b>
                                                        Ph
                                                    </Typography>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>
                                                {moment(phValue.created_at).format('HH:mm:ss, DD MMMM YYYY')}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                    <TablePagination
                        component="div"
                        count={count}
                        onPageChange={onPageChange}
                        onRowsPerPageChange={onRowsPerPageChange}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5,10,25]}
                    />
                </Stack>
            </CardContent>
        </Card>
    )
}

TablePh.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    searchPh: PropTypes.string,
    dateFrom: PropTypes.any,
    onSearchPh: PropTypes.func,
    onDateFromSearch: PropTypes.func,
    dateTo:PropTypes.any,
    onDateToSearch : PropTypes.func,
};
