import React from "react";
import './Index.css';

const Index = () =>{

    return(
        <div className="container">
            <section className="menu">
                <img src={require('../../img/logo.png')} alt="Imagen Logo CutUrl" />

                <ul>
                    <li key='1'><a href="/#">ENCURTAR</a></li>
                    <li key='2S'><a href="/#)">REGISTRAR/LOGIN</a></li>
                </ul>

            </section>
            
            <section className="mid">
                <form action="">
                    <input id="inputUrl" type="text" required/>
                    <label htmlFor="inputUrl">URL</label>

                    <button>ENCURTAR</button>
                </form>
                
            </section>

            <footer>

            </footer>
        </div>
    )
};

export default Index;