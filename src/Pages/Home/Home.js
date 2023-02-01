import React from 'react'
import BannerSec from '../../Components/BannerSec/BannerSec'
import NavBar from '../../Components/NavBar/NavBar'
import RowPost from '../../Components/RowPost/RowPost'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <header>
            <NavBar/>
        </header>
        <main>
            <BannerSec/>
        </main>
        <section>
          <RowPost/>
        </section>
        <section>
          <RowPost/>
        </section>
        <section>
          <RowPost/>
        </section>

    </div>
  )
}

export default Home