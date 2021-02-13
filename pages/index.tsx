import * as React from "react"
import {useDispatch} from "react-redux";
import {init} from "../redux/actions/indexActions";
import {getData} from "../utils/getData";
import IndexPage from "../components/IndexPage/IndexPage";

const Index = ({response}) => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(init(response[0]))
  }, [])

  return (
    <IndexPage />
  );
};

Index.getInitialProps = async () => {
  let response = await getData()

  return {response}
}


export default Index;