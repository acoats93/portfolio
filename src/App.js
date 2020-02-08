import React, {useState} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import routes from './routes'
import headShot from './headShot.jpg'
import './reset.css'
import './App.css';
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: toast.POSITION.BOTTOM_RIGHT
})

function App() {
  const[selected, setSelected] = useState('home')

  const handleClick = clicked => {
    console.log(clicked.target.id)
    setSelected(clicked.target.id)
  }

  return (
    <div className="App">
        <>
          <ToastContainer />
        </>
        <Router>
          <header>
            <div className='header-info'>
              <div className='headshot-container'>
                <img src={headShot} alt='headshot' className='header-image' />
              </div>
              <span>Josi Reis-West</span>
            </div>
            <div className='header-nav-container'>
              <ul className='header-nav'>
                <li className='nav-link'><Link id='home' to='/' className={selected == 'home' ? 'selected' : null} onClick={handleClick}>Home</Link></li>
                <li className='nav-link'><Link id='about' to='/about' className={selected == 'about' ? 'selected' : null} onClick={handleClick}>About</Link></li>
                <li className='nav-link'><Link id='skills' to='/skills' className={selected == 'skills' ? 'selected' : null} onClick={handleClick}>Skills</Link></li>
                <li className='nav-link'>Projects</li>
                <li className='nav-link'><Link id='contact' to='/contact' className={selected == 'contact' ? 'selected' : null} onClick={handleClick}>Contact</Link></li>
              </ul>
            </div>
          </header>
          <section className='main'>
          {routes}
          </section>
        </Router>
    </div>
  );
}

export default App;
