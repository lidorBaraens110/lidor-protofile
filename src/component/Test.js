import React, { useRef, useState } from 'react';


const Test = () => {

    const bodyRef = useRef();

    const focusBody = () => {
        bodyRef.current.scrollIntoView()
    }
    return <div>
        <div style={{ height: '800px', backgroundColor: 'red' }}>
            <button onClick={focusBody}>click</button>
        </div>
        <div ref={bodyRef} style={{ height: "1000px", backgroundColor: 'yellow' }}>
            <input />
            hello
        </div>

    </div>
}

export default Test