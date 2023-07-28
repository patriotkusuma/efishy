import {faker} from "@faker-js/faker";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import {Head, router, useForm} from "@inertiajs/react";
import {Card, CardContent, CardHeader, Container, Stack} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {TablePh} from "@/Components/Sections/Table/TablePh.jsx";
import {OverviewSisaPakan} from "@/Components/Sections/Overview/OverviewSisaPakan.jsx";
import {ChartTempatPakan} from "@/Components/Sections/Charts/ChartTempatPakan.jsx";
import {TableTempatPakan} from "@/Components/Sections/Table/TableTempatPakan.jsx";
import {OverviewPakanTerakhir} from "@/Components/Sections/Overview/OverviewPakanTerakhir.jsx";
import { useMQTT } from "mqtt-vue-hook";
import { useEffect, useState } from "react";
import moment from "moment";
import SearchRiwayatPakan from "@/Components/Search/SearchRiwayatPakan";


const dummyData = () => {
    const dummyData = [];

    for(let i =0;i < 30; i++){
        let bohong =  faker.number.int({min:0, max:100});
        dummyData.push(bohong);
    }
    return dummyData;
}

export default function Index (props){
    const mqttHook = useMQTT();
    const {auth, pakanTerakhir, chartSisaPakan, sisaPakans} = props;
    const [message, setMessage] = useState();
    const [pakanValue, setPakanValue] = useState(0);
    const {get} =useForm();
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchData, setSearchData] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [chartData, setChartData] = useState(()=>{
        if(chartSisaPakan){
            var max = [];
            chartSisaPakan.map(item =>{
                max.push(item.tinggi_pakan);
            })
            return max
        }else{
            return null
        }
    })

    // console.log(props)

    const [dateChart, setDateChart] = useState(()=>{
        if(chartSisaPakan){
            // console.log(chartSisaPakan[0])
            var dt = [];
            chartSisaPakan.map(item=>{
                dt.push(moment(item.created_at).format('DD MMMM'));
                // dt.push(item.date);
            })
            return dt;
        }else{
            return null;
        }
    })

    const fetchData = (row=null, pg=null) => {
        router.get(route('pakan.sisa-pakan.index'),
            {
                page: pg? pg : currentPage,
                rowsPerPage: row ? row : rowsPerPage,
                searchData: searchData ? searchData : '',
                dateFrom: dateFrom? dateFrom.format('YYYY-MM-DD') : '',
                dateTo: dateTo? dateTo.format('YYYY-MM-DD') : '',
            },
            {
                preserveScroll:true,
                preserveState:true,
                replace:true,
                only:['sisaPakans']
            }
        )
    }

    useEffect(()=>{
        mqttHook.connect("wss://mqtt.efishy.my.id:8083/",{keepalive:60});
        mqttHook.subscribe(
            ['realTime'],
            0,
            {

            },
            () => {
                console.log('subscribed RealTime');
                setPakanValue(chartSisaPakan[0].tinggi_pakan);

            }
        )

        if(searchData != null || dateFrom || dateTo){
            console.log(dateFrom)
            setCurrentPage(0);
            let page = currentPage+1;
            fetchData(null, page);
        }
    },[searchData, dateFrom, dateTo, ''])


    mqttHook.registerEvent('realTime', (topic, message) => {
        // console.log(topic, message);
        var msg = JSON.parse(message);
        if(msg==0){
            setMessage(false);
        }else{
            setMessage(true);
            setPakanValue(msg.valueSisaPakan);
            console.log(msg.valueSisaPakan);
        }
    })

    const onPageChange = (event, value) =>{
        setCurrentPage(value);
        let page = value +1;
        fetchData(null,page);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        fetchData(event.target.value, page);
    }
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Informasi Tempat Pakan</h2>}
            >
            <Head title="Infomasi Tempat Pakan"/>
            <Container className="py-12">
                <Stack spacing={3}>
                    <Grid container spacing={3} sx={{flexDirection:{xs:"column",md:"row"}}}justifyContent="space-between">
                        <Grid item xs="auto" md="auto" >
                            <Stack spacing={2} direction="column" alignItems="stretch">
                                <OverviewSisaPakan
                                    customColor="#fbc02d"
                                    sx={{
                                        height:"100%",
                                        borderRadius: "10px"
                                    }}
                                    value={pakanValue ? pakanValue : 0}
                                />
                                <OverviewPakanTerakhir
                                    customColor="#fbc02d"
                                    sx={{
                                        height:"100%",
                                        borderRadius: "10px"
                                    }}
                                    value={pakanTerakhir.jumlah_keluar}
                                    time={moment(pakanTerakhir.created_at).format("DD MMMM YYYY")}
                                />
                            </Stack>


                        </Grid>
                        <Grid item xs="auto" md={8} >
                            <ChartTempatPakan
                                dateChart={dateChart}
                                chartSeries={[
                                    {
                                        name: 'Sisa Pakan',
                                        data: chartData,
                                    },
                                ]}
                                sx={{ width:1}}
                            />
                        </Grid>

                    </Grid>

                    <Card>
                        <CardHeader title="Riwayat Tempat Pakan" />
                        <CardContent>
                            <SearchRiwayatPakan
                                searchData={searchData}
                                dateFrom={dateFrom}
                                dateTo={dateTo}
                                onDateFrom={(value)=>setDateFrom(value)}
                                onDateTo={(value)=>setDateTo(value)}
                                onSearchData={({target})=>setSearchData(target.value)}
                            />
                            <TableTempatPakan
                                count={sisaPakans.total}
                                page={currentPage}
                                rowsPerPage={rowsPerPage}
                                items={sisaPakans.data}
                                onPageChange={onPageChange}
                                onRowsPerPageChange={handleChangeRowsPerPage}

                            />
                        </CardContent>
                    </Card>


                </Stack>

            </Container>

        </Authenticated>
    )
}
