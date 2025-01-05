import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ username }) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!username) {
            navigate('/auth')
        }
    })

    return (
        <div>
            home
            <img src='https://drive.google.com/file/d/1dzfw30E4Ah6w-Zg6FrG1aOZFZx293xY2/view?usp=drive_link' alt='cake-picture'></img>
        </div>
    );
}

export default Home;
