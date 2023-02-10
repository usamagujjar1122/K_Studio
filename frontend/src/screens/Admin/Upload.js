import { autocompleteClasses, Box, CircularProgress, Divider, Stack,Paper } from "@mui/material";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { TextField, Button, Avatar, Input, Typography, IconButton } from '@mui/material';
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Upload = ({ setAlert, setMsg, setType }) => {
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState()
    const [image, setImage] = useState()
    const [loading, setLoading] = useState(false)
    const handleimage = (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, "profileimages" + "/" + file.name);
        const upload = uploadBytesResumable(storageRef, file);
        upload.on(
            "state_change",
            (snapshot) => {
                setLoading(true)
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress);
            },
            (error) => {
                console.log(error);
            },
            async () => {
                try {
                    const url = await getDownloadURL(storageRef);
                    setImage(url);
                    setLoading(false)
                    //   setShoplogoupload(false);
                } catch (error) {
                    console.log(error);
                }
            }
        );
    };
    const handleclick = async () => {
        const res = await axios.post('http://localhost:5000/user/upload', {  image,value })
        if (res.data.success) {
            setAlert(true)
            setMsg(res.data.message)
            setType('success')
            setImage()
        } else {
            setMsg(res.data.message)
            setType('error')
            setAlert(true)
        }
    }
    return (
        <>
            <Box sx={{ padding: { xs: '0px 20px', md: "0px 50px", lg: '0px 100px' }, }}>
                <Box sx={{ border: '1px solid lightgray', width: { xs: '100%', md: '60%' }, position: 'relative',margin:'50px auto' }}>
                    <Stack direction='row' sx={{ justifyContent: 'space-between', cursor: 'pointer' }} onClick={() => { setChecked((prev) => !prev) }}>
                        <Typography sx={{ fontSize: '18px', padding: '16px' }}>{value? value : 'Catagory'}</Typography>
                        <IconButton disabled>{checked ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</IconButton>
                    </Stack>

                    <Paper sx={{ position: 'absolute', top: '105%', width: '100%', opacity: checked ? 1 : 0, transition: 'opacity 0.5s', zIndex: checked ? 1 : -1, backgroundCOlor: 'white' }} >
                    <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('Fashion'); setChecked(false) }}>
                            Fashion
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('Nature'); setChecked(false) }}>
                            Nature
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('Lifestyle'); setChecked(false) }}>
                            Lifestyle
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('Wedding'); setChecked(false) }}>
                            Wedding
                        </Typography>
                        <Divider />
                        <Typography sx={{ fontSize: '18px', padding: '16px', cursor: 'pointer' }} onClick={() => { setValue('Video'); setChecked(false) }}>
                            Video
                        </Typography>
                        <Divider />
                    </Paper>

                </Box>
                <Box sx={{ border: '1px solid #009603', width: '300px', height: "400px", margin: 'auto', backgroundColor: "#333", position: 'relative' }}>
                    <Typography sx={{ fontWeight: 'bold', color: 'white !important', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: image ? 'none' : 'flex' }}>Preview</Typography>
                    <img src={image && image} alt="" style={{ maxWidth: '300px', maxHeight: '400px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                </Box>
                <Typography display="flex" flexDirection="column" align="center" m={"0px 30px 10px 30px"}>
                    <label htmlFor="icon-button-file" style={{ cursor: 'pointer', zIndex: '2' }}>
                        <Input
                            accept="image/*"
                            id="icon-button-file"
                            type="file"
                            sx={{ display: "none" }}
                            onChange={handleimage}
                        />
                        <Stack
                            direction="row"
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                            alignItems="center"
                            justifyContent="center"
                            marginTop="20px"

                        >
                            <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' } }} disabled>{loading ? <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }} /> : <Typography sx={{ textTransform: 'capitalize' }}>SELECT</Typography>}</Button>
                            <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' }, display: image ? 'flex' : 'none', marginLeft: "20px", padding: "6px", borderRadius: '4px', zIndex: '2 !important' }} onClick={handleclick}>Upload</Button>
                        </Stack>
                    </label>
                </Typography>
            </Box>
        </>
    );
}

export default Upload;