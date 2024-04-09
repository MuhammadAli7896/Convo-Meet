"use client";

const getDate = () => {

    const now = new Date();

    const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

    return (
        <span>{date}</span>
    )
}

export default getDate;