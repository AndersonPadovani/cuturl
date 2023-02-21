import React from "react";
import './Index.css';

const Index = () =>{
    return(
        <div className="container">
            <section className="menu">
                <img src="#" alt="Imagen Logo CutUrl" />

                <ul>
                    <li key='1'><a href="/#">ENCURTAR</a></li>
                    <li key='2S'><a href="/#)">REGISTRAR/LOGIN</a></li>
                </ul>

            </section>
            
            <section className="mid">
                <div className="cut">
                    <label className="_label" htmlFor='url'>url</label>
                    <input className="_input" id="url" type='text'></input>

                    <button>Encurtar</button>
                </div>

                <div className="cuted">

                </div>
            </section>

            <footer>

            </footer>
        </div>
    )
};

export default Index;