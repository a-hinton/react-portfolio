import React from 'react';
import Card from './Card';
import ScribePhoto from '../assets/icons/cloud-computing.png';
import ThemePhoto from '../assets/icons/computer.png';
import WeatherPhoto from '../assets/icons/connection.png';
import SchedulePhoto from '../assets/icons/desk.png';
import PasswordPhoto from '../assets/icons/hosting.png';
import QuizPhoto from '../assets/icons/monitor.png';
import './Projects.css';

function Projects() {
    return (
        <div className="card-deck col d-flex justify-content-center">
                <Card title="Dungeon Scribe" gitLink="https://github.com/jeishu/dungeon_scribe" webLink="https://dungeon-scribe.herokuapp.com/" img={ScribePhoto}/>
                <Card title="Theme Picker" gitLink="https://github.com/jeishu/dungeon_scribe" webLink="https://portmeister.github.io/color_themes/" img={ThemePhoto}/>
                <Card title="Weather App" gitLink="https://github.com/jeishu/dungeon_scribe" webLink="https://github.com/a-hinton/weather-app" img={WeatherPhoto}/>
                <Card title="Daily Scheduler" gitLink="https://github.com/jeishu/dungeon_scribe" webLink="https://a-hinton.github.io/scheduling-web-app/" img={SchedulePhoto}/>
                <Card title="Password Generator" gitLink="https://github.com/a-hinton/password-generator" webLink="https://a-hinton.github.io/password-generator/" img={PasswordPhoto}/>
                <Card title="Quiz App" gitLink="https://github.com/a-hinton/quiz-app" webLink="https://a-hinton.github.io/quiz-app/" img={QuizPhoto}/>
        </div>
    )

}

export default Projects