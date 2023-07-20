import React from 'react';
import styles from './Pages.module.scss';
import { Link } from 'react-router-dom';

const Reset = () => {
  return (
    <section className={`container ${styles.auth}`}>
    
    <div className={styles.form}>
        <h2>Reset Password</h2>
        <form>
            <input type='text' placeholder='Email' required/>
            <input type='text' placeholder='Enter previous password' required/>
            <input type='text' placeholder='Enter new password' required/>
            <input type='text' placeholder='Confrirm new password' required/>
            <button  type="submit" className="--btn --btn-primary --btn-block"> Reset Password</button>
           
            <div className={styles.links}>
            <p>
                  <Link to="/login"><button className='--btn --btn-primary --btn-block'> Login</button></Link>
                </p>
                <p>
                  <Link to="/register"><button className="--btn --btn-primary --btn-block">Register</button></Link>
                </p>
                  </div>
                  
             
        </form>
  
    </div>
    
        </section>
  )
}

export default Reset