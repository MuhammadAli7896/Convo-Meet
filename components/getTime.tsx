"use client";

const getTime = () => {

    const now = new Date();

    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
    <span>{time}</span>
  )
}

export default getTime;
