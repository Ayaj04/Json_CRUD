import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';



const Userdata = () => {



    // 2
    const [data, setData] = useState([])


    // 1
    const FetchAPI = async () => {
        try {

            const result = await axios.get('http://localhost:3000/emp')
            // console.log(result)
            console.log(result.data)

            console.log("Successfully Fetched Data")

            // set state
            setData(result.data)

        } catch (err) {
            console.log(err)
            console.log("Faild To fetch Data")
        }
    }


    useEffect(() => {

        FetchAPI()

    }, [])



    console.log(data)

    // ***********************************************


    const DeleteEmp = async (id) => {

        // alert("Deleted Emp"+id);

        try {
            // filter
            const result = data.filter((val) => val.id !== id)
            setData(result);

            await axios.delete(`http://localhost:3000/emp/${id}`)

        } catch (err) {
            console.log(err)
            return;
        }


    }

    return (
        <>



            {/* map */}

            <div className="container my-5">
                <div className="row">



                    {
                        data.map((val, index) => {
                            return (
                                <div className="col-md-4 my-2" key={index}>

                                    <div className="card">
                                        <div className="card-header fw-bold">
                                            {val.name}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{val.skill}</h5>
                                            <p className="card-text"><span className='fw-bold text-secondary'>Email : </span>  {val.email}</p>
                                            <p className="card-text"><span className='fw-bold text-secondary'>Mobile :</span>  {val.mobile}</p>
                                            <p className=" " >
                                                <i className='fa fa-trash text-danger fw-bold' onClick={() => { if (window.confirm('Are You Sure ?')) { DeleteEmp(val.id) } }}></i>

                                                <NavLink to={`/edit/${val.id}`}><i className='ms-3 fa fa-edit text-success fw-bold'></i></NavLink>
                                            </p>


                                        </div>
                                    </div>


                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </>
    )
}

export default Userdata
