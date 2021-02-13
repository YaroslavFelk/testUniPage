import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import InfoBlockItem from "../InfoBlockItem/InfoBlockItem";

const Accuracy = ()  => {
  const correctText = useSelector((state: RootState) => state.index.correctText)
  const enteredText = useSelector((state: RootState) => state.index.enteredText)

  const accuracy = enteredText.length ? Math.round(correctText.length / enteredText.length * 100) : 100

  return <InfoBlockItem data={accuracy} head='точность' units=' %'/>
}

export default Accuracy