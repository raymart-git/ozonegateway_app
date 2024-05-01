import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the message from the backend
        fetch('/welcome')
            .then(response => response.json())
            .then(data => { setMessage(data.message) })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>{message}</h1> {/* Display the message here */}
        </div>
    );
}

export default App;