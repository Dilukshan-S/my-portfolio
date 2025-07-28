import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-br from-indigo-700 via-purple-700 to-black opacity-80 animate-pulse" />
      <div className="absolute w-[300%] h-[300%] bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:25px_25px] opacity-30 animate-spin-slow" />
    </div>
  );
}