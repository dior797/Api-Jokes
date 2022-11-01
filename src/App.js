import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
    const [catagories, setCatagories] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        const url = "https://api.chucknorris.io/jokes/random";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setCatagories(json.catagories);
                setValue(json.value);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className= "text">
            {catagories}
            {value}
            <br></br>
            <a href={value}>
            <button>Reset</button>
            </a>
        </div>
    );
};

export default App;
