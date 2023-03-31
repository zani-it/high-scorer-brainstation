import React from 'react';
import PollBefore from "./PollBefore"
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Header page = {'home'}/>
            <PollBefore/>
            <Content page = {'home'}/>
            <Footer page = {'home'}/>
        </div>
    );
};

export default HomePage;