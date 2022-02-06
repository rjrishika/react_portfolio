import React, {useEffect} from 'react'
import "../Styles/Home.css"
import {HomeSocial} from "./HomeSocial"
import LadyImg from "../img/lady_img.png"
import Smiley from "../img/smiley_1.svg"
import LadyBgPath from "../img/lady_bgpath.svg"
import Star1 from "../img/star.svg"
import Star2 from "../img/star_2.svg"
import Star3 from "../img/star_3.svg"
import Medal from "../img/medal.svg"

import gsap from "gsap"

import {TimelineLite} from "gsap";

function Home() {
    
    useEffect(() => {
        
               
        gsap.timeline({delay: 0.3}).from(".homeTitle" , {duration : 0.5, opacity: 0, y:15, delay: 1.5 , ease : "back.out(1.7)"  })
                                   .fromTo(".profileBg",  {opacity: 0, scale : 0 }, {opacity : 1,scale: 1, ease:"elastic.out(1, 0.3)"})
                                   .from(".button", {duration: .5, opacity : 0, y : 20, ease: "bounce.out" })
                                   .from(".homeSocial a", {y : 160, opacity : 0, stagger : 0.1, duration : 0.8, ease : "back.out(1.7) " }, "Start")
                                   .from(".profileImg" , {duration : .8,  opacity : 0})
                                   .fromTo(".smiley", {opacity: 0, scale : 0 }, {opacity : 1,scale: 1, ease:"elastic.out(1, 0.3)"}," Start")
                                   .fromTo(".star1", {opacity: 0, scale : 0 }, {opacity : 1,scale: 1, ease:"elastic.out(1, 0.3)"}," Start")
                                   .fromTo(".star2", {opacity: 0, scale : 0 }, {opacity : 1,scale: 1, ease:"elastic.out(1, 0.3)"}," Start")
                                   .fromTo(".star3", {opacity: 0, scale : 0 }, {opacity : 1,scale: 1, ease:"elastic.out(1, 0.3)"}," Start")
                                   .from(".box1", {duration : .8, opacity : 0, xPercent : 100, ease : "back.out(1.7)"},"Start")
                                   .from(".box2", {duration : .8, opacity : 0, xPercent : 100, ease : "back.out(1.7)"},"Start")
                                },[])

    return (
        <section className='home section bd_grid' id="home">
             <div className='circle circleOne'></div>
             <div className='circle circleTwo'></div>
             <div className='circle circleThree'></div>

             <div className='homeData'>
                <h1 className='homeTitle' id="ht">
                    Hi , I'm <br/> <span>Rishika Jain</span> <br/> Web Developer
                </h1>

                <a href='' className='button'>
                    Contact Me
                </a>
             </div>

             <div className='homeSocial'>
                {
                    HomeSocial &&
                     HomeSocial.map((social) => (
                         <a href={social.iconLink} key={social.id}>
                             {social.iconName}
                         </a>
                     ))
                }
             </div>

             <div className='homeImg'>
                <img src={LadyImg} alt="" className='profileImg'/>
                <img src={LadyBgPath} alt="" className='profileBg'/>

                <img src={Smiley} alt="" className='smiley' />
                <img src={Star1} alt="" className='star1' />
                <img src={Star2} alt="" className='star2' />
                <img src={Star3} alt="" className='star3' />

                <div className='box box1'>
                    <div className='imgBox'>
                        <img src={Smiley} alt="" />
                    </div>
                    <div className='contentBox'>
                        <h2>React</h2>
                        <p>Type some content over here</p>
                    </div>
                </div>
                <div className='box box2'>
                    <div className='imgBox'>
                        <img src={Medal} alt="" />
                    </div>
                    <div className='contentBox'>
                        <h2>Awards</h2>
                        <p>Type some content over here</p>
                    </div>
                </div>
             </div>
        </section>
    )
}

export {Home}
