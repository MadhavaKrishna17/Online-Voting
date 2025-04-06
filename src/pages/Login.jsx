import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const[userData, setUserData] = useState({fullName:"", email:"", password:"", password2:"",aadhaar:"" })

  
  // State to store validation errors
  const [errors, setErrors] = useState({});


  //function to Change controlled inputs
  const changeInputHandler=(e)=>{
    setUserData(prevState => {
      return{...prevState, [e.target.name]: e.target.value}
    })
  }


   // Function to validate inputs before submission

   const validateInputs = () => {
    let newErrors = {};

    //  Validate Aadhaar ID (Only 12-digit numbers)
    if (!/^\d{12}$/.test(userData.aadhaar)) {
      newErrors.aadhaar = "Aadhaar ID must be exactly 12 digits and numeric.";
    }

    //  Validate Password (Alphanumeric with at least 1 capital, 1 small, 1 number, 1 special character)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character.";
    }

    //  Validate Password Match
    if (userData.password !== userData.password2) {
      newErrors.password2 = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

    // Form Submission Handler

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission
      if (validateInputs()) {
        console.log("Form submitted successfully", userData);
        // Proceed with API call or further actions
      }
    };


   







  return (
      <section className="register">
        <div className="container register__container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
          {errors.general &&<p className="form__error-message">{errors.general}</p>}
           
            <input type="email" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true'required />
            <input type="password" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true' required />
            {errors.password && <p className="error">{errors.password}</p>}
            <input type="text" name="aadhaar" placeholder="Enter Aadhaar ID" onChange={changeInputHandler}  maxLength="12" pattern="\d{12}" title="Aadhaar ID must be a 12-digit number" required/>
            {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}
            <p>Don't have an account?<Link to ='/register'> Sign up</Link></p>
            <button type='submit' className="btn primary">Login</button>
          </form>
        </div>
      </section>
  )
}



export default Login