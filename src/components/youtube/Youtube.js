import React from 'react';
import youtube from './Youtube.module.css'
const Youtube = () => {
    return (
        <div className={youtube.container}>
            <h1 className={youtube.title}>14 Peaks: Nothing Is Impossible</h1>
            <h2 className={youtube.subtitle}>Official Trailer</h2>
            <iframe className={youtube.video} src="https://www.youtube.com/embed/8QH5hBOoz08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen="allowfullscreen"></iframe>
        </div>
    );
};

export default Youtube;