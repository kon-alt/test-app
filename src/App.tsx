import React, {FC} from 'react';
import './App.scss';
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Tabs from "./tabs";

const App: FC<any> = () => {
    return (
        <div className="wrapper">
            <Header title={'Some header'}/>
            <div className="content">
                <Tabs/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
