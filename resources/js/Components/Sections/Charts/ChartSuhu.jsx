import PropTypes from "prop-types";
import {alpha, useTheme} from "@mui/material/styles";
import {Card, CardContent, CardHeader} from "@mui/material";
import Chart from 'react-apexcharts';
import {useState} from "react";
import {add} from "date-fns";
import moment from "moment";

const dayOfMonth = (dateChart) => {
    // console.log(dateChart.slice(-1)[0])
    const days = [];
    const dateStart = moment().subtract(30,'days');
    const dateEnd = moment();
    // const dateEnd = moment(dateChart[0]);
    // const dateStart = moment(dateChart.slice(-1)[0]);

    while(dateStart.diff(dateEnd,'days')){
        days.push(dateStart.format('DD/MM/YYYY'))
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
        colors: [theme.palette.warning.light, theme.palette.error.light],
        dataLabels: {
            enabled:true,
        },
        stroke: {
            curve: 'smooth',
            width: [4, 4]
        },
        plotOptions: {
            area: {
                fillTo: 'origin'
            }
        },
        xaxis: {
            categories: dateChart,
        },
        yaxis: [
            {
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#FF1654"
                },
                labels: {
                    style: {
                        colors: "#FF1654"
                    }
                },
                title: {
                    text: "Suhu Minimum",
                    style: {
                        color: "#FF1654"
                    }
                }
            },
            {
                opposite: true,
                axisTicks: {
                    show: true
                },
                axisBorder: {
                    show: true,
                    color: "#247BA0"
                },
                labels: {
                    style: {
                        colors: "#247BA0"
                    }
                },
                title: {
                    text: "Suhu Maksimum",
                    style: {
                        color: "#247BA0"
                    }
                }
            }
        ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
                show: false
            }
        },
        legend: {
            horizontalAlign: "left",
            offsetX: 0
        }
    };
};

export const ChartSuhu = (props) => {
    const {chartSeries, sx, dateChart} = props;
    const chartOptions = useChartOptions(dateChart);

    return (
        <Card sx={sx}>
            <CardHeader title="Suhu 30 Hari Terakhir"/>
            <CardContent>
                <Chart
                    height={300}
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    width="100%"
                />
            </CardContent>
        </Card>
    )
}

ChartSuhu.prototype = {
    chartSeries: PropTypes.array.isRequired,
    sx: PropTypes.object,
    dateChart: PropTypes.array.isRequired,
};


