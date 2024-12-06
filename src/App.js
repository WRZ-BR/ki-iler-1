import React from 'react';
import Merhaba from './Merhaba';


export default function App() {
  console.log("merhaba")
  return (
    <div>
      <h1>Merhaba React!</h1>
      <p>İlk React dersimize hoş geldin.</p>
      <Merhaba /> {/* Yeni bileşeni kullanıyoruz */}
    </div>
  );
}
