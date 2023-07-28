import {Box, Card, CardContent, CardHeader, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography} from "@mui/material";
import {Scrollbar} from "@/Components/CustomComponents/Scrollbar.js";
import PropTypes from "prop-types";
import { BiSearch } from "react-icons/bi";
import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import moment from "moment";
import { FaTemperatureHigh } from "react-icons/fa";
import { blue, green, grey, red, yellow } from "@mui/material/colors";
import { ImWarning } from "react-icons/im";


export const TableSuhu = (props) => {
    const{
        count=0,
        items=[],
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
        searchSuhu,
        dateFrom,
        dateTo,
        onSearchSuhu,
        onDateFromSearch,
        onDateToSearch,
    } = props;


    return (
        <Card>
            <CardHeader title="Data Suhu"/>
            <CardContent>
                <Stack
                    spacing={2}
                >
                    <Grid
                        container
                        spacing={2}
                        direction={{xs:"column", md:"row"}}
                        alignItems="stretch"
                        justifyContent="center"
                    >

                        {/* Form Cari */}
                        <Grid item xs={6}>
                            <FormControl fullWidth sx={{m:1}} variant="outlined">
                                <InputLabel htmlFor="outlined-adorment-search">Cari</InputLabel>
                                <OutlinedInput
                                    id="outlined-adorment-search"
                                    type="text"
                                    value={searchSuhu}
                                    onChange={onSearchSuhu}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BiSearch/>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker',]}>
                                    <DatePicker
                                        componentsProps={{
                                            actionBar: {
                                                actions: ["cancel", "clear","accept",]
                                            }
                                        }}
                                        value={dateFrom}
                                        // closeOnSelect={false}
                                        onAccept={onDateFromSearch}
                                        // onChange={onDateFromSearch}
                                        format="DD MMMM YYYY"
                                        label="Dari tanggal"/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={3}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker',]}>
                                    <DatePicker
                                        componentsProps={{
                                            actionBar: {
                                                actions: ["cancel", "clear","accept",]
                                            }
                                        }}
                                        value={dateTo}
                                        onAccept={onDateToSearch}
                                        label="Sampai tanggal"
                                        minDate={dateFrom}
                                        format="DD MMMM YYYY"

                                        />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>

                    </Grid>


                    {/* <Scrollbar> */}
                        <Box >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            {"No"}
                                        </TableCell>
                                        <TableCell>
                                            Suhu
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
                                    items.map((suhu, index) => {
                                        var suhuColor = blue[500];
                                        if(suhu.status_suhu > 32){
                                            suhuColor = red[500];
                                        }
                                        if(suhu.status_suhu <26){
                                            suhuColor = blue[500]
                                        }
                                        if(suhu.status_suhu >26 && suhu.status_suhu < 32){
                                            suhuColor = green[500];
                                        }

                                        return (
                                            <TableRow
                                                hover
                                                key={suhu.id}
                                            >
                                                <TableCell>
                                                    {(((page - 1) * rowsPerPage) + index + rowsPerPage + 1)}
                                                </TableCell>
                                                <TableCell>
                                                    <Stack direction="row" alignItems="center" spacing={2}>
                                                        <Typography variant="h5" color={suhuColor}>

                                                            <FaTemperatureHigh color={suhuColor } />
                                                        </Typography>
                                                        <Typography variant="h6">

                                                            <b>
                                                                {suhu.status_suhu + " "}
                                                            </b>
                                                            Ph
                                                        </Typography>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell>
                                                    {moment(suhu.created_at).format("HH:mm:ss, DD MMMM YYYY")}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Box>
                    {/* </Scrollbar> */}
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

TableSuhu.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    searchSuhu:PropTypes.string,
    dateFrom:PropTypes.any,
    dateTo:PropTypes.any,
    onSearchSuhu:PropTypes.func,
    onDateFromSearch:PropTypes.func,
    onDateToSearch:PropTypes.func,
};
