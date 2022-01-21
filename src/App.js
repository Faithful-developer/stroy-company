import './assets/styles/style.scss'
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ErrorPage from "./pages/Error";
import Header from "./containers/Header";
import HeaderMobile from "./containers/HeaderMobile";
import {useState} from "react";
import BlogPage from "./pages/Blog/BlogPage";
import SinglePost from "./pages/SinglePost";
import 'aos'
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";

const App = () => {

    const [language, setLanguage] = useState('uz')

    const [y] = useTranslation();

    const [mobileMenu, setMobileMenu] = useState(false)

    mobileMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

    return (
        <div className="App">
            <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} language={language} setLanguage={setLanguage} />
            <HeaderMobile mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} language={language} setLanguage={setLanguage} />
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route
                    path="/home"
                    element={<Navigate to="/"/>}
                />
                <Route path='/blog' element={<BlogPage/>} />
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/construction/:id' element={<SinglePost/>} />
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
