import React, { useRef , useState } from "react";
import styles from "./Signup.module.css";
import { Typography ,
     Button ,
      Box ,
      TextField ,
    Grid, Paper, FormControl, 
    FormLabel, FormHelperText ,
     RadioGroup, FormControlLabel,
      Radio, Checkbox } from "@mui/material";
import { LocalizationProvider , DesktopDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import ShowDialog from "./ShowDialog.js";
// import IntlTelInput from "react-intl-tel-input";
// import "react-intl-tel-input/dist/main.css";

// 
export default function Signup() {
    const {register , handleSubmit,watch , formState: {errors}} = useForm();   
    const valuePassword = useRef(''); 
    const valueConfirm = useRef(''); 
    const [isError , setIsError] = useState('');
    const [checked, setChecked] = useState(false);
    const [open , setOpen] = useState(false);
    let [dateValue, setDateValue] = useState(new Date('2014-08-18T21:11:54'));

    var data = {firstName: watch("firstName") ,
    lastName: watch("lastName") ,
    email: watch("email") ,
    gender: watch("gender") ,
    date: dateValue ,
    phone: watch("phone") ,
    password: watch("password") ,
    confirmPass: watch("confirmPass")
};

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setChecked(event.target.checked);
      };


    const onSubmit = () => { 
        if(valuePassword.current.value !== valueConfirm.current.value){
            setIsError("the two passwords should be equal");
            return;
        }else{
            setIsError('');
            handleOpen();
        }
    };


    return(
        <div>
            <Paper elevation={15} className={styles.paper}>
                <Grid align='center'>
                    <Box className={styles.head}>
                        <Typography sx={{color: "#1A73E8",paddingTop: "18px",fontSize: "20px"}}>Rising</Typography>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/home" className={styles.link}>Help</Link>
                    </Box>
                    <Typography variant="h5" className={styles.header}>Sign Up</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>  
                    <TextField fullWidth
                    label="first name" 
                    placeholder="Enter your name" 
                    variant="standard" 
                    {...register("firstName", { required: "Enter your first name"})}    
                    error={!!errors?.firstName}
                    helperText={errors?.firstName ? errors.firstName.message : null}
                    />

                    <TextField fullWidth
                    label="Last name"
                    variant="standard"
                    placeholder="Enter your last name" 
                    {...register("lastName", { required: "Enter your last name"})}
                    error={!!errors?.lastName}
                    helperText={errors?.lastName ? errors.lastName.message : null}
                    />

                    <TextField fullWidth 
                        label="Email"
                        variant="standard"
                        {...register("email", { required: "Email is required",
                        pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                        }
                    })}
                    // type="email"
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                    />
                          
                    <FormControl component="fieldset">
                        <FormLabel style={{marginTop: "18px"}}>Gender</FormLabel>
                        <RadioGroup style={{display: "initial"}}>
                            <FormControlLabel value="female" control={<Radio {...register("gender",{required: "Choose your gender"})} />} label="Female" />
                            <FormControlLabel value="male" control={<Radio {...register("gender",{required: "Choose your gender"})} />} label="Male" />
                            <FormControlLabel value="other" control={<Radio {...register("gender",{required: "Choose your gender"})} />} label="Other" />
                        </RadioGroup>
                        <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
                    </FormControl>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Date of birth"
                            value={dateValue}
                            {...register("birth",{required: "enter your date of birth."})}
                            onChange={(newValue) => {
                                setDateValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <FormHelperText style={{color:'#d32f2f'}}>{errors.birth?.message}</FormHelperText>

                        <TextField fullWidth 
                        label="Phone Number" 
                        variant="standard" 
                        className={styles.input}
                        {...register("phone", { required: "Phone number is required"})}
                          error={!!errors?.phone}
                          helperText={errors?.phone ? errors.phone.message : null}
                        />
                        {/* <IntlTelInput  preferredCountries={['ru']} /> */}
                        <TextField fullWidth 
                        id="password"
                        label="Password" 
                        variant="standard" 
                        type="password"
                        inputRef={valuePassword}
                        {...register("password", 
                        { required: "Enter your password"})}
                        
                          error={!!errors?.password}
                          helperText={errors?.password ? errors.password.message : null}
                         />
                        <TextField fullWidth 
                        id="confirmPass"
                        label="Confirm Password" 
                        variant="standard" 
                        sx={{marginBottom: "18px"}} 
                        type="password"
                        inputRef={valueConfirm}
                        // inputRef={register({validate: value => value === getValue("password") || "password invalid"})}
                        // {...errors.confirmPass && <span>password incorrect</span>}
                        {...register("confirmPass", { required: "password is required"})}

                          error={!!errors?.confirmPass}
                          helperText={errors?.confirmPass ? errors.confirmPass.message : null}
                        />
                        <Typography sx={{color: "red",fontSize: "small"}}>{isError}</Typography>

                        <FormControlLabel 
                        control={<Checkbox checked={checked} onChange={handleChange} />}
                         label="I accept the terms and conditions."
                          style={{display: "block"}} />
                        <Button type="submit" variant="contained" disabled={!checked} className={styles.button}>Sign up</Button>
                        <ShowDialog data={data} open={open} handleClose={handleClose} />
                </form>
            </Paper>
        </div>
    );
}