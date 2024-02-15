import Top from "./components/top/top";
import Categorization from "./components/menu/categorization";
import Background from "./BaseViewElement/Background";
import MainViewer from "./BaseViewElement/MainViewer";
import {Toast} from "./BaseViewElement/Toast";

function App() {

    return (
        <Background>
            <Toast/>
            <Top DrawerAssembly={<Categorization/>}/>
            <MainViewer>
            </MainViewer>
        </Background>
    )
}

export default App;
