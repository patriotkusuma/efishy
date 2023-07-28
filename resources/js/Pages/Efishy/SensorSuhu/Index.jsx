import { ChartPh } from "@/Components/Sections/Charts/ChartPh";
import { ChartSuhu } from "@/Components/Sections/Charts/ChartSuhu";
import { OverviewSuhu } from "@/Components/Sections/Overview/OverviewSuhu";
import { TableSuhu } from "@/Components/Sections/Table/TableSuhu";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { faker } from "@faker-js/faker";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Container, Grid, Stack } from "@mui/material";
import {green, red, yellow} from "@mui/material/colors";
import dayjs from "dayjs";
import { useMQTT } from "mqtt-vue-hook";
import { useEffect, useState } from "react";

const dummyData = () => {
    const dummyData = [];

    for(let i =0;i < 30; i++){
        let bohong =  faker.number.float({min:30, max:60, precision: 0.01});
        dummyData.push(bohong);
    }
    return dummyData;
}

const routeOptions = () => {
    const option = {
        preserveState:true,
        preserveScroll:true,
        replace:true,
        only:['suhus']
    }
    return option;
}

const Index = () => {
    // const auth = props.auth;
    // const suhus = props.suhus;

    // console.log(usePage().props);
    const {auth, suhus, lastSuhu, maxChartSuhu} = usePage().props;
    const [suhuValue, setSuhuValue] = useState(0);
    const [suhuColor, setSuhuColor] = useState(green[500]);
    const [searchSuhu, setSearchSuhu] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [currentPage, setCurrentPage]=useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [maxValue, setMaxValue] = useState(()=>{
        if(maxChartSuhu){
            var max = [];
            maxChartSuhu.map((item)=>{
                max.push(item.max)
            });
            return max;
        }
    });
    const [minValue, setMinValue] = useState(()=>{
        if(maxChartSuhu){
            var minVal = [];
            maxChartSuhu.map((item)=>{
                minVal.push(item.min)
            });
            return minVal;
        }
    })
    const [dateChart, SetDateChart] = useState(()=>{
        if(maxChartSuhu){
            var dt = [];
            maxChartSuhu.map((item)=>{
                dt.push(item.date)
            });
            return dt;
        }
    })


    /* Mqtt */
    const mqttHook = useMQTT();
    const [message, setMessage] = useState();

    const {get}  = useForm();

    useEffect(()=>{
        mqttHook.connect("wss://mqtt.efishy.my.id:8083/",{keepalive:60});
        mqttHook.subscribe(
            ['realTime'],
            0,
            {

            },
            () => {
                console.log('subscribed RealTime');

                setSuhuValue(lastSuhu.status_suhu);

            }
        )
    },[])

    mqttHook.registerEvent('realTime',(topic, message)=>{
        var msg = JSON.parse(message);
        if(msg==0){
            setMessage(false);
            console.log("message 0");
            if(suhuValue> 32){
                setSuhuColor(red[500]);
            }else if(suhuValue < 26){
                setSuhuColor(yellow[700]);
            }else{
                setSuhuColor(green[500]);
            }
        }else{
            setMessage(true);
            setSuhuValue(msg.valuesSuhu);
            if(suhuValue> 32){
                setSuhuColor(red[500]);
            }else if(suhuValue < 26){
                setSuhuColor(yellow[700]);
            }else{
                setSuhuColor(green[500]);
            }
        }
    })

    useEffect(()=>{
        if(searchSuhu!=null || dateFrom !=null || dateTo !=null){
            setCurrentPage(0);
            let page=currentPage+1;

            router.get(route('kualitas-air.suhu.index'),
            {
                page: page,
                searchSuhu: searchSuhu ?searchSuhu : '',
                rowsPerPage: rowsPerPage,
                dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : '',
                dateTo: dateTo? dateTo.format('DD-MM-YYYY') : '',
            },
            routeOptions()
            )
        }

    },[searchSuhu,dateFrom, dateTo])

    /* Page Change */
    const onPageChange = (event, value) => {
        setCurrentPage(value);
        let page = currentPage +1;
        router.get(route('kualitas-air.suhu.index'),
            {
                page: page,
                searchSuhu: searchSuhu ?searchSuhu : '',
                rowsPerPage: rowsPerPage,
                dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : '',
                dateTo: dateTo? dateTo.format('DD-MM-YYYY') : '',
            },
            routeOptions()
        )
    }

    /* Row Change */
    const onRowsPerPageChange = (event)=>{
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;

        router.get(route('kualitas-air.suhu.index'),
            {
                page: page,
                searchSuhu: searchSuhu ?searchSuhu : '',
                rowsPerPage: event.target.value,
                dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : '',
                dateTo: dateTo? dateTo.format('DD-MM-YYYY') : '',
            },
            routeOptions()
        )
    }

    const handleDateFrom = (event) => {
        // console.log(event)
        setDateFrom(event);
        let page = currentPage+1;

        router.get(route('kualitas-air.suhu.index'),
            {
                page: page,
                searchSuhu: searchSuhu ?searchSuhu : '',
                rowsPerPage: rowsPerPage,
                dateFrom: dateFrom ? dateFrom.format("DD-MM-YYYY") : '',
                dateTo: dateTo? dateTo.format('DD-MM-YYYY') : '',
            }
        )

        // console.log(event.format('DD-MM-YYYY'));
    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Informasi Suhu Kolam</h2>}
        >
            <Head title="Informasi Suhu"/>

            <Container className="py-12">
                <Stack spacing={2} justifyContent="space-between" direction="column">
                    <Grid container spacing={2} sx={{flexDirection: {xs:"column", md:"row"}}} alignItems={{xs:"stretch", md:"flex-start"}} justifyContent="space-between" >
                        <Grid item xs={12} md={3}>
                            <OverviewSuhu
                                suhuColors={suhuColor}
                                sx={{
                                    height:"100%",
                                    borderRadius: "10px"
                                }}
                                value={ suhuValue.toLocaleString("id-ID",{maximumFractionDigits:2})}
                            />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <ChartSuhu
                                dateChart={dateChart}
                                chartSeries={[
                                    {
                                        name: 'Suhu Minimum',
                                        data: minValue
                                    },
                                    {
                                        name: 'Suhu Maksimum',
                                        data: maxValue
                                    }
                                ]}
                                sx={{ height: '100%' }}
                            />
                        </Grid>
                    </Grid>
                    <TableSuhu
                        items={suhus.data}
                        count={suhus.total}
                        page={currentPage}
                        onPageChange={onPageChange}
                        onRowsPerPageChange={onRowsPerPageChange}
                        rowsPerPage={rowsPerPage}
                        searchSuhu ={searchSuhu}
                        onSearchSuhu = {({target})=>setSearchSuhu(target.value)}
                        onDateFromSearch = {(value )=>setDateFrom(value)}
                        dateFrom = {dateFrom}
                        dateTo = {dateTo}
                        onDateToSearch = {(value )=>setDateTo(value)}
                    />
                </Stack>
            </Container>
        </Authenticated>
    );
}

export default Index;

