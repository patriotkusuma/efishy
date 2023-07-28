import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { format } from "date-fns";
import moment from "moment";
import PropTypes from "prop-types";
import {SiIfood} from "react-icons/si";

const OverviewPakanKeluar = (props) => {
    const {color, sx, value} = props;
    return (
        <Card sx={sx}>
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
                            Pakan Keluar bulan <strong> {moment().format('MMMM YYYY')}</strong>
                        </Typography>
                        <Typography variant="h4">
                            {value + " gram"}
                        </Typography>
                    </Stack>
                    <Avatar
                        sx={{
                            backgroundColor: color,
                            height: 56,
                            width: 56
                        }}
                    >
                        <SvgIcon>
                            <SiIfood />
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
                        {"Total Keluar"}
                    </Typography>

                </Stack>
            </CardContent>
        </Card>
    );
}

OverviewPakanKeluar.protoType = {
    color: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
}

export default OverviewPakanKeluar;
