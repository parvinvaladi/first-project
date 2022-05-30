import React , {useState} from "react";
import { Typography , Button , Box , TextField } from "@mui/material";
import styles from "./Login.module.css";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import ShowDialog from "./ShowDialog";

export default function Login() {
    const {register , handleSubmit,watch , formState: {errors}} = useForm();   
    var [user , setUser] = useState([]);
    const [open , setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        var info = [];
        info = JSON.parse(localStorage.getItem("data"));
        for(var i = 0; i <info.length ; i++){
            if(info[i].email === data.email) {
                if(info[i].password === data.password){
                    var u =[];
                    u.push(info[i].firstName);
                    u.push(" "+info[i].lastName);
                    setUser(u);
                    handleOpen();
                }
            }
        }
        
    };

    return(
        <>
        <Box className={styles.mainBox}>
            <Box className={styles.box1}>
                <Box className={styles.box1Head}>
                    <Typography sx={{fontSize: "30px",color: "#1A73E8",fontWeight: "extraBold",paddingTop: "10px"}}>Shop</Typography>
                    <Link to="/" className={styles.link}>Home</Link>
                    <Link to="/home" className={styles.link}>Help</Link>
                </Box>
                <Box className={styles.box1Body}>
                    <Typography variant="h5" sx={{textAlign: "center",fontWeight: "Regular",fontSize: "27px"}}>Login</Typography>
                    <Box className={styles.login}>
                        <Typography variant="h6" 
                        sx={{fontSize: "14px",lineHeight: "22px"}}
                        >
                            This is a secure system and you will need to provide your login details to access the Application.</Typography>
                    </Box>
                    <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                        className={styles.username} 
                        label="Email" 
                        variant="outlined"
                        {...register("email", { required: "Enter your email",
                        // onChange: (event) => email = event.target.value
                    })} 
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                        />

                         <TextField fullWidth
                         label="Password" 
                         variant="outlined" 
                         type="password"
                         {...register("password", { required: "Enter your password"})} 
                        error={!!errors?.password}
                        helperText={errors?.password ? errors.password.message : null} 
                         sx={{marginTop: "70px"}} />
                         <p style={{textAlign: "right"}} ><Link to="/" className={styles.forget}>Forgot password?</Link></p>
                         <Button type="submit" variant="contained" className={styles.signin}>Sign In</Button>
                         <Typography sx={{marginTop: "8px",color: "#64686D"}}>
                             Haven't registered?
                            <Link to="/signup" className={styles.registerLink}>Sign up now</Link>
                        </Typography>
                        <ShowDialog user={user} open={open} handleClose={handleClose} />
                    </form>
                        
                </Box>
            </Box>
            <Box className={styles.box2}>
            </Box>
        </Box>
        </>
    );
}

// function Search(data) {
//     var info = [];
//     info = JSON.parse(localStorage.getItem("data"));
//     for(var i = 0; i <info.length ; i++){
//         if(info[i].email === data.email) {
//             if(info[i].password === data.password){
//                 let u = [];
//                 u.push(info[i].firstName);
//                 u.push(info[i].lastName);
//                 console.log(u);
                
//             }
//         }
//     }
// }