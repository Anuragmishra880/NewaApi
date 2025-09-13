import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

    const [search, setSearch] = useState('')


    function postSearch(e) {
        e.preventDefault()
        props.getSearch(search)
        setSearch('')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary sticky-top ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand text-light" to="/" onClick={
                        props.getSearch('')}>News</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="/all" onClick={
                                    props.getSearch('')}>All</NavLink>
                            </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/business" onClick={
                                props.getSearch('')}>Business</NavLink>  </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/entertainment" onClick={
                                props.getSearch('')}>Entertainment</NavLink>  </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/sports" onClick={
                                props.getSearch('')}>Sports</NavLink>  </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/science" onClick={
                                props.getSearch('')}>Science</NavLink>  </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/health" onClick={
                                props.getSearch('')}>Health</NavLink>  </li>
                            <li className="nav-item">   <NavLink className="nav-link text-light" to="/politics" onClick={
                                props.getSearch('')}>Politics</NavLink>  </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </button>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/bollywood" onClick={
                                        props.getSearch('')}>Bollywood </NavLink></li>
                                    <li><NavLink className="dropdown-item " to="/holywood" onClick={
                                        props.getSearch('')}>Hollywood</NavLink></li>


                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item " to="/crime" onClick={
                                        props.getSearch('')}>Crime</NavLink></li>
                                    <li><NavLink className="dropdown-item " to="/jokes" onClick={
                                        props.getSearch('')}>Jokes</NavLink></li>
                                </ul>
                            </li>
                            {/* languages  */}

                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-light" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Languages
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={
                                        props.getLanguage('hi')}>Hindi </button></li>
                                    <li><button className="dropdown-item " onClick={
                                        props.getLanguage('en')}>English</button></li>


                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) =>
                            postSearch(e)}>
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" name='search' value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }} />
                            <button className="btn btn-outline-light " type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

