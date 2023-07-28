import {Avatar, Card, CardContent, Stack, SvgIcon, Typography} from "@mui/material";
import {FaTemperatureHigh} from "react-icons/fa";
import PropTypes from 'prop-types';
import {IoWaterOutline} from "react-icons/io5";


export const OverviewPh = (props) => {
    const{ phColors, sx, value} = props;

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
                            PH Kolam
                        </Typography>
                        <Typography
                            variant="h4">
                            {value}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: phColors,
                            height: 56,
                            width: 56
                        }}>
                        <SvgIcon>
                            <IoWaterOutline/>
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

OverviewPh.prototype = {
    phColors: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
}
