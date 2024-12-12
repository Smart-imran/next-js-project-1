'use client'
import React, { useState } from 'react';

function LiveTextDisplay() {
  const [text, setText] = useState(''); // টেক্সট স্টেট ডিক্লেয়ার

  // ইনপুট পরিবর্তন হ্যান্ডল করার জন্য ফাংশন
  const handleChange = (event) => {
    setText(event.target.value); // স্টেট আপডেট
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Live Text Display</h1>
      
      {/* টেক্সট ইনপুট */}
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={handleChange} 
        style={{ padding: '10px', fontSize: '16px' }}
      />
      
      {/* ব্যবহারকারীর ইনপুট দেখানো */}
      <h2 style={{ marginTop: '20px', color: 'blue' }}>
        {text || 'Your text will appear here...'}
      </h2>
    </div>
  );
}

export default LiveTextDisplay;
