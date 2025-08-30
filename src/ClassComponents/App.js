import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='' element={<Home q='All Categories' />} />
            <Route path='/' element={<Home q='All Categories' />} />
            <Route path='/business' element={<Home q='Business' />} />
            <Route path='/entertainment' element={<Home q=' Entertainment' />} />
            <Route path='sports' element={<Home q='Sports' />} />
            <Route path='/science' element={<Home q='Science' />} />
            <Route path='/health' element={<Home q='Health' />} />
            <Route path='/politics' element={<Home q='Politics' />} />
            <Route path='/bollywood' element={<Home q='Bollywood' />} />
            <Route path='/holywood' element={<Home q='Holywood' />} />
            <Route path='/crime' element={<Home q='Crime' />} />
            <Route path='/jokes' element={<Home q='Jokes' />} />


          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    )
  }
}

