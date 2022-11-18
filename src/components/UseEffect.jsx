import { useEffect, useState } from "react";


const UseEffect = () => {
    const [isFetching, setFetching] = useState(false);
    const [data, setData] = useState(null);

    const [count, setCount] = useState(0);


    useEffect(() => {
        async function fetchData() {
            if(isFetching) {return};
            setFetching(() => {true});
        
            console.log("We are running this function");
        
            // Doing the fetching in here
            const response = await fetch("www.example.api.com");
            const data = await response.json();
        
            // at the end set state
            setData(data);
        
            return () => {
                setFetching(() => {false});
            }
        };
        fetchData()
    }, []);

    return (
        <div>
            <h1>UseEffect</h1>
            <button
                onClick={() => {setCount((oldCount) => oldCount + 1)}}
            >
                Rerender
            </button>
        </div>
    );
};

export default UseEffect;