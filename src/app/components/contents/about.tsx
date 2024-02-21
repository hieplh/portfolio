import Link from "next/link";
import style from "@/app/components/contents/style.module.scss";
import * as fileHelper from "@/app/utils/FileHelper";

export default async function About() {
  const videos = await fileHelper.readDir("/video");
  return (
    <div id="about" className={`${style.about} my-2`}>
      <h4 className="text-gray-400">WHO I AM</h4>
      <p>
        I am a young boy who has strong passion with games, especially which
        games has solo mode. Therefore, I have learned and developed patient and
        self-searching skills.
      </p>
      <p>
        I am a backend developer and I have a burning passion in work as well.
        At work, I have my own discipline, like to share and be shared.
      </p>
      <p>
        For me, programming language is just a programming language. I am
        willing to study which any language is support for my hobby, purpose.
      </p>
      <p className={style["gradient-text"]}>
        Code for Food! Code for Money!! Code for Life!!!
      </p>

      <div className="w-full flex flex-row justify-center">
        {videos && (
          <video
            src={"/video/" + videos[Math.floor(Math.random() * videos.length)]}
            playsInline
            controls
          />
        )}
      </div>

      <br />
      <h4 className="text-gray-400">HOW MY EDUCATION</h4>
      <p>
        Sep 2022 - Now:{" "}
        <Link href="https://fsb.edu.vn/" style={{ color: "#0066cc" }}>
          FSB HCM
        </Link>{" "}
        - Master Software Engineering
      </p>
      <p>
        Nov 2016 - Jan 2021:{" "}
        <Link href="https://daihoc.fpt.edu.vn/" style={{ color: "#0066cc" }}>
          FPT HCM University
        </Link>{" "}
        - Bachelor Software Engineering
      </p>

      <br />
      <h4 className="text-gray-400">WHAT IS MY SKILLS</h4>
      <p>
        <span className="font-bold">Programming Language: </span>
        Java, PHP, NodeJS - ReactJS, NextJS, ExpressJS
      </p>
      <p>
        <span className="font-bold">Database: </span>
        Mssql, Mysql, Postgres DB, Oracle DB
      </p>
      <p>
        <span className="font-bold">Technique: </span>
        <br /> &nbsp;&nbsp; FE: Html, Css, Scss, Javascript, Typescript, Mui,
        Tailwind
        <br /> &nbsp;&nbsp; BE: Springboot, Spring Security, JPA - Hibernate,
        AspectJ, Swagger
        <br /> &nbsp;&nbsp; DevOps: Heroku, Vercel
        <br /> &nbsp;&nbsp; Services: Google Api Cloud
      </p>
    </div>
  );
}
