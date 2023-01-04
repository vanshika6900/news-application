import React from "react";
import "./Content.css";
import jwm from "../assets/jwm.jpg";
function Content() {
  return (
    <>
      <div className="main-div">
        <div className="child-div movie">
          <div className="headingg1">Movies {">"}</div>
          <div className="outer">
            <div className="inside pic">
              <img src={jwm} alt="" className="imag" />
              <span className="headingg2">Jab We Met</span>
            </div>
            <div>
              <div className="px-2 py-2">Jan 2,2023</div>
              <h4 className="text-center py-3">The Blockbuster Movie</h4>
              <div className="px-3 pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis explicabo consequatur corrupti ipsam, vel deserunt
                modi earum dolor! Labore beatae et temporibus autem quas nam
                porro exercitationem optio eaque quos.
              </div>
              <button className="mx-3 mb-3 butn">Continue Reading</button>
            </div>
          </div>
        </div>

        <div className="child-div">
          <div className="headingg1">Trending {">"}</div>
          <div className="outer">
            <div className="divide">
              <div className="inside2 px-3">
                <span className="headingg px-2">Jab We Met</span>
                {/* <img src={jwm} alt="" className="imag" /> */}
                <span> 3 Jan,2023</span>
              </div>
              <h4 className="mx-3 text-center my-3">The Trending News</h4>
              <div className="px-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                sapiente, cumque animi nostrum qui quasi nam. Hic minus
                cupiditate, iste deserunt eveniet eum ducimus aperiam officia
                explicabo optio nulla commodi!
              </div>
              <button className="mx-3 my-2 butn">Continue Reading</button>
            </div>
            <hr />
            <hr />

            <div className="divide">
              <div className="inside2 px-3">
                <span className="headingg px-2">Jab We Met</span>
                {/* <img src={jwm} alt="" className="imag" /> */}
                <span> 3 Jan,2023</span>
              </div>
              <h4 className="mx-3 text-center my-3">The Trending News</h4>
              <div className="px-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
                sapiente, cumque animi nostrum qui quasi nam. Hic minus
                cupiditate, iste deserunt eveniet eum ducimus aperiam officia
                explicabo optio nulla commodi!
              </div>
              <button className="mx-3 my-2 butn">Continue Reading</button>
            </div>
          </div>
        </div>

        <div className="child-div">
          <div className="headingg1">Movies {">"}</div>
          <div className="outer">
            <div className="third">
              <div className="third1">
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
              </div>
            </div>

            <div className="third">
              <div className="third1">
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
              </div>
            </div>

            <div className="third">
              <div className="third1">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
