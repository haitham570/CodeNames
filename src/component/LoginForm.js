
import React, { useState } from 'react';
import db from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const LoginForm = ({onLogin, onSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
        const q = query(collection(db, 'users'), where('email', '==', email));
        const querySnapshot = await getDocs(q);
    
        if (!querySnapshot.empty) {
          // User found, check password
          querySnapshot.forEach((doc) => {
            const userData = doc.data();
            if (userData.password === password) {
              console.log('Login successful');

              if (onLogin){
                onLogin (doc.id);
              }
              // Proceed with login logic, e.g., redirect to dashboard
            } else {
              console.log('Incorrect password');
              // Handle incorrect password, e.g., display error message
            }
          });
        } else {
          console.log('User not found');
          // Handle user not found, e.g., display error message
        }
      } catch (error) {
        console.error('Error querying user:', error);
        // Handle error, e.g., display error message
      }

    // Clear input fields after login attempt
    setEmail('');
    setPassword('');
    
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          id='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete='email'
        />
        <input
          id='password'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete='current-password'
        />
        <button type="submit">Login</button>
        <div className='SignUp-label'>
                <p>Don't have an account? <button onClick={onSignup} >Sign Up</button></p>

            </div>
      </form>
    </div>
  );
};

export default LoginForm;