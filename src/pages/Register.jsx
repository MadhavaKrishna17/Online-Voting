import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const[userData, setUserData] = useState({fullName:"", email:"", password:"", password2:"",aadhaar:"" })

  
  // State to store validation errors
  const [errors, setErrors] = useState({});

  
  // Function to validate Date of Birth instantly on input change
  const validateDOB = (dob) => {
    let newErrors = { ...errors }; // Copy existing errors
    if (dob) {
      const today = new Date();
      const birthDate = new Date(dob);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // Adjust age based on month and day difference
      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        newErrors.dob = "You must be at least 18 years old to vote.";
      } else if (age < 18) {
        newErrors.dob = "You must be at least 18 years old to vote.";
      } else {
        delete newErrors.dob; // Remove error if DOB is valid
      }
    }
    setErrors(newErrors);
  };


  //function to Change controlled inputs
  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Validate DOB as the user types
    if (name === "dob") {
      validateDOB(value);
    }
  };

  console.log(userData)

   // Function to validate inputs before submission

   const validateInputs = () => {
    let newErrors = { ...errors };

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
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
          {errors.general &&<p className="form__error-message">{errors.general}</p>}
            <input type="text" name='fullName' placeholder='Full Name' onChange={changeInputHandler} autoComplete='true' autoFocus required />
            <input type="email" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true'required />
            <input type="password" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true' required />
            {errors.password && <p className="error">{errors.password}</p>}
            <input type="password" name='password2' placeholder='Confirm Password' onChange={changeInputHandler} autoComplete='true' required />
            {errors.password2 && <p className="error">{errors.password2}</p>}
            <input type="text" name="aadhaar" placeholder="Enter Aadhaar ID" onChange={changeInputHandler}  maxLength="12" pattern="\d{12}" title="Aadhaar ID must be a 12-digit number" required/>
            {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}
            <div className="dob-container">
            <input type="date" id="dob" name="dob" onChange={changeInputHandler} required className="register-dob" onFocus={(e) => e.target.nextSibling.classList.add("hidden")} 
            onBlur={(e) => !e.target.value && e.target.nextSibling.classList.remove("hidden")}/>
            {errors.dob && <p className="error">{errors.dob}</p>}
           <span className="dob-placeholder">Date of Birth</span>
           </div>

  
      
          <select name="age" onChange={changeInputHandler} required>
          <option value="">Select Age</option>
          {[...Array(93)].map((_, i) => (
           <option key={i} value={i + 18}>{i + 18}</option>
            ))}
           </select>
            <p>Already have an account?<Link to ='/'> Sign in</Link></p>
            <button type='submit' className="btn primary">Register</button>
          </form>
        </div>
      </section>
  )
}

export default Register