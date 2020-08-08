import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <Link to="/"><div><h3>Back</h3></div></Link>
            <h1>Work</h1>
        </div>
    );
}