import './App.css';
import {Button, Container, Grid, InputLabel, TextField} from "@mui/material";
import styled from "@emotion/styled"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useCallback, useMemo, useRef, useState} from "react";

const StyledHeader = styled.div`
  margin-top: 5%;
  margin-left -25%;  
  color: white;
  text-align: center;
 
`;


const MdContentWrapp = styled.div`
    margin-top: 15%;
    text-align: center;
    font-size : 5rem
    
`
const MdContent = styled.span`
    font-size: 5rem
`

const initData = [
  "524",
  "오발자",
  "5사모",
  "오동탁",
  "5늘의 데이트",
  "5분 대기조",
  "5늘 만날까",
  "5대기",
  "5동화",
  "5리 현종",
  "여의도 동화마을 5리 촌장 5현종",
  "5기 부리지마 5현종"
];


function App() {
  const [word, setWord] = useState(new Set(initData));
  const [text ,setText] = useState("");

  const editTextInput = useRef();

  const inputEntered = (e) => {
    if(e.key === 'Enter') {
      addWord();
    }
  }


  const addWord = (e) => {
    if (text !== "") {
      setWord((words) => new Set(words).add(text));
    }
    setText("");
  };




  return (
    <Container>
      <Grid container spacing={0}>
        <Grid xs={12} sm={12} md={12} width={'25cm'}>
          <StyledHeader>
            <InputLabel classes={"fontSize:14px"}>BEST 524</InputLabel>
            <TextField ref={editTextInput}
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       onKeyUp={inputEntered}
                       margin={"normal"} fullWidth={true} id="standard-basic" label="추가할 단어를 입력해주세요"
                       variant="standard"/>
            <Button onClick={addWord}>추가</Button>
          </StyledHeader>
        </Grid>
      </Grid>
      <MdContentWrapp>
        <Swiper slidesPerView={1} navigation={false} modules={[Navigation, Autoplay]} className="mySwiper"
                loop={true}
                autoplay={{
                  delay: 500}}>
          {
            [...word].map((it) => <SwiperSlide>{it}</SwiperSlide>)
          }
        </Swiper>
      </MdContentWrapp>
    </Container>

  );
}

export default App;
