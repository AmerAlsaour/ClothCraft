import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import useSignUp from '../../hooks/useSignUp';
import { useAuthContext } from '../../context/AuthContext';
import '../../Component/Style.css'
function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    phoneNumber: "",
    password: '',
    confirmPassword: '',
    location: "",
  });
  const { authUser, setAuthUser } = useAuthContext();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    // console.log(email,password);
    event.preventDefault();
    const res = await fetch("http://localhost:5000/auth/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username:inputs.username,
        email: inputs.email,
        password: inputs.password,
        confirmPassword: inputs.confirmPassword,
        phone: inputs.phone,
        location: inputs.location,
        birthDate: inputs.birthDate,
      }),
    });
    console.log(res, "res");
    if (res.ok) {
      console.log(res.ok);
      const data = await res.json();
      console.log(data.token, "token");
      localStorage.setItem("authUser", JSON.stringify(data));
      // context
      setAuthUser(data);
      console.log(data, "data");
      
      navigate("/HomePage");
    }
  };
  
  return (
    <div className='flex justify-around items-center flex-row-reverse flexclomn margintop1'>
      <div className='mw50 flex justify-end'>
        <img
          className="w35pers h-screen w100per rounded-e-full borderbluedent border-8 "
          src={'./Register.jpeg'}
          alt="About Hero Image"
        />
      </div>
      <div className="container  mt-10 ml-12 mw50 pl-9 flex justify-center flex-col items-start">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Sign up as a<span className='blueden'> Client</span> 
        </h1>
        <p className="text-center mb-10">
          Let's get you all set up so you can access your personal account.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                username
              </label>
              <input
                type="text"
                id="text"
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="First Name"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label htmlFor="text" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Location
              </label>
              <input
                type="text"
                id="lastName"
                name="location"
                value={inputs.location}
                onChange={(e) => setInputs({ ...inputs, location: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative flex flex-col w-full">
              <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="john.doe@gmail.com"
              />
            </div>
            <div className="relative flex flex-col w-full">
              <label htmlFor="phoneNumber" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={inputs.phone}
                onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
                className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="phoneNumber"
              />
            </div>
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="password" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="password  "
            />
          </div>
          <div className="relative flex flex-col w-full">
            <label htmlFor="confirmPassword" className="text-gray-700 text-sm font-bold mb-2 bg-white absolute top-15 left-3 px-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className=" bgblueden bgbluedenhover1 text-white font-bold py-2 px-4 rounded">
            sign up
          </button>
          <p className="text-center mt-1 ">
            Already have an account?{' '}
            <a href="/Login" className="underline blueden">
              Login
            </a>
          </p>
        </form> 
      </div>
    </div>
  );
}

export default Register;
