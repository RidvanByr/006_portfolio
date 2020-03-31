import React from 'react';
import { Link } from 'react-router-dom';


function Page404() {
    return (
        <div>
            <h1>404 PAGE NOT FOUND</h1>
            <Link to="/">Back to home page.</Link>
        </div>
    )
}

export default Page404
