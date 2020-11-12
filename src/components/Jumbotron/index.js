import React from 'react';
import './style.css';

export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>This is me</h1>
                <p className="lead">Full-stack developer, foodie and amateur tennis player</p>
                <a className="link-icon" href="https://github.com/zhouyiartemiswang">
                    <i className="fab fa-github-square" data-toggle="tooltip" data-original-title="GitHub"></i>
                </a>
                <a className="link-icon" href="https://www.linkedin.com/in/zhouyi-wang-3a168076/">
                    <i className="fab fa-linkedin" data-toggle="tooltip" data-original-title="LinkedIn"></i>
                </a>
                <a className="link-icon resume-icon" href="https://drive.google.com/file/d/1I5v1idNqW5CYDzs5qdorXUl8IvpOiYcD/view?usp=sharing">
                    <i className="fas fa-external-link-square-alt" data-toggle="tooltip" data-original-title="Resume"></i>
                </a>
                <a className="link-icon" href="mailto:wzyzhouyi@gmail.com">
                    <i className="fas fa-envelope-square" data-toggle="tooltip" data-original-title="Email"></i>
                </a>
            </div>
        </div>
    )
}
