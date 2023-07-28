import {
    Button,
    Stack,
    Table,
    TableBody,
    TableCell, TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import PropTypes from "prop-types";
import { useForm, usePage } from "@inertiajs/react";
import {BiEdit, BiTrash} from "react-icons/bi";

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

export const TableJadwalPakan = (props) => {
    const {
        count=0,
        items=[],
        onPageChange,
        onRowsPerPageChange,
        page,
        rowsPerPage,
        handleModalOpen,
        handleEdit,
        handleDelete,
    } = props;

    const {aturPakan} = usePage().props;
    // const {delete: destroy, get} = useForm();
    /*    const {data, setData, get, errors, put, post} = useForm({
        name: autrPakan ? aturPakan.
    }) */
    const theme = useTheme;

    return (
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            {"No"}
                        </TableCell>
                        <TableCell>
                            Jumlah Pemberian
                        </TableCell>
                        <TableCell>
                            Waktu
                        </TableCell>
                        <TableCell>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((jadwalPakan, index) => {

                        return (
                            <TableRow
                                hover
                                key={jadwalPakan.id}
                            >
                                <TableCell>
                                    {(((page - 1) * rowsPerPage) + index + rowsPerPage + 1)}
                                </TableCell>
                                <TableCell>
                                    <b>
                                        {jadwalPakan.jumlah}
                                    </b>
                                    {" gram"}
                                </TableCell>
                                <TableCell>
                                    {jadwalPakan.set_waktu}
                                </TableCell>
                                <TableCell>
                                    <Stack spacing={2} justifyContent="center" direction="row" alignItems="center">

                                    <Button
                                        onClick={()=>{handleEdit(jadwalPakan.id)}}
                                        data-item={JSON.stringify(jadwalPakan)}
                                        size="small"
                                        color="warning"
                                        variant="contained"
                                        startIcon={<BiEdit/>}>
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={()=>{handleDelete(jadwalPakan)}}
                                        size="small" color="error" variant="contained" startIcon={<BiTrash/>}>
                                        Delete
                                    </Button>
                                    </Stack>
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

TableJadwalPakan.prototype = {
    count: PropTypes.number,
    items: PropTypes.array,
    onPageChange: PropTypes.func,
    onRowsPerPageChange: PropTypes.func,
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    handleModalOpen:PropTypes.func,
    handleEdit: PropTypes.func,
    handleDelete:PropTypes.func,
};
