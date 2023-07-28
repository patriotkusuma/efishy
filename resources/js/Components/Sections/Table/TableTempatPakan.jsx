import {
    Box,
    Card, Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from "@mui/material";
import {Scrollbar} from "@/Components/CustomComponents/Scrollbar.js";
import PropTypes from "prop-types";
import moment from "moment";
import { ImWarning } from "react-icons/im";
import { grey, yellow } from "@mui/material/colors";


export const TableTempatPakan = (props) => {
    const{
        count=0,
        items=[],
        onPageChange = () => {},
        onRowsPerPageChange,
        page = 0,
        rowsPerPage = 0,
    } = props;

    return (
        <>
            <TableContainer >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {"No"}
                            </TableCell>
                            <TableCell>
                                Sisa Pakan
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
                                <TableCell colSpan={4} align="center">
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

                        items.map((sisaPakan,index) => {
                            // const waktu = format(suhu.waktu, 'dd/MM/yyyy');

                            return (
                                <TableRow
                                    hover
                                    key={sisaPakan.id}
                                >
                                    <TableCell>
                                        {(((page - 1) * rowsPerPage) + index + rowsPerPage + 1)}
                                    </TableCell>
                                    <TableCell>
                                        <b>
                                        {sisaPakan.tinggi_pakan + " %"}
                                        </b>
                                    </TableCell>
                                    <TableCell>
                                        {sisaPakan.keterangan}
                                    </TableCell>
                                    <TableCell>
                                        {moment(sisaPakan.created_at).format("DD MMMM YYYY, hh:mm:ss")}
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

TableTempatPakan.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
};
