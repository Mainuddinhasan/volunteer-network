import React, { useContext, useEffect, useState } from 'react';
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

  
//   useEffect(() => {
//     fetch('http://localhost:5000/product/'+itemId)
//         .then(res => res.json())
//         .then(data => setProduct(data))
// }, [itemId])

const onSubmit = data => {
    console.log(data);
}
//   const onSubmit = data => {
//     // console.log(data);
//       fetch('http://localhost:5000/addRegistrationInfo', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)

//       })
//       .then(res => res.json())
//       .then(success => {
//       if (success) {
//       alert('your order placed successfully')

//     }

//   })
// }
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
);

};

export default Registration;


// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useParams} from 'react-router-dom';
// import { UserContext } from '../../App';
// import logo from '../../resources/logos/Group 1329.png';
// import { useForm } from "react-hook-form";
// // import volunteerServices from '../../FakeData/FakeData';
// import './Registration.css'


// const Registration = () => {
 
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
//   const [freeWillItem,setFreeWillItem] = useState([]);
//   const {_Id} = useParams();
//   // console.log(id)

//   const volunteerItem = freeWillItem.find(vs => vs.uniqueId === _Id )
//   // console.log(volunteerItem)
//   const { register, errors, handleSubmit } = useForm();

//   useEffect(() => {
//     fetch('http://localhost:5000/product/'+ _Id)
//         .then(res => res.json())
//         .then(data => setFreeWillItem(data))
// }, [_Id])
//   // const onSubmit = data => console.log(data);

//   const onSubmit = data => {
//     // console.log(data);
//       fetch('http://localhost:5000/addProduct', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)

//       })
//       .then(res => res.json())
//       .then(success => {
//       if (success) {
//       alert('your order placed successfully')

//     }

//   })


// }
 
// return (
//         <div className="registration-container">
//           <div>
//             <Link to="/home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
//           </div>
         
//           <form onSubmit={handleSubmit(onSubmit)}> 
//           <div className="registration">
//             <div className="form-group">
//             <label htmlFor="">Full Name</label>
//             <input name="Name" type="name"defaultValue={loggedInUser.name} className="form-control"ref={register({ required: true })}/>
//               {errors.Name && <span className="text-danger">your name is required<br /></span>}
//             </div> 
//             <div className="form-group">
//              <label htmlFor="">User Name or email</label>
//              <input name="Email" type="email" defaultValue={loggedInUser.email}className="form-control" ref={register({ required: true })} />
//               {errors.Email && <span className="text-danger">your email is required<br /></span>} 

//             </div>
//              <div className="form-group">
//                  <label htmlFor="">Date</label>
//                  <input name="RegisterTime" type="date" className="form-control" ref={register({ required: true })} />
//                  {errors.RegisterTime && <span className="text-danger">RegisterTime is required<br /></span>}

//                </div>
//                <div className="form-group">
//                 <label htmlFor="">Description</label>
//                 <input name="Description" type="text" className="form-control" ref={register({ required: true })} />
//                 {errors.Description && <span className="text-danger">Description is required<br /></span>}

//               </div>     
//               <div className="form-group">
//                 <label htmlFor="">Organize books at the library</label>
//                 <input name="VolunteeringName" defaultValue={freeWillItem.name} type="text" className="form-control" ref={register({ required: true })} />
//                 {errors.VolunteeringName && <span className="text-danger">VolunteeringName is required<br /></span>}

//               </div>
            
//               <div>
//                 {/* <Link to="/bookedItems" > <input className="form-control submitBtn" type="submit" /></Link> */}
//                 <input className="form-control submitBtn" type="submit" />
//               </div>
  
//             </div>
//         </form>
        
//         </div>
//       );
//     };

// export default Registration;