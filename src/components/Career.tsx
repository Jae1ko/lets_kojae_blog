import React from 'react';

import { careerText } from '@/constants';

const Career = () => {
    return (
        <section id="career">
            <div className="career_inner">
                <h2 className="career_title">
                    Career <em>나의 경력</em>
                </h2>
                <div className="career_wrap">
                    {careerText.map((item, index) => (
                        <article key={index} className={`career_item s${index + 1}`}>
                            <span className="num">{index + 1}</span>
                            <div className="career">
                                <div className="left">
                                    <div>{item.text[0]}</div>
                                    <h3>{item.text[1]}</h3>
                                    <p>{item.text[2]}</p>
                                    <p>{item.text[3]}</p>
                                </div>
                                <div className="right">
                                    {item.career.map((item, index) => (
                                        <div key={index}>
                                            <div>- {item}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                    {/* <article className={`career_item s1`}>
                        <span className="num">1</span>
                        <div className="career">
                            <div className="left">
                                <div>헬린캠프</div>
                                <h3>트레이너와 회원을 위한 스타트업</h3>
                                <p>프론트엔드 개발자</p>
                                <p>2022.08 ~ 2023.08</p>
                            </div>
                            <div className="right">
                                <div>- MVP를 개발 / 출시</div>
                                <div>- 골대ㅗㄹfsefief대</div>
                                <div>- 골대ㅗㄹfsefief대</div>
                                <div>- 골대ㅗㄹfsefief대</div>
                                <div>- 골대ㅗㄹfsefief대</div>
                            </div>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    );
};

export default Career;
