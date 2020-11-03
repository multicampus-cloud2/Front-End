import React from 'react';
import teamA from './teamA.jpg'
import teamB from './teamB.jpg'
import teamC from './teamC.jpg'
import teamD from './teamD.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div>
        <div>
            <h2>서비스 소개</h2>
            <p>이 프로젝트는 카페 별 성분을 조회하고 비교하기 위해 제작한 사이트 입니다.</p>
        </div>
        <div>
            <h2>개발자 소개</h2>
                <section class="team spad">
                   <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="team__item set-bg" data-setbg="img/team/team-1.jpg">
                                    <img src={teamA}></img>
                                    <div class="team__item__text">
                                        <h6>이재환</h6>
                                        <div class="team__item__social">
                                            <a href="https://www.instagram.com/hwanjae_93/"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                            <br/>
                                            <a href="https://github.com/boolks"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item set-bg" data-setbg="img/team/team-2.jpg">
                                <img src={teamB}></img>
                                <div class="team__item__text">
                                    <h6>주성우</h6>
                                    <div class="team__item__social">
                                        <a href="https://www.instagram.com/sung_wooo"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                        <br/>
                                        <a href="https://github.com/nickhealthy"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item set-bg" data-setbg="img/team/team-3.jpg">
                                <img src={teamC}></img>
                                <div class="team__item__text">
                                    <h6>김윤영</h6>
                                    <div class="team__item__social">
                                        <a href="https://www.instagram.com/y.younge"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
                                        <br/>
                                        <a href="https://github.com/yooonyoung"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="team__item set-bg" data-setbg="img/team/team-4.jpg">
                                <img src={teamD}></img>
                                <div class="team__item__text">
                                    <h6>안예진</h6>
                                    <div class="team__item__social">
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