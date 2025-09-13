import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {

  const [language, setLanguage] = useState('hi');
  const [search, setSearch] = useState('');



  function getLanguage(data) {
    setLanguage(data)

  }
  function getSearch(searchValue) {
    setSearch(searchValue)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar getLanguage={getLanguage} getSearch={getSearch} />
        <Routes>
          <Route path='' element={<Home q={search ? search : 'All '} language={language} />} />
          <Route path='/all' element={<Home q={search ? search : 'All'} language={language} />} />
          <Route path='/business' element={<Home q={search ? search : 'Business'} language={language} />} />
          <Route path='/entertainment' element={<Home q={search ? search : 'Entertainment'} language={language} />} />
          <Route path='/sports' element={<Home q={search ? search : 'Sports'} language={language} />} />
          <Route path='/science' element={<Home q={search ? search : 'Science'} language={language} />} />
          <Route path='/health' element={<Home q={search ? search : 'Health'} language={language} />} />
          <Route path='/politics' element={<Home q={search ? search : 'Politics'} language={language} />} />
          <Route path='/bollywood' element={<Home q={search ? search : 'Bollywood'} language={language} />} />
          <Route path='/holywood' element={<Home q={search ? search : 'Holywood'} language={language} />} />
          <Route path='/crime' element={<Home q={search ? search : 'Crime'} language={language} />} />
          <Route path='/jokes' element={<Home q={search ? search : 'Jokes'} language={language} />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}


