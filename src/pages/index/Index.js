import React, { useEffect, useState } from "react";
import './Index.css';
import axios from "axios";

const Index = () =>{
    const [url, setUrl] = useState('');
    const [cutUrl, setCutUrl] = useState('');
    const [getLinkUrl, setGetLinkUrl] = useState('');
    const [errorLink, setErrorLink] = useState(false);
    const [getPublicUrl] = useState(window.location.href);

    function handlerUrlValidetor(){
        let status = false;

        if(getLinkUrl.split('')[0] === '?' && getLinkUrl.length === 5){
            status = true;
        }

        setErrorLink(status);

        return status;
    };

    useEffect(() => {
        setGetLinkUrl(getPublicUrl.split("/")[3]);

        if(getLinkUrl.length > 0 && handlerUrlValidetor()){
            const formData = new FormData();
            formData.append("type", "getUrl");
            formData.append("cUrl", getLinkUrl);

            axios("https://andersonpadovani.com.br/crudSql/url.php", {
                method: 'POST',
                data: formData
           }).then(({data}) => {
                if(data["status"] === 200){
                    window.location.replace(data["url"])
                }
           })
        }
        
    })

    async function handlerCutLink(){
        try {
            new URL(url);
            await fetch(url, {mode: 'no-cors'}).then(async (data) => {
                const formData = new FormData();
                formData.append("type", "addUrl");
                formData.append("url", url);

                await axios("https://andersonpadovani.com.br/crudSql/url.php", {
                    method: 'POST',
                    data: formData
                }).then(({data}) => {
                    if(data['status'] === 200){
                        setCutUrl("http://cutbr.site/" + data["cUrl"]);
                    }
                });
            });
            
        } catch (error) {
            alert(`"${url}" inserida é invalida! `);            
        }
        
    }

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
                <form action="#">
                    <input id="inputUrl" type="text" required onChange={(event) => { setUrl(event.target.value)}}/>
                    <label htmlFor="inputUrl">URL</label>

                    <button onClick={ (e) => {
                        e.preventDefault();
                        handlerCutLink()
                    } }>ENCURTAR</button>
                </form>

                {cutUrl ? <div className="linkStatus">
                    <span>A pagina <strong><a href={url}>{url}</a></strong>!<br/>Já está disponivel e poode ser acessada pelo nosso <br/>Link: <strong><a href={cutUrl}>{cutUrl}</a></strong></span>
                </div> : ''}
                
            </section>

            {errorLink === true ? <div className="errorLink">
                <span>Endereço: <strong>{getPublicUrl}</strong> não exite ou está desativado!</span>
            </div> : ''}

            <footer>

            </footer>
        </div>
    )
};

export default Index;