import {Avatar, Card, CardContent, Stack, SvgIcon, Typography} from "@mui/material";
import {FaTemperatureHigh} from "react-icons/fa";
import PropTypes from 'prop-types';
import {IoWaterOutline} from "react-icons/io5";
import {GiEatingPelican, GiForkKnifeSpoon} from "react-icons/gi";


export const OverviewPakanTerakhir = (props) => {
    const{ customColor, sx, value, time} = props;

    return (
        <Card sx={sx} >
            <CardContent>
                <Stack
                    alignItems="flex-start"
                    direction="row"
                    justifyContent="space-between"
                >
                    <Stack spacing={1}>
                        <Typography
                            color="text.secondary"
                            variant="overline"
                        >
                            Pemberian Makan Terakhir
                        </Typography>
                        <Typography
                            variant="h4" fontWeight={700}>
                            {value + " gram"}
                        </Typography>

                        <Typography
                            variant="h6" color="text.secondary">
                            {time}
                        </Typography>

                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: customColor,
                            height: 56,
                            width: 56
                        }}>
                        <SvgIcon>
                            <GiForkKnifeSpoon/>
                        </SvgIcon>
                    </Avatar>
                </Stack>

            </CardContent>
        </Card>
    )
};

OverviewPakanTerakhir.prototype = {
    customColor: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
