import {Avatar, Card, CardContent, Stack, SvgIcon, Typography} from "@mui/material";
import {FaTemperatureHigh} from "react-icons/fa";
import PropTypes from 'prop-types';
import {IoFastFoodOutline, IoWaterOutline} from "react-icons/io5";



export const OverviewSisaPakan = (props) => {
    const{ customColor, sx, value} = props;

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
                            Pakan
                        </Typography>
                        <Typography
                            variant="h4">
                            {value} %
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: customColor,
                            height: 56,
                            width: 56
                        }}>
                        <SvgIcon>
                            <IoFastFoodOutline/>
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
                        {"sisa pakan"}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
};

OverviewSisaPakan.prototype = {
    customColor: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
}
