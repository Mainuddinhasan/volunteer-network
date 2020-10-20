import React, { useContext, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/logos/Group 1329.png';
import { useForm } from "react-hook-form";
import volunteerServices from '../../FakeData/FakeData';

import './Registration.css'


const Registration = () => {
 
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  
  // const [product, setProduct] = useState({});
  const { itemId} = useParams();
  const volunteerItem = volunteerServices.find(vs => vs.uniqueId === itemId )
  console.log(volunteerItem)
  const { register, errors, handleSubmit } = useForm();
  // const onSubmit = data => console.log(data);

  const onSubmit = data => {
    // console.log(data);
      fetch('http://localhost:5000/addProduct', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)

      })
      .then(res => res.json())
      .then(data => {
      if (data) {
      alert('your order placed successfully')

    }

  })


}
  

    //     const RegisterData = {...loggedInUser}
    //     fetch('http://localhost:5000/addProduct', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(RegisterData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 alert('your order placed successfully')
    //             }
    //         })
    // };

    return (
        <div className="registration-container">
          <div>
            <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
          </div>
         
          <form onSubmit={handleSubmit(onSubmit)}> 
          <div className="registration">
            <div className="form-group">
            <label htmlFor="">Full Name</label>
            <input name="Name" type="name"defaultValue={loggedInUser.name} className="form-control"ref={register({ required: true })}/>
              {errors.Name && <span className="text-danger">your name is required<br /></span>}
            </div> 
            <div className="form-group">
             <label htmlFor="">User Name or email</label>
             <input name="Email" type="email" defaultValue={loggedInUser.email}className="form-control" ref={register({ required: true })} />
              {errors.Email && <span className="text-danger">your email is required<br /></span>} 

            </div>
             <div className="form-group">
                 <label htmlFor="">Date</label>
                 <input name="RegisterTime" type="date" className="form-control" ref={register({ required: true })} />
                 {errors.RegisterTime && <span className="text-danger">RegisterTime is required<br /></span>}

               </div>
               <div className="form-group">
                <label htmlFor="">Description</label>
                <input name="Description" type="text" className="form-control" ref={register({ required: true })} />
                {errors.Description && <span className="text-danger">Description is required<br /></span>}

              </div>     
              <div className="form-group">
                <label htmlFor="">Organize books at the library</label>
                <input name="VolunteeringName" defaultValue={volunteerItem.name} type="text" className="form-control" ref={register({ required: true })} />
                {errors.VolunteeringName && <span className="text-danger">VolunteeringName is required<br /></span>}

              </div>
            
              <div>
                {/* <Link to="/bookedItems" > <input className="form-control submitBtn" type="submit" /></Link> */}
                <input className="form-control submitBtn" type="submit" />
              </div>
              

          

           
            </div>
        </form>
        
        </div>

        /* <div className="from-group mt-5">
            <button onClick={handleGoogleSignIn} className="btn btn-brand">Google Sign in</button>
             </div> */
               /* <div className="form-group">
                <label htmlFor="" className="text-danger">Forgot your password?</label>
              </div> */






        // <div className="registration-container">
            
        //   <div className="row align-items-center" style={{ height: "100vh" }}>
        //     <div className="col-md-6 shadow p-5">
        //     <div>
        //     <Link style={{}} className="mb-5" to="/home"><img style={{ width: '20%', marginLeft:"40%"}} src={logo} alt="logo" /></Link>
        //     </div>
        //      <div className="form-group">
        //         <label htmlFor="">Full Name</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">User Name or email</label>
        //         <input type="text" className="form-control" />
        //       </div>
             
        //       <div className="form-group">
        //         <label htmlFor="">Date</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">Description</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="">Organize books at the library</label>
        //         <input type="password" className="form-control" />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="" className="text-danger">Forgot your password?</label>
        //       </div>
        //       <div className="from-group mt-5">
        //         <button className="btn btn-brand">Google Sign in</button>
        //       </div>
        //     </div>
        //     {/* <div className="col-md-6 d-none d-md-block align-self-end">
        //       <img className="img-fluid" src={LoginBg} alt="" />
        //     </div> */}
        //   </div>
        // </div>
      );
    };

export default Registration;