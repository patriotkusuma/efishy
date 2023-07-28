import ModalJadwalPakan from "@/Components/Modal/ModalJadwalPakan";
import { TablePakan } from "@/Components/Sections/Table/TablePakan";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import {Button, Card, CardHeader, Container, Stack, SvgIcon, TablePagination} from "@mui/material";
import dayjs from "dayjs";
import {useCallback, useEffect, useState} from "react";

export default function Index(props){
    const auth = props.auth;
    const pakans = props.pakans;

    const {delete:destroy, get} = useForm();
    // const [current_page, last_page] = props.pakan;
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [isOpen, setIsOpen] = useState(false);
    const [dateValue, setDateValue] = useState(dayjs(new Date));


    const {data, setData, errors, put,post} = useForm({
        id: '',
        nama: '',
        harga: '',
        jumlah: '',
        tanggal: '',
        keterangan: '',
    });

    /* const onHandleInputChange = useCallback(
        (event) => {
            setData(event.target.name, event.target.value);
        },
        [data]
    ); */

/*     useEffect(()=> {
        setData(data);
    },[data]); */


    const onHandleInputChange =  (event) => {
        setData(event.target.name, event.target.value);

    }

    /* Pagination Page Change */
    const onPageChange = (event, value) => {
        setCurrentPage(value);
        let page = value + 1;
        router.get(route('pakan.pakan.index'),
            {
                page:page,
                rowsPerPage:rowsPerPage},
            {
                preserveState:true,
                replace:true,
                only:['pakans']
            }
        )
    }


    /* Pagination Row Change */
   const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        router.get(route('pakan.pakan.index'),
            {page:page,rowsPerPage:event.target.value},
            {
                preserveState:true,
                replace:true,
                only:['pakans']
            }
        );
    }

    /* Handle Modal Create */
    const handleCreateModal = () => {
        setIsOpen(true);
    };

    /* Handle Modal Close */
    const handleClose = () => {
        setData({
            nama: '',
            harga: '',
            jumlah: '',
            tanggal: '',
            keterangan: '',
        })
        setIsOpen(false);
    }

    /* Handle DatePicker */
    const handleDatePicker = (event) => {
        setDateValue(event);

        setData('tanggal', event.format('DD/MM/YYYY'));

    }

    /* Handle Edit */
    const handleEditRow = (id) => {
        const filtered = pakans.data.filter(obj => {
            return obj.id === id;
        })
        setData(filtered[0]);
        setIsOpen(true);
    }

    /* Submit */
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (

        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Atur Pakan</h2>}
        >
            <Head title="Informasi Pakan"/>

            {/* Body */}
            <Container className="py-12" sx={{borderRadius:"12px"}}>
                <Card>
                    <CardHeader title="Pakan"
                        action={
                            <Button
                                onClick={handleCreateModal}
                                startIcon={(
                                    <SvgIcon fontSize="small">
                                        {/* <PlusIcon /> */}
                                    </SvgIcon>
                                )}
                                variant="contained"
                            >
                                Add
                            </Button>
                        }
                    />
                    <TablePakan
                        count={pakans.total}
                        page={currentPage}
                        rowsPerPage={rowsPerPage}
                        items={pakans.data}
                        onPageChange={onPageChange}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        editItem={data}
                        onEditItem={handleEditRow}
                    />
                </Card>
            </Container>

            <ModalJadwalPakan
                isOpen={isOpen}
                dateValue={dateValue}
                handleClose={handleClose}
                handleDatePicker={handleDatePicker}
                onDataChange={onHandleInputChange}
                item={data}
                onSubmit={submit}
            />
        </Authenticated>
    )
}
