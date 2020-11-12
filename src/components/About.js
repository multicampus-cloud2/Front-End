import React from 'react';
import teamA from 'img/teamA.jpg'
import teamB from 'img/teamB.jpg'
import teamC from 'img/teamC.jpg'
import teamD from 'img/teamD.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import 'css/about.css';

const About = () => {
  return (
    <div>
        <div>
            <h2>서비스 소개입니다. 버전관리 추가 된다고 나 믿는다.</h2>
            <p>이 프로젝트는 카페 별 성분을 조회하고 비교하기 위해 제작한 사이트 입니다.</p>
        </div>
        <div>
            <h2>개발자 소개</h2> 
                <section className="team spad">
                   <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="team__item set-bg" style={{backgroundImage:`url(${teamA})`}} data-setbg="img/team/team-1.jpg">
                                    <div className="team__item__text">
                                        <h6>이재환</h6>
                                        <div className="team__item__social">
                                            <a href="https://www.instagram.com/hwanjae_93/"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                            <br/>
                                            <a href="https://github.com/boolks"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:`url(${teamB})`}} data-setbg="img/team/team-2.jpg">
                                <div className="team__item__text">
                                    <h6>주성우</h6>
                                    <div className="team__item__social">
                                        <a href="https://www.instagram.com/sung_wooo"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                        <br/>
                                        <a href="https://github.com/nickhealthy"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:`url(${teamC})`}} data-setbg="img/team/team-3.jpg">
                                <div className="team__item__text">
                                    <h6>김윤영</h6>
                                    <div className="team__item__social">
                                        <a href="https://www.instagram.com/y.younge"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                        <br/>
                                        <a href="https://github.com/yooonyoung"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team__item set-bg" style={{backgroundImage:`url(${teamD})`}} data-setbg="img/team/team-4.jpg">
                                <div className="team__item__text">
                                    <h6>안예진</h6>
                                    <div className="team__item__social">
                                        <a href="https://www.instagram.com/say_0i"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                        <br/>
                                        <a href="https://github.com/ok2qw66"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};
 
export default About;