import {
    Box,
    Card,
    CardHeader,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography,
    useTheme
} from "@mui/material";
import {Scrollbar} from "@/Components/CustomComponents/Scrollbar.js";
import PropTypes from "prop-types";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImWarning } from "react-icons/im";
import { grey, yellow } from "@mui/material/colors";


export const TableRiwayatPakan = (props) => {
    const{
        count=0,
        items=[],
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
    } = props;
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('md'));

    // console.log(mobile);

    return (

        <>
            <TableContainer >
                <Table sx={{maxWidth:"100%"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {"No"}
                            </TableCell>
                            <TableCell>
                                Sisa
                            </TableCell>
                            <TableCell>
                                Jumlah Keluar
                            </TableCell>
                            <TableCell>
                                Keterangan
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
                                <TableCell colSpan={5} align="center">
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

                        items.map((riwayatPakan, index) => {
                            // const waktu = format(suhu.waktu, 'dd/MM/yyyy');

                            return (
                                <TableRow
                                    hover
                                    key={riwayatPakan.id}
                                >
                                    <TableCell width="3%">
                                        {(((page - 1) * rowsPerPage) + index + rowsPerPage + 1)}
                                    </TableCell>
                                    <TableCell width="10%">
                                        <Typography variant="h6">
                                            {riwayatPakan.sisa + " %"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell width="15%">
                                        <Typography variant="h6">
                                            {riwayatPakan.jumlah_keluar + " gram"}
                                        </Typography>
                                    </TableCell>
                                    <TableCell width="40%">
                                        <Typography variant="subtitle1">
                                            {
                                                desktop ?
                                                    riwayatPakan.keterangan
                                                :
                                                    riwayatPakan.keterangan.slice(0,100) + ' ....'

                                            }
                                        </Typography>
                                    </TableCell>
                                    <TableCell width="32%">
                                        <Typography variant="h6" >
                                            {moment(riwayatPakan.created_at).format('HH:mm:ss, DD MMMM YYYY')}
                                        </Typography>
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
        </>


    )
}

TableRiwayatPakan.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
};
