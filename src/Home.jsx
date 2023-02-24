import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {


    const navigate = useNavigate();

    const [timer, setTimer] = useState(3);
    const [started, setStarted] = useState(false);

    const onClick = (e) => {

        if (started) {
            window.location.reload();
        } else {
            setStarted(true);


            setTimeout(() => {
                setTimer(2)

                setTimeout(() => {
                    setTimer(1)

                    setTimeout(() => {
                        setTimer(0)
                        navigate('/quizz');
                        setStarted(false)
                    }, 1000);
                }, 1000)
            }, 1000);
        }

    }


    return (
        <div>{!started ?
            <div className='main-header'>
                <h1>Welcome To The Quiz</h1>
                <p>Safer Internet For Every One</p>


                <button onClick={onClick}>Start Quiz</button>
                <span style={{ fontSize: '12px', marginTop: '60px' }}>Please don't start until you have the presmission</span>
            </div>
            :
            <div className='timer-container'>
                <h2>Starting After {timer}</h2>

                <button onClick={onClick}>Cancel</button>
            </div>
        }</div>
    )
}

export default Home