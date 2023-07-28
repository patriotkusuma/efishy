import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, router, useForm} from '@inertiajs/react';
import {Alert, Button, Card, CardContent, CardHeader, Container, InputAdornment, OutlinedInput, Paper, Snackbar, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {OverviewSuhu} from "@/Components/Sections/Overview/OverviewSuhu.jsx";
import {OverviewPh} from "@/Components/Sections/Overview/OverviewPh.jsx";
import {styled} from "@mui/material/styles";
import {OverviewSisaPakan} from "@/Components/Sections/Overview/OverviewSisaPakan.jsx";
import {OverviewPakanTerakhir} from "@/Components/Sections/Overview/OverviewPakanTerakhir.jsx";
import { useMQTT } from 'mqtt-vue-hook';
import { useEffect } from 'react';
import { useState } from 'react';
import moment from "moment";
import { green, yellow } from '@mui/material/colors';
import { TableRiwayatPakan } from '@/Components/Sections/Table/TableRiwayatPakan';
import InputLabel from '@/Components/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { BiSearch } from 'react-icons/bi/index.esm';
import SearchRiwayatPakan from '@/Components/Search/SearchRiwayatPakan';
import { useCallback } from 'react';
import PakanManual from '@/Components/Sections/Pakan/PakanManual';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const paramOption = ()=> {

     const option = {
        preserveState:true,
        preserveScroll:true,
        replace:true,
        only:['riwayatPakan']
    }

    return option;
}


export default function Dashboard(props) {
    // console.log(props);
    const mqttHook = useMQTT();
    const {riwayatPakan,flash,pakanTerakhir} = props;
    const [message, setMessage] = useState();
    const [suhuValue, setSuhuValue] = useState(0);
    const [suhuColor, setSuhuColor] = useState(green[500]);
    const [phValue, setPhValue] = useState(0);
    const [phColor, setPhColor] = useState(green[500]);
    const [pakanValue, setPakanValue] = useState(0);
    const [pakanColor, setPakanColor]   = useState(green[500]);
    const [jumlah, setJumlah] = useState();
    const [isMore, setIsMore] = useState(false);
    const [countMore, setCountMore] = useState(0);
    const [searchRiwayatPakan, setSearchRiwayatPakan]= useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsRiwayatPakan, setRowsRiwayatPakan] = useState(5);
    const {get} = useForm();
    const [alert, setAlert] = useState({value:false,count:0});

    useEffect(()=>{
        mqttHook.connect("wss://mqtt.efishy.my.id:8083/",{keepalive:60,});
        mqttHook.subscribe(
            ['realTime'],
            0,
            {

            },
            () => {
                    console.log('subrek')
            }
        )

        if(flash.success !=null && alert.count==0){
            setAlert({value:true});
        }

    },[mqttHook, flash.success])

    const fetchRiwayatPakan = () => {
        setCurrentPage(0);
        let page = currentPage+1;

        router.get(route('dashboard'),
            {
                page:page ? page : 0,
                searchReportPakan: searchRiwayatPakan ,
                dateFromReportPakan: dateFrom != null? dateFrom.format('YYYY-MM-DD') : '',
                dateToReportPakan: dateTo !=null? dateTo.format('YYYY-MM-DD') : '',
                rowsPerPageReport: rowsRiwayatPakan ? rowsRiwayatPakan : 5,
            },
            paramOption()
        )
    }

    useEffect(()=>{
        if (searchRiwayatPakan!=null || dateFrom!=null || dateTo!=null) {
            fetchRiwayatPakan();
        }

    },[searchRiwayatPakan, dateFrom, dateTo])


    mqttHook.registerEvent('realTime', (topic, message) => {
        // console.log(topic, message);
        var msg = JSON.parse(message);
        if(msg==0){
            setMessage(false);
        }else{
            setMessage(true);
            setSuhuValue(msg.valuesSuhu);
            setPhValue(msg.valuePh);
            setPakanValue(msg.valueSisaPakan);

            if(suhuValue > 32){
                setSuhuColor("red");
            }else if( suhuValue < 26){
                setSuhuColor(yellow[700]);
            }
            else{
                setSuhuColor(green[500]);
            }

            if(phValue > 8){
                setPhColor("red");
            }else if (phValue < 6){
                setPhColor(green[500]);
            }
            else{
                setPhColor(yellow[700]);
            }

            if(pakanValue < 20){
                setPakanColor("red");
            }else if(pakanValue >20 && pakanValue <80){
                setPakanColor(yellow[700]);
            }else{
                setPakanColor(green[500])
            }

        }
    })

    /* Handle Select Change */
    const handleJumlahChange = (e) => {
        if(e.target.value == 'lain'){
            // setJumlah(e.target.value);
            setIsMore(true);
        }else{
            // setData('jumlah', e.target.value);
            setIsMore(false);
        }
        setCountMore(e.target.value);
        setJumlah(e.target.value);
    }

    /* Handle More Value */
    const handleMoreValue = (e) => {
        setCountMore(e.target.value)
    }

    /* Submit Pakan manual */
    const submitManual = (e) =>{
        e.preventDefault();
        router.post(route('pakan-manual'),
            {
                jumlah_keluar: countMore,
            },
            {
                preserveScroll:true,
                preserveState:true,
            }
        )
        setAlert({count:0});
    }

    /* Handle ROws Riwayat Change */
    const handleRowsRiwayatChange = useCallback((e)=> {
        setRowsRiwayatPakan(+e.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        router.get(route('dashboard'),
            {
                page:page,
                searchReportPakan: searchRiwayatPakan ? searchRiwayatPakan : '',
                dateFromReportPakan: dateFrom? dateFrom.format('YYYY-MM-DD') : '',
                dateToReportPakan: dateTo ? dateTo.format('YYYY-MM-DD') : '',
                rowsPerPageReport: e.target.value
            },
            paramOption()
        )
    },[])

    /* Handle Page Change */
    const handlePageRiwayatChange = (e, value) => {
        setCurrentPage(value);

        let page = currentPage + 1;
        router.get(route('dashboard'),
            {
                page:page ? page : 0,
                searchReportPakan: searchRiwayatPakan ? searchRiwayatPakan : '',
                dateFromReportPakan: dateFrom? dateFrom.format('YYYY-MM-DD') : '',
                dateToReportPakan: dateTo ? dateTo.format('YYYY-MM-DD') : '',
                rowsPerPageReport: rowsRiwayatPakan
            },
            paramOption()
        )
    }

    /* Handle Pakan Sekarang */
    const alertClose = () => {
        setAlert({value:false, count:1});
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <Container className="py-12">

                <Stack direction="column" spacing={4}>

                <Grid container spacing={1}  sx={{flexDirection: {xs:"column", md:"row"}}} alignItems="flex-start" justifyContent="space-between">

                    {/* Suhu Kolam */}
                    {/* {<Link href={route('kualitas-air.suhu.index')}> */}
                        <Grid item xs={12} md={2.5}>
                            <Link href={route('kualitas-air.suhu.index')}>
                                <OverviewSuhu
                                    suhuColors={suhuColor}
                                    sx={{
                                        height:"100%",
                                        borderRadius: "10px"
                                    }}
                                    value={ suhuValue.toLocaleString("id-ID",{maximumFractionDigits:2})}
                                />
                            </Link>
                        </Grid>
                    {/* </Link>} */}

                    {/* Ph Kolam */}
                    <Grid item xs={12} md={2.5}>
                        <Link href={route('kualitas-air.sensor-ph.index')}>

                        <OverviewPh
                            phColors={phColor}
                            sx={{
                                height:"100%",
                                borderRadius: "10px"
                            }}
                            value={phValue}
                        />
                        </Link>
                    </Grid>

                    {/* Sisa Pakan */}
                    <Grid item xs={12} md={2.5} >
                        <Link href={route('pakan.sisa-pakan.index')}>
                        <OverviewSisaPakan
                            customColor={pakanColor}
                            sx={{
                                height:"100%",
                                borderRadius: "10px"
                            }}
                            value={pakanValue}
                        />
                        </Link>
                    </Grid>

                    {/* Pakan Terkahir */}
                    <Grid item xs={12} md={4} >
                        <Link href={route('pakan.atur-pakan.index')}>

                        <OverviewPakanTerakhir
                            customColor="blue"
                            sx={{
                                height:"100%",
                                borderRadius: "10px"
                            }}
                            value={pakanTerakhir.jumlah_keluar}
                            time={moment(pakanTerakhir.created_at).format("DD MMMM YYYY, HH:mm:ss")}
                        />
                        </Link>
                    </Grid>
                </Grid>

                {/* Pakan Manual */}
                <PakanManual
                    jumlah={jumlah}
                    isMore = {isMore}
                    handleJumlahChange={handleJumlahChange}
                    moreValue={countMore}
                    handleMoreValue = {handleMoreValue}
                    submit={submitManual}
                />

                {/* Riwayat Pakan */}
                <Card>
                    <CardHeader title="Riwayat Pemberian Pakan"/>
                    <CardContent >
                            <Stack spacing={2}>
                                <SearchRiwayatPakan
                                    searchData={searchRiwayatPakan}
                                    dateFrom={dateFrom}
                                    dateTo={dateTo}
                                    onSearchData={({target})=>setSearchRiwayatPakan(target.value)}
                                    onDateFrom={(value)=>setDateFrom(value)}
                                    onDateTo={(value)=>setDateTo(value)}
                                />
                                <TableRiwayatPakan
                                    items={riwayatPakan.data}
                                    count={riwayatPakan.total}
                                    rowsPerPage = {rowsRiwayatPakan}
                                    onRowsPerPageChange = {handleRowsRiwayatChange}
                                    onPageChange={handlePageRiwayatChange}
                                    page={currentPage}
                                />
                            </Stack>
                    </CardContent>
                </Card>
                </Stack>

            </Container>

            {/* Snackbar */}
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"right" }}

                open={alert.value}
                autoHideDuration={6000}
            >
                <Alert
                    onClose={alertClose}
                    severity="success"
                    sx={{width:'100%'}}
                    variant="filled"
                    >
                    {flash ? flash.success : ''}
                </Alert>
            </Snackbar>
            {/* End Snackbar */}
        </AuthenticatedLayout>
    );
}
