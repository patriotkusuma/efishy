import { Button, Card, CardContent, CardHeader, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack } from "@mui/material";
import { useState } from "react";
import { PropTypes } from "prop-types";

const PakanManual = (props) => {
    const {
        jumlah,
        isMore,
        handleJumlahChange,
        submit,
        moreValue,
        handleMoreValue

    } = props;

    return (

        <Card sx={{borderRadius:"10px"}}>
            <CardHeader title="Pakan Manual" />
            <CardContent md={6}>
                <Stack spacing={3} alignItems="flex-start">
                    <FormControl  sx={{ minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-label" htmlFor="demo-simple-select-label">Jumlah Pakan</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={jumlah}
                            label="Jumlah Pakan"
                            onChange={handleJumlahChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                            <MenuItem value={200}>200</MenuItem>
                            <MenuItem value={300}>300</MenuItem>
                            <MenuItem value={'lain'}>Lainnya...</MenuItem>
                        </Select>
                    </FormControl>

                    {
                        isMore == true ?
                        <FormControl sx={{minWidth:300}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Jumlah Lainnya</InputLabel>
                            <OutlinedInput
                                // value={moreValue ? moreValue :''}
                                // onChange={handleMoreValue}
                                value={moreValue? moreValue : ''}
                                onChange={handleMoreValue}
                                name="moreValue"
                                id="outlined-adornment-password"
                                type="number"
                                endAdornment={
                                    <InputAdornment position="end">
                                        gram
                                    </InputAdornment>
                                }
                                label="Input Lainnya"
                            />
                            {/*<TextField id="outlined-basic" label="Jumlah Lainnya" variant="outlined" />*/}
                        </FormControl>

                        : ''
                    }
                    <Button
                        onClick={submit}
                        variant="contained"
                        color="success"
                        size="large">
                        Makan Sekarang
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

PakanManual.protoType = {
    jumlah: PropTypes.number,
    isMore: PropTypes.bool,
    handleJumlahChange: PropTypes.func,
    moreValue: PropTypes.number,
    handleMoreValue: PropTypes.func,
    submit: PropTypes.func,
}

export default PakanManual;
