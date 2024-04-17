import React, {useState} from 'react';
import './RegisterForm.css';
import db from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const RegisterForm = ({onSignup}) => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username,setUserName] = useState('');


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userData = { id, email, password, username }; // Create an object with user data
            const docRef = await addDoc(collection(db, 'users'), userData); // Pass user data to addDoc
          
            console.log('User registered with ID:', docRef.id);
          
            if (onSignup) {
              onSignup();
            }
          
            // Clear input fields after successful signup
            setId('');
            setEmail('');
            setPassword('');
            setUserName('');
          } catch (error) {
            console.error('Error adding user:', error);
          }
    };

    return (
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
            <input 
                type='text'
                placeholder='Id'
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                />
                <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <input 
                type='text'
                placeholder='UserName'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
                />
                <button type='submit'>Sign Up</button>
                <div className='login-label'>
                    <p>Already have an account? <button onClick={onSignup}>Login</button></p>

                </div>
            </form>
            
        </div>
    );
};

export default RegisterForm;