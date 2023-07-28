import {Avatar, Card, CardContent, CardHeader, Stack, SvgIcon, Typography} from "@mui/material";
import {FaTemperatureHigh} from "react-icons/fa";
import PropTypes from 'prop-types';
import {IoWaterOutline} from "react-icons/io5";
import {BiTimeFive} from "react-icons/bi";
import moment from "moment";
import {useEffect, useState} from "react";


export const OverviewJam = (props) => {
    const{ customColor, sx, value} = props;
    const [date, setDate] = useState(new Date());

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=>{
        const timerId = setInterval(refreshClock,1000);
        return function cleanUp(){
            clearInterval(timerId);
        };
    },[]);


    return (
        <Card sx={sx} >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Info Jam
                        </Typography>
                        <Typography
                            variant="h4">
                            {date.toLocaleTimeString("id")}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: customColor,
                            height: 56,
                            width: 56
                        }}>
                        <SvgIcon>
                            <BiTimeFive/>
                        </SvgIcon>
                    </Avatar>
                </Stack>
                <Stack
                    alignItems="center"
                    direction="row"
                    spacing={2}
                    sx={{mt:2}}
                >
                    <Typography
                        color="text.secondary"
                        variant="caption"
                    >
                        {"PH"}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
};

OverviewJam.prototype = {
    customColor: PropTypes.string,
    sx: PropTypes.object
}
