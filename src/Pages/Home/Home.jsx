import React from 'react'
import List from '../../Components/List';
import Form from '../../Components/Form';
import Single from '../Single/Single';
import { Route, Routes } from 'react-router-dom';

const Home = () => {
    return <Routes>
        <Route path='/' element={<><List/> <Form/></>}></Route>
        <Route path='/post/:id' element={<Single/>}></Route>
    </Routes>
}

export default Home;