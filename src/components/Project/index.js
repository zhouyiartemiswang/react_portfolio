import React from 'react';

export default function Project() {
    return (
        <section className="row">
            <section className="col-12 col-md-6">
                <div className="card" >
                    <img src="../assets/img/cold_west.PNG" className="card-img-top" alt="cold_west" />
                    <div className="card-body">
                        <h5 className="card-title">The Cold West</h5>
                        <p className="card-text">One-stop website for winter activity lovers in Washington. Used express-handlebars and mySQL2.</p>
                        <a href="https://the-cold-west.herokuapp.com/" className="card-link">Deployed Link</a>
                        <a href="https://github.com/zhouyiartemiswang/Cold-West-Tours" className="card-link">GitHub Repo</a>
                    </div>
                </div>
            </section>
        </section>
    )
}
