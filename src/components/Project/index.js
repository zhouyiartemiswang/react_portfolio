import React from 'react';

export default function Project(props) {
    return (
        <section className="row">
            <section className="col-12 col-md-6">
                <div className="card" >
                    <img src={props.img} className="card-img-top" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href={props.deployedLink} className="card-link">Deployed Link</a>
                        <a href={props.githubRepo} className="card-link">GitHub Repo</a>
                    </div>
                </div>
            </section>
        </section>
    )
}
