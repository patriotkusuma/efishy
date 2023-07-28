import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from "@mui/material";
import { format } from "date-fns";
import moment from "moment";
import PropTypes from "prop-types";
import {SiIfood} from "react-icons/si";
import {MdAttachMoney} from "react-icons/md";

const OverviewDanaKeluar = (props) => {
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
                            Dana Keluar bulan <strong> {moment().format('MMMM YYYY')}</strong>
                        </Typography>
                        <Typography variant="h4">
                            {"Rp " + value.toLocaleString('id')}
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
                            <MdAttachMoney />
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

OverviewDanaKeluar.protoType = {
    color: PropTypes.string,
    sx: PropTypes.object,
    value: PropTypes.string.isRequired
}

export default OverviewDanaKeluar;
