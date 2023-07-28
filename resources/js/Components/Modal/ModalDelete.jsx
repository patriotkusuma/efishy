import { Box, Button, Grid, Modal, Stack, SvgIcon, Typography } from "@mui/material";
import moment from "moment";
import PropTypes from "prop-types";
import { BsCalendar2Plus } from "react-icons/bs/index.esm";
import { MdOutlineCancel } from "react-icons/md/index.esm";
import { green, grey, red, yellow } from "@mui/material/colors";
import {ImWarning} from "react-icons/im";
import {BsArrowLeft} from "react-icons/bs";

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

export default function ModalDelete(props){
    const {
        isOpen,
        handleClose,
        dataDelete,
        handleDelete,
    } = props;

    return (
        <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labeldby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Hapus Data
                </Typography>


                <Stack>
                        {dataDelete ?

                    <Typography
                        id="modal-modal-title"
                        variant=""
                        component="h6"

                    >
                        {/* <SvgIcon fontSize="small">
                            <MdOutlineCancel />
                        </SvgIcon> */}

                        Hapus Data
                        <strong>
                            {" " + dataDelete.jumlah + " "}
                        </strong>
                        gram, pada Waktu
                        <strong>
                            {" " + dataDelete.set_waktu + " "}
                        </strong>
                        ?
                    </Typography>
                            : ''}

                </Stack>


            <Grid container xs="auto" justifyContent="space-between">
                <Button
                    onClick={handleClose}
                    sx={{marginTop:"5%"}}
                    style={{
                        backgroundColor:grey[500]
                    }}

                    // onClick={handleSave}
                    startIcon={(
                        <SvgIcon fontSize="small">
                            <BsArrowLeft />
                        </SvgIcon>
                    )}

                    variant="contained"
                >
                    Batal
                </Button>

                <Button
                    sx={{marginTop:"5%"}}
                    style={{
                        backgroundColor:yellow[700],
                        color:red[900]
                    }}
                    onClick={handleDelete}
                    startIcon={(
                        <SvgIcon fontSize="small">
                            <ImWarning />
                        </SvgIcon>
                    )}

                    variant="contained"
                >
                    Hapus
                </Button>
            </Grid>
            </Box>


        </Modal>
    )
}

ModalDelete.prototype = {
    isOpen:PropTypes.bool,
    handleClose: PropTypes.func,
    dataDelete:PropTypes.array,
    handleDelete: PropTypes.func,
}
