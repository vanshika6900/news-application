import React, { useState, useEffect } from "react";
import "./Content.css";
import NewsData from "./NewsData";
// import jwm from "../assets/jwm.jpg";
function Content() {
  // const date = new Date().toLocaleDateString();
  const [moviesNewsData, setMoviesNewsData] = useState([]);
  const [appleNewsData, setAppleNewsData] = useState([]);
  const [busNewsData, setBusNewsData] = useState([]);
  const [isVisibleModal,setIsVisibleModal] = useState(false)

  const DateUpdate = (e) =>{
    const dat = new Date(e);
    return `${dat.getDate()}-${dat.getMonth()}-${dat.getFullYear()}`;
  }

  useEffect(() => {
    async function dataFetchMethod() {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=movies&apiKey=f46396e98dc9464aac982d018005876e"
      );
      const resposnse = await res.json();
      setMoviesNewsData(resposnse.articles.splice(0, 6));
      console.log(resposnse.articles.splice(0, 6));
    }

    async function trendFetchMethod(){
        const res = await fetch("https://newsapi.org/v2/everything?q=trending&apiKey=f46396e98dc9464aac982d018005876e");
        const response = await res.json();
        setAppleNewsData(response.articles.splice(0,9));
        console.log(response.articles.splice(0,9));

    }

    async function busFetchMethod(){
        const res = await fetch("https://newsapi.org/v2/everything?q=trending&apiKey=f46396e98dc9464aac982d018005876e");
        const response = await res.json();
        setBusNewsData(response.articles.splice(0,24));
        console.log(response.articles.splice(0,24));

    }
    trendFetchMethod();
    busFetchMethod()
    dataFetchMethod();
  }, []);

  return (
    <>
      <div className="main-div">
        <div className="child-div movie">
          <div className="headingg1">Movies </div>
          {moviesNewsData.map((element, index) => (
            <div className="outer" key={index}>
              <div className="inside pic">
                <img src={element.urlToImage} alt="" className="imag" />
                <span className="headingg2">{element.author}</span>
              </div>
              <div>
                <div className="px-2 py-2">{DateUpdate(element.publishedAt)}</div>
                <h4 className=" px-3 py-3 titl">{element.title}</h4>
                <div className="px-3 pb-2">
                  {element.description.slice(0, 500)}
                </div>
                <button className="mx-3 mb-3 butn">Continue Reading</button>
              </div>
            </div>
          ))}
        </div>

        <div className="child-div">
          <div className="headingg1">Trending </div>
          {appleNewsData.map((element, index) => (
          <div className="outer outer3" key={index} >
            <div className="divide" >
              <div className="inside2 mx-3">
                <span className="headingg px-2">{element.author.slice(0,15)}</span>
                {/* <img src={jwm} alt="" className="imag" /> */}
                <span> {DateUpdate(element.publishedAt)}</span>
              </div>
              <h4 className="mx-3 my-3 titl">{element.title.slice(0,50)}</h4>
              <div className="px-3">
              {element.description.slice(0, 500)}
              </div>
              <button className="mx-3 my-2 butn">Continue Reading</button>
            </div>
            

            {/* <div className="divide">
              <div className="inside2 px-3">
                <span className="headingg px-2">Jab We Met</span>
                <img src={jwm} alt="" className="imag" />
                <span> 3 Jan,2023</span>
                </div>
              <h4 className="mx-3 text-center my-3 titl">The Trending       
              News</h4>
              <div className="px-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Saepe
                sapiente, cumque animi nostrum qui quasi nam. Hic minus
                cupiditate, iste deserunt eveniet eum ducimus aperiam officia
                explicabo optio nulla commodi!
              </div>
              <button className="mx-3 my-2 butn">Continue Reading</button>
            </div> */}
          </div>
            ))}
        </div>

        <div className="child-div">
          <div className="headingg1">Most Read News </div>
          {busNewsData.map((element, index) => (
          <div className="outer outer2 " key = {index}>
            {/* <div className="third"> */}
            <div className="third1">
              <div className="third11">
                {/* <div className="third111">
                  <span className="headingg px-2">{element.author}</span>
                  <span className="mx-2">{DateUpdate(element.publishedAt)}</span>
                </div> */}
                <div className="my-1">{element.description.slice(0, 50)} 
                </div>
                {/* <div className="my-1">{element.description.slice(0, 20)} 
                 </div> */}
                <button className="my-2 butn" onClick={() => {setIsVisibleModal(true)}}>Continue reading</button>
              </div>
              <div className="third12">
                <img src={element.urlToImage} alt="" className="imag" />
              </div>
            </div>
            {/* </div> */}

            {/* <div className="third"> */}
            {/* <div className="third1">
              <div className="third11">
                <div className="third111">
                  <span className="headingg px-2">Category</span>
                  <span className="mx-2">3 Jan,2023</span>
                </div>

                <div className="my-1">Lorem ipsum dolor sit.</div>
                <div className="my-1">Lorem ipsum dolor sit.</div>
                <button className="my-2 butn">Continue reading</button>
              </div>
              <div className="third11">
                <img src={jwm} alt="" className="imag" />
              </div>
            </div> */}
            {/* </div> */}

            {/* <div className="third"> */}
            {/* <div className="third1">
              <div className="third11">
                <div className="third111">
                  <span className="headingg px-2">Category</span>
                  <span className="mx-2">3 Jan,2023</span>
                </div>
                <div className="my-1">Lorem ipsum dolor sit.</div>
                <div className="my-1">Lorem ipsum dolor sit.</div>
                <button className="my-2 butn">Continue reading</button>
              </div>
              <div className="third11">
                <img src={jwm} alt="" className="imag" />
              </div>
            </div> */}
            {/* </div> */}
          </div>
           ))}
        </div>
      </div>
      <NewsData isVisible={isVisibleModal} setIsVisible = {setIsVisibleModal} />
    </>
  );
}

export default Content;
