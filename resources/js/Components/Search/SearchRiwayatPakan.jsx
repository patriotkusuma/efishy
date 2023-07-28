import { FormControl, Grid, Hidden, InputAdornment, InputLabel, OutlinedInput, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { BiSearch } from "react-icons/bi";
import PropTypes from "prop-types";


const SearchRiwayatPakan = (props) => {
    const {searchData, dateFrom, dateTo, onSearchData, onDateFrom, onDateTo} = props;
    return (
        <Grid
            container
            spacing={2}
            direction={{xs:"column", md:"row"}}
            alignItems="stretch"
            justifyContent="center"
        >

            {/* Form Cari */}
            <Grid item xs={12} md={6}>
                <FormControl fullWidth sx={{m:1}} variant="outlined">
                    <InputLabel htmlFor="outlined-adorment-search">Cari</InputLabel>
                    <OutlinedInput
                        id="outlined-adorment-search"
                        type="text"
                        label="Cari"
                        value={searchData}
                        onChange={onSearchData}
                        startAdornment={
                            <InputAdornment position="start">
                                <BiSearch/>
                            </InputAdornment>
                        }
                    />
                </FormControl>

            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction={{xs:"column" ,md:"row"}} spacing={0.5} justifyContent="space-between">

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker',]}>
                        <DatePicker
                            slotProps={{
                                actionBar: {
                                    actions: ["cancel", "clear","accept"]
                                }
                            }}
                            clearable
                            clearText="Clear"
                            value={dateFrom}
                            // // closeOnSelect={false}
                            onAccept={onDateFrom}

                            // // onChange={onDateFromSearch}
                            label="Dari tanggal"

                            />

                    </DemoContainer>

                </LocalizationProvider>
                <Hidden only={['xs','sm']}>

                    <Typography variant="h2" color={grey[500]}>
                            -
                    </Typography>
                </Hidden>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker',]}>
                        <DatePicker
                            value={dateTo}
                            // componentsProps={{
                            //     actionBar: {
                            //         actions: ["cancel", "clear","accept"]
                            //     }
                            // }}
                            clearable
                            onAccept={onDateTo}
                            label="Sampai tanggal"
                            minDate={dateFrom ? dateFrom : ''}
                            />
                    </DemoContainer>
                </LocalizationProvider>
                </Stack>

            </Grid>
            {/* <Grid item xs={1}>

            </Grid>
            <Grid item xs={2}>

            </Grid> */}

        </Grid>
    )

}

SearchRiwayatPakan.propTypes = {
    searchData: PropTypes.string,
    dateFrom: PropTypes.any,
    dateTo: PropTypes.any,
    onSearchData: PropTypes.func,
    onDateFrom: PropTypes.func,
    onDateTo: PropTypes.func
}

export default SearchRiwayatPakan;
