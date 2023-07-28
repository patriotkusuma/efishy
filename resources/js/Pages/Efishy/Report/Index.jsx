import SearchRiwayatPakan from "@/Components/Search/SearchRiwayatPakan";
import ChartPakanKeluar from "@/Components/Sections/Charts/ChartPakanKeluar";
import OverviewDanaKeluar from "@/Components/Sections/Overview/OverviewDanaKeluar";
import OverviewPakanKeluar from "@/Components/Sections/Overview/OverviewPakanKeluar";
import { TableRiwayatPakan } from "@/Components/Sections/Table/TableRiwayatPakan";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Card, CardContent, CardHeader, Container, Grid, Stack } from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useState } from "react";

const Index =() => {
    const {auth, jumlahKeluar, chartPakan, reportPakan} = usePage().props;
    const [currentPage, setCurrentPage] = useState(0);
    const [rowsPerpage, setRowsPerPage] = useState(5);
    const [searchData, setSearchData] = useState(null);
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const {get} = useForm();
    const [dateChart, setDateChart] = useState(()=>{
        if(chartPakan){
            var dt=[];
            chartPakan.map((item)=>{
                dt.push(item.months);
            });
            return dt;
        }
    })
    const [valueChart, setValueChart] = useState(()=>{
        if(chartPakan){
            var max = [];
            chartPakan.map((item)=>{
                max.push(item.keluar)
            });
            return max;
            console.log(max);
        }
    })

    useEffect(()=>{
        if(searchData !=null || dateFrom != null || dateTo !=null){
            setCurrentPage(0);
            let page = currentPage+1;
            fetchData(null, page);
        }
    },[searchData, dateFrom, dateTo])

    const fetchData = (row=null, pg=null) => {
        router.get(route('report.index'),
            {
                page: pg? pg : currentPage,
                rowsPerPage: row ? row : rowsPerpage,
                searchData: searchData ? searchData : '',
                dateFrom: dateFrom? dateFrom.format('YYYY-MM-DD') : '',
                dateTo: dateTo? dateTo.format('YYYY-MM-DD') : '',
            },
            {
                preserveScroll:true,
                preserveState:true,
                replace:true,
                only:['reportPakan']
            }
        )
    }

    const onPageChange = (event, value) =>{
        setCurrentPage(value);
        let page = value +1;
        fetchData(null,page);
    }

    const onRowsPageChange = (event) => {
        setRowsPerPage(+event.target.value);
        setCurrentPage(0);
        let page = currentPage+1;
        fetchData(event.target.value, page);
    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report</h2>}
        >
            <Head title="Report"/>
            <Container className="py-12">
                <Stack spacing={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Stack spacing={2}>

                                <OverviewPakanKeluar
                                    color="green"
                                    sx={{
                                        borderRadius:'10px'
                                    }}
                                    value={jumlahKeluar ? jumlahKeluar.toLocaleString("id") : 0}
                                    />
                                <OverviewDanaKeluar
                                    color={green[500]}
                                    sx={{
                                        borderRadius:'10px'
                                    }}
                                    value="1000000"
                                />
                            </Stack>

                        </Grid>
                        <Grid item xs={12} md={8}>
                            <ChartPakanKeluar
                                dateChart={dateChart}
                                chartSeries={[
                                    {
                                        name: 'Pakan Bulanan',
                                        data: valueChart
                                    },
                                    {
                                        name: 'Dana Bulanan',
                                        data: valueChart
                                    }
                                ]}
                            >

                            </ChartPakanKeluar>
                        </Grid>
                    </Grid>

                    <Card sx={{borderRadius:"10px"}}>
                        <CardHeader title="Report"/>
                        <CardContent >
                            <SearchRiwayatPakan
                                searchData={searchData}
                                dateFrom={dateFrom}
                                dateTo={dateTo}
                                onSearchData={({target})=>setSearchData(target.value)}
                                onDateFrom={(value)=>setDateFrom(value)}
                                onDateTo={(value)=>setDateTo(value)}
                            />
                            <TableRiwayatPakan
                                    count={reportPakan.total}
                                    items={reportPakan.data}
                                    onPageChange={onPageChange}
                                    onRowsPerPageChange={onRowsPageChange}
                                    page={currentPage}
                                    rowsPerPage={rowsPerpage}
                            />
                        </CardContent>
                    </Card>
                </Stack>
            </Container>
        </Authenticated>
    );
}

export default Index;
