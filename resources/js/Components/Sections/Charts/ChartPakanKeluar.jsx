import { Card, CardContent, CardHeader, useTheme } from "@mui/material";
import moment from "moment";
import Chart from 'react-apexcharts';
import PropTypes from "prop-types";

const dayOfMonth = () => {
    const days = [];
    const dateStart = moment().subtract(15,'days');
    const dateEnd = moment();

    while(dateStart.diff(dateEnd,'days')){
        days.push(dateStart.format('DD/MM'))
        dateStart.add(1,'days')
    }

    // while(dateStart.diff(dateEnd,'days') >=0){
    //     days.push(dateStart.format("DD/MM/YYYY"))
    //     dateStart.add(1,'days');
    // }

    return days;
}

const useChartOptions = (dateChart) => {
    const theme = useTheme();

    return {
        chart: {
            height: 350,
            type: 'line',
            stacked:false,
        },
        dataLabels:{
            enabled:false,
        },
        stroke:{
            width:[1,1,4]
        },
        title:{
            text: 'Data Pakan Per bulan Tahun ' + moment().format('YYYY'),
            align: 'left',
            offsetX: 110
        },
        xaxis: {
            categories: dateChart,
        },
        yaxis:[
            {
                axisTicks:{
                    show:true,
                },
                axisBorder:{
                    show:true,
                    color:'#008FFB'
                },
                labels: {
                    style: {
                      colors: '#008FFB',
                    }
                },
                title: {
                    text: "Pakan Keluar (dalam gram)",
                    style: {
                      color: '#008FFB',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'Income',
                  opposite: true,
                  axisTicks: {
                    show: true,
                },
                  axisBorder: {
                    show: true,
                    color: '#00E396'
                },
                  labels: {
                    style: {
                      colors: '#00E396',
                    }
                },
                  title: {
                    text: "Operating Cashflow",
                    style: {
                      color: '#00E396',
                    }
                },
            },
            // {
            //     seriesName: 'Revenue',
            //       opposite: true,
            //       axisTicks: {
            //         show: true,
            //     },
            //       axisBorder: {
            //         show: true,
            //         color: '#FEB019'
            //     },
            //       labels: {
            //         style: {
            //           colors: '#FEB019',
            //     },
            //       },
            //       title: {
            //         text: "Revenue (thousand crores)",
            //         style: {
            //           color: '#FEB019',
            //         }
            //     }
            // }
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
            },
            intersect: true,
        },
        legend: {
            horizontalAlign: 'left',
            offsetX: 40
        }
        /* chart: {
            background: 'transparent',
            stacked:false,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: true,
                    zoomout: true,
                    pan: true,

                },
            }
        },
        dataLabels: {
            enabled:true,
            formatter: function (value) {
                return value.toLocaleString('id') + " gram"
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        stroke: {
            curve: 'smooth',
            width: [4, 4]
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            }
        },
        xaxis: {
            categories: dateChart,
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled:true,
            }
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return val + " gram";
                }
            }
        },
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        title: {
            text: 'Pakan keluar per bulan',
            floating: false,
            offsetY: 280,
            align: 'center',
            style: {
                color: '#444'
            }
        }, */

    };
};

const ChartPakanKeluar = (props) => {
    const {chartSeries, sx,dateChart} = props;
    const chartOptions = useChartOptions(dateChart);

    return (
        <Card sx={{
            borderRadius:"10px"
        }}>
            <CardHeader title="Pakan Keluar per Bulan"/>
            <CardContent>
                <Chart
                    height={300}
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    width="100%"
                />
            </CardContent>
        </Card>
    );
}

ChartPakanKeluar.prototype = {
    chartSeries: PropTypes.array.isRequired,
    sx: PropTypes.object,
    dateChart: PropTypes.any,
}

export default ChartPakanKeluar;
