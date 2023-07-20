import React,{useState} from 'react';
import styles from './Pages.module.scss';
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
import { toast } from 'react-toastify';



const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
 const navigate = useNavigate()


  const URL = 'http://localhost:8000/api/login'

  const connect = async () =>{

    try {
     const response = await axios.post('http://localhost:8000/api/login', 
    {
      email:email,
      password:password
    })
    if (response.statusText === 'OK'){
      toast.success('Login successfully')
    }
    console.log('connected')
      
    } catch (error) {
      console.log(error)
      toast.error('Login successfully')
    }
    

  }
  
  const handleSubmit = (e) =>{
    if(!email && !password){
      toast.error('kindly insert email or password ')
    }
    if (password.length < 6){
      toast.error('password must be more than 6 xxx')
    }
    connect()
    toast.success('connected ')
    e.preventDefault()
    setEmail('')
    setPassword('')
    navigate('/Home')
    
    
  }
  return (
    <section className={`container ${styles.auth}`}>
<div className={styles.form}>
    <h2>Login</h2>
    <form onSubmit={handleSubmit} >
        <input type='text' placeholder='Email' value ={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type='password' placeholder='password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
       
        <div className={styles.links}>
        <Link to="/reset">Reset Password</Link>
              </div>
              <p> or </p>
              <button  className='--btn --btn-primary --btn-block'>
           Login in</button>
         
    </form>
    <br/>
    <button className='--btn --btn-primary --btn-block'>
           <FcGoogle/> Login With Google</button>

    <span className={styles.register}>
              <p>Don't have an account? </p>
              <Link to="/register"> <p> Click to Register </p> </Link>
              
            </span>
</div>

    </section>
  )
}

export default Login