import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NewsDetail extends Component {

    render() {
        return (
            <>
                <div className='col-xl-3 col-lg-4 col-md-6  col-sm-12'>


                    <div className="card mb-5 shadow-sm p-1 bg-body-tertiary rounded w-100" >
                        < img src={this.props.pic} className="card-img-top" alt={this.props.title} />
                        <NavLink to={this.props.url}>
                        <div className='d-flex justify-content-between px-2 mt-2'>
                            <p className='text-muted'>{this.props.source}</p>
                            <p className='text-muted'>{this.props.date}</p>
                        </div>

                            <div className="card-body ">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">    {this.props.description}  </p>
                                {/* <NavLink to={this.props.url} className='btn btn-primary'>Read More ....</NavLink> */}
                            </div>
                        </NavLink>
                    </div>

                </div >
            </>
        )
    }
}
