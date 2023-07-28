import PropTypes from "prop-types";
import {alpha, useTheme} from "@mui/material/styles";
import {Card, CardContent, CardHeader} from "@mui/material";
import Chart from 'react-apexcharts';
import {useState} from "react";
import {add} from "date-fns";
import moment from "moment";

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
                return value + " %"
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
                    return val + "%";
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
            text: 'Tempat Pakan 15 Hari Terakhir',
            floating: false,
            offsetY: 280,
            align: 'center',
            style: {
                color: '#444'
            }
        },

    };
};

export const ChartTempatPakan = (props) => {
    const {chartSeries, sx, dateChart} = props;
    const chartOptions = useChartOptions(dateChart);

    return (
        <Card sx={sx}>
            <CardHeader title="Tempat Pakan 15 Hari Terakhir"/>
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
    )
}

ChartTempatPakan.prototype = {
    chartSeries: PropTypes.array.isRequired,
    sx: PropTypes.object,
    dateChart: PropTypes.any,
};


