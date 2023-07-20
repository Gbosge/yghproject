import React,{useState} from 'react';
import styles from './Pages.module.scss';
import { Link } from 'react-router-dom';
import {FcGoogle}  from 'react-icons/fc';
import {BsFacebook}  from 'react-icons/bs';
import { toast } from 'react-toastify';
import axios from 'axios';


const URL ='http://localhost:8000/api/register'




const Register = () => {
// input handler
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  const initialstate ={
    name:'',
    password:'',
    email:''

  }
  const [formData,setFormData]= useState(initialstate)
  const {name,password,email} = formData

  const handleinputChange = (e) => {
    const {name, value } = e.target
setFormData({...formData, [name]:value})
  }

  const create = async (userData) =>{
    try {
    const  response = await axios.post(`http://localhost:8000/api/register`,userData, {withCredentials:true})
    if(response.statusText=== 'OK'){
      toast.success('registration successfully')

    }
    return response.data
    } catch (error) {
      toast.error(error)
      
    }

  }

 
  // fetch()
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  
  // reg function
  const register = (e) =>{
    
    e.preventDefault()
    const userData = {
      name:name,
      password:password,
      email:email
    }
   try {
    create(userData)
   } catch (error) {
    console(error)
   }
   setFormData(initialstate)
   
    
  }


  return (
    <section className={`container ${styles.auth}`}>
    
    <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={register}>
            <input type='text' placeholder='Name' required name='name' value={name} onChange={handleinputChange} />
            <input type='text' placeholder='Email' required name='email'  value={email} onChange={handleinputChange} />
            <input type='password' placeholder='password' required name='password'  value={password} onChange={handleinputChange}/>   
                             
               <button className='--btn --btn-primary --btn-block' >Register</button>
      
        </form>

        <span className={styles.register}>
        <p>Already have an account?</p>
        <Link to='/login'> Login</Link>
       </span>
    </div>
    <button className='--btn --btn-primary --btn-block'>
    <FcGoogle/> Signup with Google</button> <button className='--btn --btn-primary --btn-block'>
    <BsFacebook style={{color:'blue'}}/> Signup with Facebook</button>
    
        </section>
      )
    }
    

export default Register