import logo from './logo.svg';
import './App.css';
import {Button, Container, Grid, Input, InputLabel, ListItem, Stack, TextField} from "@mui/material";
import styled from "@emotion/styled"
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";



const StyledHeader = styled.div`
  margin-top: 5%;
  margin-left -25%;  
  color: white;
  text-align: center;
`;


const MdContentWrapp = styled.div`
    margin-top: 20%
    
`
const MdContent = styled.span`
    font-size: 5rem
`


function App() {
  return (
      <Container>


      <Grid container spacing={0}>
          <Grid xs={12} sm={12} md={12}  width={'25cm'} >
              <StyledHeader>
                <InputLabel classes={"fontSize:14px"}>BEST 524</InputLabel>
                <TextField margin={"normal"} fullWidth={true} id="standard-basic" label="추가할 단어를 입력해주세요" variant="standard" />
                <Button>추가</Button>
              </StyledHeader>
          </Grid>
      </Grid>
        <MdContentWrapp>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </MdContentWrapp>
      </Container>

  );
}

export default App;
