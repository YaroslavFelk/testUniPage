import * as React from "react"
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../../redux/store";
import HiddenInput from "../HiddenInput/HiddenInput";
import TextBlock from "../TextBlock/TextBlock";
import Speed from "../Speed/Speed";
import Accuracy from "../Accuracy/Accuracy";
import InfoBlockItem from "../InfoBlockItem/InfoBlockItem";
import {getData} from "../../utils/getData";
import {reset} from "../../redux/actions/indexActions";


const InsexPage = () => {
  const dispatch = useDispatch()
  const text = useSelector((state: RootState) => state.index)


  return (
    <BackGround>
      <Container>
        <HiddenInput/>
        <Head>Тестовое задание по тесту скорости печати</Head>
        <Notice>Тест начнется как только вы правильно нажмете первую букву</Notice>

        <ContentBlock>
          <TextBlock text={text}/>
          <InfoBlock>
            <Speed>
              <InfoBlockItem head='скорость' units='зн./мин'/>
            </Speed>
            <Accuracy/>

            <Button onClick={() => getData().then(res => dispatch(reset(res[0])))} >RESET</Button>
          </InfoBlock>
        </ContentBlock>

      </Container>
    </BackGround>
  );
};

const Container = styled.div`
  max-width: 940px;
  width: 100%;
`

const ContentBlock = styled.div`
  background: #fff;
  border-radius: 10px;
  font-size: 21px;
  line-height: 32px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`

const BackGround = styled.div`
  background-color: #55c5ff;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 125px;
  margin-left: 45px;
`

const Head = styled.h1`
  text-align: center;
  color: #fff
`

const Notice = styled.p`
  text-align: center;
  color: #F36747;
  font-size: 21px;
`

const Button = styled.div`
  margin-top: 20px;
  color: #a6cc2b;
  font-weight: 600;
  font-size: 21px;
  cursor: pointer;
  
  &:hover {
    color: darkgreen;
  }
`


export default InsexPage;