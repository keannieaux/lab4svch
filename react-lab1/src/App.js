import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Reviews from './Components/Reviews/ReviewsComponent';
import NotFound from './Components/NotFound/notfound';
import Loading from './Components/Spin/Spin';
import CourseNew from './Components/Course/Course'
import Users from './Components/User/User'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <div className="App">
                {loading ? (
                    <Loading />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/course" element={<Courses />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/courses" element={<CourseNew />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
                <Footer />
            </div>
        </>
    );
};

export default App;