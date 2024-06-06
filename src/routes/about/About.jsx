import React from 'react';

const About = () => {
    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

            <main role="main" className="inner cover">
                <h1 className="cover-heading">О нас</h1>
                <p className="lead">Здесь будет описание магазина</p>
                <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary">Здесь будут кнопки</a>
                </p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    Здесь будут контакты
                </div>
            </footer>
        </div>
    );
};

export default About;
