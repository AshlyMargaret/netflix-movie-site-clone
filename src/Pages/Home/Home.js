import React from 'react'
import BannerSec from '../../Components/BannerSec/BannerSec'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.css'
import { Orginals,Action,ComedyMovies,HorrorMovies,RomanceMovies} from '../../Urls'
import Row from '../../Components/Row/Row'
import Footer from '../../Components/Footer/Footer'
import  { useState,useEffect } from 'react'

function Home() {
  const [show, handleShow] = useState(false);

  // When scroll is a 100px (down in page) we add the navbar visibilty
  // if not remove visibility on navbar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className='home'>
        <header className={`nav ${show && "nav__black"}`}>
            <NavBar/>
        </header>
        <main>
            <BannerSec/>
        </main>
        <div className="rowMovieSection">
        <section>
          <Row  title='Netflix Orginals' url={Orginals}/>
        </section>
        <section>
        <Row  url={Action} title='Action Movies' isSmall/> 
        </section>
        <section>
        <Row  url={ComedyMovies} title='Comedy Movies' isSmall/>
        </section>
        <section>
        <Row  url={HorrorMovies} title='Horror Movies' isSmall/>
        </section>
        <section>
        <Row  url={RomanceMovies} title='Romance Movies' isSmall/>
        </section>
        </div>
        <footer>
          <Footer/>
        </footer>
       
    </div>
  )
}

export default Home