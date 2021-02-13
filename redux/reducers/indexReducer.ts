import {actionsTypes} from "../../constants/actionsTypes";
import {getData, getResponse} from "../../utils/getData";
import {log} from "util";

const initialState: any = {
  startTime: 0,
  futureText: '',
  correctText: '',
  currentLetter: '',
  enteredText: '',
  wrongLetter: false
}

const IndexReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionsTypes.INIT: {
      const text = action.payload.text

      return {
        ...state,
        futureText: text.slice(1),
        currentLetter: text[0],
      }
    }
    case actionsTypes.CHANGE: {
      const letter = action.payload.letter
      const isRightLetter = state.currentLetter === letter
      return {
        ...state,
        startTime: !state.correctText.length && isRightLetter ? Date.now()  : state.startTime,
        futureText:  isRightLetter ? state.futureText.slice(1) : state.futureText,
        currentLetter: isRightLetter ? state.futureText[0] : state.currentLetter,
        enteredText: state.enteredText + letter,
        correctText: isRightLetter ? state.correctText + letter : state.correctText,
        wrongLetter: !isRightLetter,
      }
    }
    case actionsTypes.RESET: {
      const text = action.payload.text

      return {
        ...state,
        futureText: text.slice(1),
        currentLetter: text[0],
        startTime: 0,
        correctText: '',
        enteredText: '',
        wrongLetter: false,
      }
    }
    default:
      return state
  }

}

export default IndexReducer;