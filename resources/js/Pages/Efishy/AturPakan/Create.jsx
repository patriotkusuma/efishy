import InputLabel from "@/Components/InputLabel";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Box, Button, Card, CardContent, CardHeader, Container, FormControl, FormControlLabel, Grid, InputAdornment, MenuItem, OutlinedInput, Select, Stack, SvgIcon, Typography } from "@mui/material";
import { LocalizationProvider, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { BsCalendar2Plus } from "react-icons/bs";
import { MdOutlineCancel , MdArrowBack} from "react-icons/md";
import moment from 'moment';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    borderRadius: "15px",
    p: 4,
};


export default function Create (props){
    const auth=props.auth;
    const jadwalPakan = props.jadwalPakan;
    const [selectJumlah, setSelectJumlah]  = useState(()=>{
        if(jadwalPakan){
            if(jadwalPakan.jumlah > 300 || jadwalPakan.jumlah < 100){
                return 'lain';
            }else{
                return jadwalPakan.jumlah;
            }
        }else{
            return 0;
        }
    });
    const [isMore, setIsMore] = useState(()=>{
        if(jadwalPakan){
            if(jadwalPakan.jumlah > 300 || jadwalPakan.jumlah < 100){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    });
    const [moreValue, setMoreValue]=useState(()=>{
        if(jadwalPakan){
            return jadwalPakan.jumlah;
        }else{
            return 0;
        }
    });
    const [waktuPakan, setWaktuPakan] = useState(()=>{
        if(jadwalPakan){
            let waktu = dayjs(jadwalPakan.set_waktu, "HH:mm:ss");
            return waktu
        }else{
            dayjs();
        }
    });
    const {data,setData ,put,post, errors,get} = useForm({
        id: jadwalPakan ? jadwalPakan.id : '',
        set_waktu: jadwalPakan? jadwalPakan.set_waktu : '',
        jumlah: jadwalPakan? jadwalPakan.jumlah : '',
    });

    useEffect(()=>{
        if(waktuPakan){
            setData('set_waktu', waktuPakan.format('HH:mm:ss'));
        }
    },[waktuPakan]);

    /* Back to atur pakan */
    const back = () => {
        get(route('pakan.atur-pakan.index'));
    }

    /* Submit */
    const submit = (e) => {
        // var waktu = waktuPakan.format('HH:mm:ss');
        // console.log(waktuPakan.format('HH:mm:ss'))
        // setData('set_waktu', waktu);
        setData('jumlah', moreValue);
        // console.log(data);

        e.preventDefault();
        if(!data.id){
            // console.log('ini create');
            post(route('pakan.atur-pakan.store',data));
        }else{
            // console.log('ini edit');
            put(route('pakan.atur-pakan.update', jadwalPakan.id));
        }
    }

    /* On Time Change */
    const handleWaktuPakan = (e) => {
        let waktu = e.format('HH:mm:ss');
        setWaktuPakan(waktu);
        setData('set_waktu', waktu);
    }

    const handleSelectJumlah = (e) => {
        if(e.target.value == 'lain'){
            setSelectJumlah(e.target.value);
            setIsMore(true);
        }else{
            setData('jumlah', e.target.value);
            setMoreValue(e.target.value);
            setSelectJumlah(e.target.value);
            setIsMore(false);
        }
    }

    const handleMoreValue = (e) => {
        setMoreValue(e.target.value);
        setData('jumlah', e.target.value);
    }

    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Atur Pakan</h2>}
        >
            <Head title="Atur Pakan"/>

            <Container  className="py-12">
                <Grid container spacing={3} sx={{flexDirection: {xs:"column",md:"row"}}}  justifyContent="space-between"  >
                    <Grid item xs={12} md={6}>
                        <Card sx={{borderRadius:"10px"}} >
                            <CardHeader title="Atur jadwal Pakan" />
                            <CardContent>
                                <Stack direction="column" spacing={2} justifyContent="space-between">
                                    {/* Waktu Pemberian pakan */}
                                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['TimePicker','MobileTimePicker']}>
                                            <MobileTimePicker
                                                value={ waktuPakan}
                                                onChange={(e)=>{setWaktuPakan(e)}}
                                            label="Waktu Pakan"  ampm />
                                        </DemoContainer>
                                    </LocalizationProvider>

                                    {/* Jumlah Pemberian Pakan */}
                                    <FormControl >
                                        <InputLabel id="demo-simple-select-label">
                                            Jumlah Pakan

                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Age"
                                            type="number"
                                            value={selectJumlah}
                                            onChange={handleSelectJumlah}
                                        >
                                            <MenuItem value={100} >100 gram</MenuItem>
                                            <MenuItem value={200}  >200 gram</MenuItem>
                                            <MenuItem value={300} >300 gram</MenuItem>
                                            <MenuItem value={'lain'} >Lainnya...</MenuItem>
                                        </Select>


                                    </FormControl>

                                    {/* custom jumlah keluar */}
                                    {
                                        isMore == true ?
                                            <FormControl fullwidth variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Jumlah Lainnya</InputLabel>
                                                <OutlinedInput
                                                    value={moreValue ? moreValue :''}
                                                    onChange={handleMoreValue}
                                                    name="jumlahPakan"
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


                                    <Stack xs="auto" direction={"row"} justifyContent="space-between">
                                        <Button
                                            onClick={back}
                                            sx={{marginTop:"5%"}}
                                            style={{
                                                backgroundColor:"#009688"
                                            }}

                                            // onClick={handleSave}
                                            startIcon={(
                                                <SvgIcon fontSize="small">
                                                    <MdArrowBack />
                                                </SvgIcon>
                                            )}

                                            variant="contained"
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            sx={{marginTop:"5%"}}

                                            onClick={submit}
                                            startIcon={(
                                                <SvgIcon fontSize="small">
                                                    <BsCalendar2Plus />
                                                </SvgIcon>
                                            )}

                                            variant="contained"
                                        >
                                            Save
                                        </Button>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

            </Container>
        </Authenticated>
    );
}
