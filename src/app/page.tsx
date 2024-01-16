import './style.css';
import { Analytics } from '@vercel/analytics/react';
import 'tailwindcss/tailwind.css';
export default function Home() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href='https://github.com/joaokristani?tab=repositories'>DSC2</a>
        </div>
        <a tabIndex={0} className="btn btn-ghost btn-circle" href='https://github.com/joaokristani?tab=repositories'>
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path className="tail-icon" d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </div>
        </a>
        <a tabIndex={0} className="btn btn-ghost btn-circle" href='https://discord.com/invite/infinite-community-1014921352500756500'>
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
          </div>
        </a>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  Seções
                </summary>
                <ul className="p-2 bg-base-100">
                  <li><a href="/wiki">Wiki Cloner</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-center md:ms-5 text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5264e2] to-[#00abbb]">
          <span>Discord Server Cloner 2</span>
        </h1>
        <h3 className="text-lg text-gray-400">By Infinite Community</h3>
        <div className="flex">
          <a className="button2 bg-neutral mt-2 text-white rounded-full transition ease-in-out hover:scale-110 duration-500" href="https://discord.gg/infinite-community-1014921352500756500">Discord Link</a>
          <a href="#cloner" className="button2 bg-neutral text-white mt-2 ml-5 rounded-full flex items-center transition ease-in-out hover:scale-110 duration-500">
            Download
            <svg
              className="ml-2"
              width="16"
              height="16"
              viewBox="0 0 192 192"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" clipPath="url(#a)">
                <path d="m30 104 66 66 66-66m-66 52V22" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#ffffff" d="M0 0h192v192H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <div className="modal" id="cloner">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Version</h3>
              <a className="link link-hover text-sky-400 mt-2 ml-2" href='https://github.com/joaokristani/Discord-Server-Cloner-2x'>Discord Server Cloner V2 (New)</a>
              <p></p>
              <a className="link link-hover text-red-400 ml-2" href='https://github.com/joaokristani/discord-server-cloner'>Discord Server Cloner V1 (Legacy)</a>
              <div className="modal-action">
                <a href="#" className="btn btn-neutral">Close</a>
              </div>

            </div>

          </div>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
