import React, { useState } from "react";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Lobby = ({userId}) => {
    const [roomName, setRoomName] = useState('');

    const handleCreateRoom = async () => {
        try {
            const roomRef = await addDoc(collection(db, 'rooms'),{
                name: roomName,
                host: userId
            });
            console.log('Room created with ID:', roomRef.id);

            setRoomName('');
        }catch (error){
            console.error('Error creating room:', error);
        }
    }

    return (
        <div className='form-container'>
            <h2>Time to Play</h2>
            <form onSubmit={handleCreateRoom}>
            
                <input 
                type="text"
                placeholder="Enter room name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                required
                />
                <button type="submit">Create Room</button>
            </form>
        </div>
    );
};

export default Lobby;


