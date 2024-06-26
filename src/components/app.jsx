import React, {useState} from 'react';

function App(){
    
    const [count, setCount] = useState(0);

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count - 1);
    }

    return(
        <div className='container'>
            <h1 className='counter'>{count}</h1>
            <div>
                <button onClick={increase} className='counter-btn'>+</button>
                <button onClick={decrease} className='counter-btn'>-</button>
            </div>
        </div>
    )
}

export default App;