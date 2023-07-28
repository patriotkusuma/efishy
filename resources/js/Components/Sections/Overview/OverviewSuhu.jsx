import {Avatar, Card, CardContent, Stack, SvgIcon, Typography} from "@mui/material";
import {FaTemperatureHigh} from "react-icons/fa";
import PropTypes from 'prop-types';


export const OverviewSuhu = (props) => {
    const{ suhuColors, sx, value} = props;

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
                            Suhu Kolam
                        </Typography>
                        <Typography
                            variant="h4">
                            {value + " °"}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: suhuColors,
                            height: 56,
                            width: 56
                        }}>
                        <SvgIcon>
                            <FaTemperatureHigh/>
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
                        {"Celcius"}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
};

OverviewSuhu.prototype = {
    suhuColors: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
}
