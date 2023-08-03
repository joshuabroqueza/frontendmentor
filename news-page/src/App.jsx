import { useState } from "react";

import news_icons from "./assets/logo.svg";
import hamburger_icon from "./assets/icon-menu.svg";
import hamburger_close from "./assets/icon-menu-close.svg";

import hero_img from "./assets/image-web-3-mobile.jpg";
import hero_img_desktop from "./assets/image-web-3-desktop.jpg";

import itemOne from "./assets/image-retro-pcs.jpg";
import itemTwo from "./assets/image-top-laptops.jpg";
import itemThree from "./assets/image-gaming-growth.jpg";

function App() {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleOpenNavBar = () => {
    console.log("open navbar");

    setOpenNavbar(!openNavbar);
  };

  const handleCloseNavBar = () => {
    console.log("close navbar");

    setOpenNavbar(!openNavbar);
  };

  return (
    <main className="md:px-16 md:py-14">
      <header className="flex flex-row justify-between items-center p-4">
        <div>
          <img src={news_icons} alt="news_icons" />
        </div>
        <div className="static">
          <div className="md:hidden">
            <button onClick={handleOpenNavBar}>
              <img src={hamburger_icon} alt="hamburger_icon" />
            </button>

            {openNavbar && (
              <div className="navbar_mobile bg-white h-screen border w-3/4 absolute top-0 right-0 flex flex-col">
                <button
                  onClick={handleCloseNavBar}
                  className="p-4 flex justify-end"
                >
                  <img src={hamburger_close} alt="hamburger_close" />
                </button>
                <div className="list_container">
                  <ul className="py-36 px-5">
                    <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                      Home
                    </li>
                    <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                      New
                    </li>
                    <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                      Popular
                    </li>
                    <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                      Trending
                    </li>
                    <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                      Categories
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="list_container hidden md:flex">
            <ul className="flex flex-row">
              <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                Home
              </li>
              <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                New
              </li>
              <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                Popular
              </li>
              <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                Trending
              </li>
              <li className="py-2 mx-2 cursor-pointer hover:drop-shadow-md hover:shadow-md px-3">
                Categories
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="px-4 md:grid md:grid-cols-2 md:space-x-4">
        <div className="mb-10">
          <div>
            <img className="md:hidden" src={hero_img} alt="hero_img" />
            <img
              className="hidden md:flex"
              src={hero_img_desktop}
              alt="hero_img_desktop"
            />
          </div>
          <div className="md:grid md:grid-cols-2 md:space-x-4">
            <h1 className="font-bold text-3xl md:text-5xl my-5 md:mr-10 border">
              The Bright Future of Web 3.0?
            </h1>
            <div className="">
              <p className="text-slate-500 my-5">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-7 py-3 text-white bg-light-vermillion/90 tracking-widest my-5">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="bg-dark-space-blue p-4">
          <h1 className="text-yellow font-bold text-3xl">New</h1>
          <div className="text-white border-b-[1px] border-slate-400 py-4">
            <h3 className="font-semibold text-xl my-2">
              Hydrogen VS Electric Cars
            </h3>
            <p className="text-slate-400">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>

          <div className="text-white border-b-[1px] border-slate-400 py-4">
            <h3 className="font-semibold text-xl my-2">
              The Downsides of AI Artistry
            </h3>
            <p className="text-slate-400">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="text-white  py-4">
            <h3 className="font-semibold text-xl my-2">
              Is VC Funding Drying Up?
            </h3>
            <p className="text-slate-400">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:flex md:flex-row">
        <div className="flex flex-row my-5 md:max-h-[129px]">
          <div>
            <img className="max-w-[100px]" src={itemOne} alt="itemOne" />
          </div>
          <div className="px-5 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-slate-400">01</h1>
            <h3 className="font-bold my-1 text-lg">Reviving Retro PCs</h3>
            <p className="text-slate-700 text-sm">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex flex-row my-5 md:max-h-[129px]">
          <div>
            <img
              className="max-w-[100px] max-h-[129]"
              src={itemTwo}
              alt="itemOitemTwone"
            />
          </div>
          <div className="px-5 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-slate-400">02</h1>
            <h3 className="font-bold my-1 text-lg">Top 10 Laptops of 2022</h3>
            <p className="text-slate-700">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>

        <div className="flex flex-row my-5 md:max-h-[129px]">
          <div>
            <img
              className="max-w-[100px] max-h-[129]"
              src={itemThree}
              alt="itemThree"
            />
          </div>
          <div className="px-5 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-slate-400">03</h1>
            <h3 className="font-bold my-1 text-lg">The Growth of Gaming</h3>
            <p className="text-slate-700">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
