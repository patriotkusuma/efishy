import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router, useForm, usePage} from "@inertiajs/react";
import Grid from '@mui/material/Unstable_Grid2';
import {styled} from "@mui/material/styles";
import {Avatar, Box, Card, CardContent, CardHeader, Container, Paper, Stack, SvgIcon, Typography} from "@mui/material";
import {faker} from "@faker-js/faker";
import {TablePh} from "@/Components/Sections/Table/TablePh.jsx";
import {OverviewPh} from "@/Components/Sections/Overview/OverviewPh.jsx";
import {ChartPh} from "@/Components/Sections/Charts/ChartPh.jsx";
import { blue, green, red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useMQTT } from "mqtt-vue-hook";


const dummyData = () => {
    const dummyData = [];

    for(let i =0;i < 30; i++){
        let bohong =  faker.number.float({min:0, max:14, precision: 0.01});
        dummyData.push(bohong);
    }
    return dummyData;
}

const routeOptions = () => {
    const option = {
        preserveState:true,
        preserveScroll:true,
        replace:true,
        only:['phValues']
    }

    return option;
}

export default function Index(){
    /* Mqtt */
    const mqttHook = useMQTT();
    const [message, setMessage] = useState();

    const {auth, phValues, lastPh, chartPh} = usePage().props;
    const [phValue, setPhValue] = useState(0);
    const [phColor, setPhColor] = useState(green[500]);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchPh, setSearchPh] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const {get}=useForm();

    var query = {
        page: currentPage ? currentPage+1 : 0,
        searchPh: searchPh ? searchPh : '',
        rowsPerPage: rowsPerPage ? rowsPerPage : 5,
        dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD'): '',
        dateTo: dateTo ?dateTo.format('YYYY-MM-DD') : '',
    }

    const [maxValue, setMaxValue] = useState(() => {
        if(chartPh){
            var max = [];
            chartPh.map((item) =>{
                max.push(item.max);
            })

            return max
        }
    })

    const [minValue, setMinValue] = useState(() => {
        if(chartPh){
            var min=[]
            chartPh.map((item)=>{
                min.push(item.min);
            })

            return min
        }
    })

    const [dateChart, SetDateChart] = useState(()=>{
        if(chartPh){
            var dt = [];
            chartPh.map((item)=>{
                dt.push(item.date)
            });
            return dt;
        }
    })

    useEffect(()=>{


        mqttHook.connect("wss://mqtt.efishy.my.id:8083/",{keepalive:60});
        mqttHook.subscribe(
            ['realTime'],
            0,
            {

            },
            () => {
                console.log('subscribed RealTime');

                setPhValue(lastPh.status_ph);

            }
        )

        mqttHook.registerEvent('realTime',(topic, message)=>{
            var msg = JSON.parse(message);
            if(msg==0){
                setMessage(false);
                if(phValue > 8){
                    setPhColor(blue[500])
                }else if(phValue < 6 || phValue == 0){
                    setPhColor(red[500])
                }else{
                    setPhColor(green[500])
                }
            }else{
                setMessage(true);
                setPhValue(msg.valuesPh);
                if(phValue > 8){
                    setPhColor(blue[500])
                }else if(phValue < 6 || phValue == 0){
                    setPhColor(red[500])
                }else{
                    setPhColor(green[500])
                }
            }
        })


    },[])
    useEffect(()=>{
        if(searchPh != null || dateFrom !=null || dateTo !=null){

        setCurrentPage(0);
            let page=currentPage+1;
             router.get(route('kualitas-air.sensor-ph.index'),
                {
                    page: page ? page : 0,
                    searchPh: searchPh ? searchPh : '',
                    rowsPerPage: rowsPerPage ? rowsPerPage : 5,
                    dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD'): '',
                    dateTo: dateTo ?dateTo.format('YYYY-MM-DD') : '',
                },
                routeOptions(),
            )
        }

    },[searchPh, dateFrom, dateTo])

    /* Page Change */
    const onPageChange = (event, value) =>{
        setCurrentPage(value);
        let page = currentPage + 1;
        router.get(route('kualitas-air.sensor-ph.index'),
            {
                page: page ? page : 0,
                searchPh: searchPh ? searchPh : '',
                rowsPerPage: rowsPerPage ? rowsPerPage : 5,
                dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD'): '',
                dateTo: dateTo ?dateTo.format('YYYY-MM-DD') : '',
            },
            routeOptions()
        )
    }

    /* Row Change */
    const onRowsPerPageChange = (event) => {
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        router.get(route('kualitas-air.sensor-ph.index'),
            {
                page: page ,
                searchPh: searchPh ? searchPh : '',
                rowsPerPage: event.target.value,
                dateFrom: dateFrom ? dateFrom.format('YYYY-MM-DD'): '',
                dateTo: dateTo ?dateTo.format('YYYY-MM-DD') : '',
            },
            routeOptions()
        )
    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Informasi Ph Air</h2>}
        >
            <Head title="Infomasi Ph Air"/>

            <Container className="py-12">
                <Stack spacing={2}>
                    <Grid container spacing={3} alignItems={{xs:"stretch", md:"flex-start"}} direction={{xs:"column", md:"row"}} alignItems="flex-start" justifyContent="space-between">
                        <Grid items xs={12} md={3} alignItems="center" alignContent="center">
                            <OverviewPh
                                phColors={phColor}
                                sx={{
                                    height:"100%",
                                    borderRadius: "10px"
                                }}
                                value={phValue }
                            />

                        </Grid>
                        <Grid items xs={12} md={9} >
                            <ChartPh
                                dateChart={dateChart}
                                chartSeries={[
                                    {
                                        name: 'Ph Minimum',
                                        data: minValue
                                    },
                                    {
                                        name: 'Ph Maksimum',
                                        data: maxValue
                                    }
                                ]}
                                sx={{ height: '100%' }}
                            />
                        </Grid>

                    </Grid>
                    <TablePh
                        items={phValues.data}
                        count={phValues.total}
                        rowsPerPage={rowsPerPage}
                        page={currentPage}
                        onRowsPerPageChange={onRowsPerPageChange}
                        onPageChange={onPageChange}
                        searchPh = {searchPh}
                        onSearchPh =  {({target})=>setSearchPh(target.value)}
                        dateFrom = {dateFrom}
                        onDateFromSearch = {(value) =>setDateFrom(value)}
                        dateTo={dateTo}
                        onDateToSearch = {(value) => setDateTo(value)}
                    />
                </Stack>
            </Container>

        </Authenticated>
    );
}
