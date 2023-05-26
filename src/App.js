import { Fragment } from "react";
import NavBar from "./Components/NavBar";
import FirstPage from "./Components/FirstPage";
import Secondpage from "./Components/Secondpage";
import Thirdpage from "./Components/Thirdpage";


function App() {
  return (
    <Fragment>
     <NavBar></NavBar>
     <FirstPage></FirstPage>
     <Secondpage></Secondpage>
     <Thirdpage></Thirdpage>
    </Fragment>
  );
}

export default App;
