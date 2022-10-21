
import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import './Main.css';
import './Home.css';
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key ==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                     <img
                     id="bg1"
                     src="https://cdn.wallpapersafari.com/35/71/dIpaqK.jpg"/> 

                   
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><b>Press Enter</b></button>
                    </div>
                    <img src="https://img.freepik.com/free-photo/antique-book-shelf-vintage-background_53876-160404.jpg?w=2000" alt="" />
                     <h6>A room without books is like<br/> a body without a soul.</h6>
                    </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>

            <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </>
    )
}
export default Main;