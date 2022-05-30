import React from "react";
import "./Section1.css";
import { Typography , Button , Box } from "@mui/material";
import book from '../../../images/book.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation , Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Section1() {
    return(
        <Box className="main">
            <Swiper
                id="main"
                modules={[Navigation, Pagination]}
                style={{marginTop: "80px"}}
                navigation
                pagination={{clickable: true}}
                spaceBetween={0}
                slidesPerView={1}
                >
                <SwiperSlide>
                    <div className="container">
                        <a href="/login"><img src={book} alt="book" style={{height: "500px",width: "100%"}} /></a>
                        <div className="title">Books</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <a href="/login"><img src={book} alt="book" style={{height: "500px",width: "100%"}} /></a>
                        <div className="title">Books</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <a href="/login"><img src={book} alt="book" style={{height: "500px",width: "100%"}} /></a>
                        <div className="title">Books</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <a href="/login"><img src={book} alt="book" style={{height: "500px",width: "100%"}} /></a>
                        <div className="title">Books</div>
                    </div>
                </SwiperSlide>
           </Swiper>
        </Box>
        
        // <Box className="main">
        //     <Box className="box1">
        //     </Box>
        //     <Box className="box2">
        //         <Box className="box2--head">
        //             <Box sx={{width: "30%"}}>
        //                 <Typography variant="h6" sx={{fontSize: "50px",fontWeight: "bold"}} className="box2--header1">Trader Analyst Test,</Typography>
        //             </Box>
        //             <Box>
        //                 <Typography variant="h6" sx={{fontSize: "50px",fontWeight: "bold"}} className="box2--header2">Rising</Typography>
        //             </Box>
        //         </Box>
        //         <Box className="text">
        //             <Typography variant="h6" sx={{fontSize: "18px"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Typography>
        //             <Button variant="contained" className="button">Lorem ipsum</Button>

                    
        //         </Box>
        //     </Box>
        // </Box>
    );
}