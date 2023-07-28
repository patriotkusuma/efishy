import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router, useForm, usePage} from "@inertiajs/react";
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Container,
    TextField,
    Input,
    InputAdornment,
    Stack,
    FormControl, InputLabel, OutlinedInput, Snackbar, Alert
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {OverviewSisaPakan} from "@/Components/Sections/Overview/OverviewSisaPakan.jsx";
import {ChartTempatPakan} from "@/Components/Sections/Charts/ChartTempatPakan.jsx";
import {TableTempatPakan} from "@/Components/Sections/Table/TableTempatPakan.jsx";
import {OverviewPakanTerakhir} from "@/Components/Sections/Overview/OverviewPakanTerakhir.jsx";
import {TableJadwalPakan} from "@/Components/Sections/Table/TableJadwalPakan.jsx";
import {OverviewJam} from "@/Components/Sections/Overview/OverviewJam.jsx";
import {TableRiwayatPakan} from "@/Components/Sections/Table/TableRiwayatPakan.jsx";
import ModalJadwalPakan from "@/Components/Modal/ModalJadwalPakan.jsx";
import {BiSearch} from "react-icons/bi";
import {BsCalendarPlus} from "react-icons/bs";
import {useCallback, useEffect, useState} from "react";
import ModalAturJadwal from "@/Components/Modal/ModalAturJadwal.jsx";
import moment from "moment";
import dayjs from "dayjs";
import ModalDelete from "@/Components/Modal/ModalDelete";
import SearchRiwayatPakan from "@/Components/Search/SearchRiwayatPakan";


const routeOptions = () => {
    const options = {
        preserveState:true,
        preserveScroll:true,
        replace:true,
        only:['jadwalPakans']
    }
    return options;
}

export default function Index (){
    const {auth, jadwalPakans, flash, riwayatPakan} = usePage().props;

    // const auth = props.auth;
    // const jadwalPakans = props.jadwalPakans;

    // const flash = props.flash;

    /* Table Jadwal*/
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [queryAturPakan, setQueryAturPakan] = useState(null);

    /* Modal */
    const [deleteAturPakan, setDeleteAturPakan] = useState(false);
    const {delete:destroy, get} = useForm();
    const [isEdit, setIsEdit] = useState(false);
    const [dataDelete, setDataDelete] = useState(null);
    const {data, setData, errors, put, post} = useForm();
    const [alert, setAlert] = useState(false);

    /* Riwayat Pakan */
    const [searchRiwayatPakan, setSearchRiwayatPakan] = useState(null);
    const [dateFromRiwayatPakan, setDateFromRiwayatPakan] = useState(null);
    const [dateToRiwayatPakan, setDateToRiwayatPakan] = useState(null);
    const [currentRiwayatPage, setCurrentRiwayatPage] = useState(0);
    const [rowRiwayatPage, setRowRiwayatPage] = useState(5);

    const fetchRiwayatPakan = (row=null, pg=null) => {
        router.get(route('pakan.atur-pakan.index'),
            {
                riwayat_pakan_page: pg ? pg : currentRiwayatPage,
                rowsPerPageRiwayatPakan: row ? row : rowRiwayatPage,
                searchRiwayatPakan: searchRiwayatPakan ? searchRiwayatPakan : '',
                dateFromRiwayatPakan: dateFromRiwayatPakan? dateFromRiwayatPakan.format('YYYY-MM-DD') : '',
                dateToRiwayatPakan: dateToRiwayatPakan ? dateToRiwayatPakan.format('YYYY-MM-DD') : '',

            },
            {
                preserveScroll:true,
                preserveState:true,
                replace:true,
                only:['riwayatPakan']
            }
        )
    }

    const handleRowsRiwayatChange = useCallback((e) => {
        setRowRiwayatPage(+e.target.value)
        setCurrentRiwayatPage(0);
        let page = currentRiwayatPage+1;
        fetchRiwayatPakan(e.target.value,page);
    },[rowRiwayatPage])

    const handlePageRiwayatChange = useCallback((e,value)=>{
        setCurrentRiwayatPage(value)
        let page = currentRiwayatPage + 1;
        fetchRiwayatPakan(null, page);
    }, [currentRiwayatPage]);

    useEffect(()=>{
        if(queryAturPakan != null){
            router.get(route('pakan.atur-pakan.index'),
                {searchAturPakan: queryAturPakan},
                routeOptions()
            )
        }
        if(flash.success!=null){
            setAlert(true);
        }else{
            setAlert(false);
        }

        if(searchRiwayatPakan != null || dateFromRiwayatPakan != null || dateToRiwayatPakan != null){
            setCurrentRiwayatPage(0);
            let page = currentRiwayatPage+1;
            fetchRiwayatPakan(null, page);
        }
    },[queryAturPakan,
        flash.success,
        searchRiwayatPakan,
        dateFromRiwayatPakan,
        dateToRiwayatPakan,
    ])


    /* Pagination page change */
    const onPageChange = (event, value)=>{
        setCurrentPage(value);
        let page = value + 1;
        router.get(route('pakan.atur-pakan.index'),
            {
                page:page,
                rowsPerPage:rowsPerPage
            }, routeOptions()

        )
    }


    /* Rows Page Change */
    const onRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        router.get(route('pakan.atur-pakan.index'),
            {page:page, rowsPerPage:event.target.value},
            routeOptions()
        );
    }

    /* Modal */
    const handleEdit = (id) => {
        get(route('pakan.atur-pakan.edit', id));
    }

    /* Create */
    const create = () => {
        get(route('pakan.atur-pakan.create'));
    }

    /* close snack bar */
    const handleDelete = (id) => {
        setDataDelete(id);
        setIsEdit(true);
        setDeleteAturPakan(true);
    }

    /* submit delete */
    const deleteProcess = (data) => {
        destroy(route('pakan.atur-pakan.destroy',dataDelete.id),
            routeOptions()
        );
        setDataDelete(null);
        setDeleteAturPakan(false);
    }

    /* Handle Close Modal Delete */
    const handleCloseAtur = (event)=>{
        setDeleteAturPakan(false);
    }
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Atur Pakan</h2>}
        >
            <Head title="Infomasi Tempat Pakan"/>
            <Container className="py-12">
                <Stack spacing={3}>

                <Grid container spacing={3} sx={{flexDirection: {xs:"column",md:"row"}}}  justifyContent="space-between">
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2} direction="column" alignItems="stretch">

                            <OverviewJam
                                customColor="blue"
                                sx={{
                                    height:"100%",
                                    borderRadius: "10px"
                                }}
                            />
                            <OverviewPakanTerakhir
                                customColor="#fbc02d"
                                sx={{
                                    height:"100%",
                                    borderRadius: "10px"
                                }}
                                value="50"
                                time="18-Agustus-2019"
                            />


                        </Stack>


                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card>
                            <CardHeader
                                title="Jadwal Pemberian Pakan"
                            />
                            <CardContent>
                                <Grid container spacing={2} sx={{ flexDirection:{xs:"column", md:"row"}, alignItems:{xs:'center',md:'center'}}} justifyContent="center">
                                    <Grid item xs={12} md={8}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel  htmlFor="outlined-adornment-password">Search</InputLabel>
                                            <OutlinedInput

                                                id="outlined-adornment-password"
                                                type="text"
                                                value={queryAturPakan ? queryAturPakan : ''}
                                                onChange={({target})=>setQueryAturPakan(target.value)}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <BiSearch/>
                                                    </InputAdornment>
                                                }
                                                label="Search"
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item xs={12} md={4} >
                                        <Button
                                            fullWidth
                                            onClick={create}
                                            variant="contained"
                                            startIcon={<BsCalendarPlus/>}
                                        >
                                            {" Tambah Jadwal"}
                                        </Button>
                                    </Grid>
                                </Grid>
                                <TableJadwalPakan
                                    count={jadwalPakans.total}
                                    items={jadwalPakans.data}
                                    page={currentPage}
                                    rowsPerPage={rowsPerPage}
                                    onPageChange={onPageChange}
                                    onRowsPerPageChange={onRowsPerPageChange}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                />
                            </CardContent>

                        </Card>

                    </Grid>

                </Grid>
                {/*<TableTempatPakan/>*/}
                <Card>
                    <CardHeader title="Riwayat Pemberian Pakan"/>
                    <CardContent>
                        <Stack spacing={2}>
                            <SearchRiwayatPakan
                                searchData={searchRiwayatPakan}
                                dateFrom={dateFromRiwayatPakan}
                                dateTo={dateToRiwayatPakan}
                                onSearchData={({target})=>setSearchRiwayatPakan(target.value)}
                                onDateFrom={(value)=>setDateFromRiwayatPakan(value)}
                                onDateTo={(value)=>setDateToRiwayatPakan(value)}
                            />
                            <TableRiwayatPakan
                                items={riwayatPakan.data}
                                count={riwayatPakan.total}
                                rowsPerPage = {rowRiwayatPage}
                                onRowsPerPageChange = {handleRowsRiwayatChange}
                                onPageChange={handlePageRiwayatChange}
                                page={currentRiwayatPage}
                            />
                        </Stack>
                    </CardContent>
                </Card>
                </Stack>

            </Container>

            {/* Modal */}
            <ModalDelete
                isOpen={deleteAturPakan}
                handleClose={handleCloseAtur}
                dataDelete={dataDelete}
                handleDelete={deleteProcess}
            />
            {/* End Modal */}

            {/* Snackbar */}
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"right" }}

                open={alert}
                autoHideDuration={6000}
            >
                <Alert
                    onClose={()=>{setAlert(false)}}
                    severity="success"
                    sx={{width:'100%'}}
                    variant="filled"
                    >
                    {flash ? flash.success : ''}
                </Alert>
            </Snackbar>
            {/* End Snackbar */}
        </Authenticated>
    )
}
