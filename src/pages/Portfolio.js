import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
    return (
        <main className="container">
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605147324/the_cold_west_h6kg3j.png"
                title="The Cole West"
                description="One-stop website for winter activity lovers in Washington. Used express-handlebars and MySQL2."
                deployedLink="https://the-cold-west.herokuapp.com/"
                githubLink="https://github.com/zhouyiartemiswang/Cold-West-Tours"
            />
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605133436/user_directory_home.png"
                title="User Directory"
                description="A user directory to search for a specific user and sort by age."
                deployedLink="https://react-user-directory-app.herokuapp.com/"
                githubRepo="https://github.com/zhouyiartemiswang/react_user_directory"
            />
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605131792/code_quiz_start_page_desktop_sc3uym.png"
                title="Code Quiz"
                description="Beginner's code quiz to test your knowledge in front-end development."
                deployedLink="https://zhouyiartemiswang.github.io/code_quiz/"
                githubRepo="https://github.com/zhouyiartemiswang/code_quiz"
            />
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605131792/burger_restaurant_desktop_tuafv7.png"
                title="Burger Restaurant"
                description="A burger logger that uses Node and MySQL to query and route data in the
                app, and Handlebars to generate HTML."
                deployedLink="https://mighty-wave-39082.herokuapp.com/"
                githubRepo="https://github.com/zhouyiartemiswang/node_express_handlebars_burger_restaurant"
            />
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605131794/note_taker_desktop_u7bwxj.png"
                title="Note Taker"
                description="A handy note pad that uses an express
                backend and save and retrieve note data from a JSON file."
                deployedLink="https://mysqlnotetaker.herokuapp.com/"
                githubRepo="https://github.com/zhouyiartemiswang/note_taker"
            />
            <Project
                img="https://res.cloudinary.com/artemiswang/image/upload/v1605131792/weather_dashboard_desktop_glyvrs.png"
                title="Weather Dashboard"
                description="A weather dashboard that will run in the browser and feature dynamically
                updated HTML and CSS."
                deployedLink="https://zhouyiartemiswang.github.io/weather_dashboard/"
                githubRepo="https://github.com/zhouyiartemiswang/weather_dashboard"
            />
        </main>

    )
}
