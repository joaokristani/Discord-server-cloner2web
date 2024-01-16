import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-base-100">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Inicio</a></li>
                <li><a>Tutorial básico</a></li>
                <li><a>Erros</a></li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a href="/"className="btn btn-ghost text-xl">DSC2</a>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-center md:ms-5 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5264e2] to-[#00abbb] mt-20">
          <span>Discord Server Cloner 2</span>
        </h1>
        <h3 className="text-lg text-gray-400">By Infinite Community</h3>
        <Analytics />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 m">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 animate-pulse"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M11.9997 7V9M17.3323 16.0111L17.8121 8.81381C17.8191 8.70864 17.8226 8.65605 17.8249 8.60643C17.9006 6.98713 17.1865 5.43164 15.9092 4.43342C15.8701 4.40283 15.8279 4.37121 15.7436 4.30797C15.6065 4.20511 15.5379 4.15368 15.475 4.10896C13.394 2.63035 10.6053 2.63035 8.52435 4.10896C8.46142 4.15368 8.39285 4.20511 8.2557 4.30797C8.17138 4.37121 8.12921 4.40283 8.09007 4.43342C6.8128 5.43164 6.09874 6.98713 6.17441 8.60643C6.17673 8.65605 6.18023 8.70864 6.18724 8.81381L6.66706 16.0111C6.85422 18.8185 9.18601 21 11.9997 21C14.8133 21 17.1451 18.8185 17.3323 16.0111Z" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      
    </div>
  );
};
