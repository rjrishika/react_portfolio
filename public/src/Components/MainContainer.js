import React,{useEffect} from 'react'
import { Home } from './Home'
import "../Styles/MainContainer.css"
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Footer } from './Footer'

import ScrollReveal from 'scrollreveal'

function MainContainer() {

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        ScrollReveal().reveal(sections, {
            delay: 375,
            duration : 500,
            reset : true,
            easeing : "ease-in",
        });
    },[])

    return (
        <main>
            <Home/>

            <About/>

            <Projects/>

            <Contact/>

            <Footer/>
        </main>
    )
}

export {MainContainer}
