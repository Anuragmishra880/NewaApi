
import { NavLink } from 'react-router-dom'

export default function NewsDetail(props) {


    return (
        <>
            <div className='col-xl-3 col-lg-4 col-md-6  col-sm-12'>


                <div className="card mb-5 shadow-sm p-1 bg-body-tertiary rounded w-100" style={{ height: "100%" }} >
                    < img src={props.pic ? props.pic : '/noImg.avif'} className="card-img-top" alt={props.title} height={200} />
                    {/* <NavLink to={props.url}> */}


                    <div className="card-body ">

                        <h5 className="card-title">{props.title ? props.title : ""}</h5>
                        <hr />
                        <div className='d-flex justify-content-between px-2 mt-2'>
                            <p className='text-muted'>{props.source}</p>
                            <p className='text-muted'>{new Date(props.date).toLocaleDateString()}</p>
                        </div>
                        <p className="card-text">    {props.description ? props.description.slice(0, 100) + "..." : " "}  </p>
                        <NavLink to={props.url} className='btn btn-primary w-100 text-center'>Read More ....</NavLink>
                    </div>
                    {/* </NavLink> */}
                </div>

            </div >
        </>
    )
}

