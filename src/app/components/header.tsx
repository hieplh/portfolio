'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const buttonClass = "mx-4 border-solid border-b-2";
const buttonStyle = {
  backgroundColor: "#020202",
};

export default function Header() {
  const router = useRouter();
  return (
    <div className="w-full flex-wrap">
      <div className="grid w-full justify-center relative">
        <p className="z-50 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-center text-6xl">
          <span className="text-3xl">Backend Developer</span> <br />
          Lê Hoàng Hiệp
        </p>
        <button className="cursor-default" onDoubleClick={() => router.push("/easter_egg")}>
          <Image
            src="/myself.jpg"
            alt="avatar"
            quality={100}
            width={700}
            height={700}
            style={{ width: "auto", height: "auto" }}
            className="justify-self-center"
            priority
          />
        </button>
      </div>
      {/* <div className="w-full flex flex-row justify-between mt-2"> */}
      <div className="w-full grid grid-cols-3 gap-3 mt-2 mx-auto justify-items-center">
        {/* Mail */}
        <div className="pl-4 flex flex-col justify-center overflow-hidden">
          <div className="flex flex-row justify-start">
            <button
              type="button"
              title=""
              data-te-ripple-init
              data-te-ripple-color="light"
              className="p-1 pointer-events-none rounded text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              style={{ backgroundColor: "#ea4335", width: "fit-content" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <span className="my-auto ml-1 text-wrap">
              hoanghieple0702@gmail.com
            </span>
          </div>
        </div>

        {/* Section */}
        <div className="flex flex-row justify-evenly overflow-hidden">
          <button style={buttonStyle} className={buttonClass}>
            <Link href="#about">About</Link>
          </button>
          <button style={buttonStyle} className={buttonClass}>
            <Link href="#projects">Projects</Link>
          </button>
          <button style={buttonStyle} className={buttonClass}>
            <Link href="#certificates">Certificates</Link>
          </button>
          <button style={buttonStyle} className={buttonClass}>
            <Link href="#contact">Contact</Link>
          </button>
        </div>

        {/* Social Platform */}
        <div className="overflow-hidden">
          <ul className="ml-auto flex items-center">
            <li className="mx-2">
              {/* Github */}
              <Link href="https://github.com/hieplh" target="_blank">
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  style={{ backgroundColor: "#333" }}
                  className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              </Link>
            </li>
            <li className="mx-2">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/hoanghiep.le.79"
                target="_blank"
              >
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#1877f2" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
              </Link>
            </li>
            <li className="mx-2">
              {/* Linkedin */}
              <Link
                href="https://www.linkedin.com/in/ho%C3%A0ng-hi%E1%BB%87p-l%C3%AA-194290170/"
                target="_blank"
              >
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: "#0077b5" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
