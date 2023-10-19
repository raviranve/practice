import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <div>
            <h2>Hey! You are on home page</h2>
            <br/>
            <br/>
   
            <button type="button" class="btn">Basic</button>
            <button type="button" class="btn btn-default">Default</button>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-success">Success</button>
            <button type="button" class="btn btn-info">Info</button>
            <button type="button" class="btn btn-warning">Warning</button>
            <button type="button" class="btn btn-danger">Danger</button>

        </div>
    )
}

export default Home