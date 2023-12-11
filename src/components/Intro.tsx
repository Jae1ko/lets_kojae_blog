import React from 'react';

import { introText } from '@/constants';

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro_inner">
                <h2 className="intro_title">
                    introduce <em>자기소개</em>
                </h2>
                <div className="intro_desc">
                    {introText.map((intro, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{intro.title}</h3>
                            <p>{intro.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Intro;
