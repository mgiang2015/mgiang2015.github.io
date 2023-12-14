import React from "react";
import userData from "@constants/data";
import { BoxedText } from "./BoxedText";

export default function AboutMe() {
  const techStack = [
    {
      name: "JavaScript",
      url: "https://abrudz.github.io/logos/JS.svg"
    }, {
      name: "Python",
      url: "https://abrudz.github.io/logos/Python.svg"
    }, {
      name: "Java",
      url: "https://abrudz.github.io/logos/Java.svg"      
    }, {
      name: "C++",
      url: "https://abrudz.github.io/logos/CPlusPlus.svg"      
    }, {
      name: "Go",
      url: "https://abrudz.github.io/logos/Go.svg"      
    }, {
      name: "Rust",
      url: "https://abrudz.github.io/logos/Rust.svg"      
    }, {
      name: "AWS",
      url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"      
    }, {
      name: "React",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"      
    }, {
      name: "PostgreSQL",
      url: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"      
    }, {
      name: "MongoDB",
      url: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"      
    }, 
  ]

  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-8xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-0 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold"
            style={{ lineHeight: "2em" }}
          >
            {userData.about.title}.
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any sort enquiry, please send me an{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{" "}
                and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                If you see me as a good fit, check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to discuss further.
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </div>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <div className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            
            <BoxedText color="red">
              <h1 className="text-3xl rounded-md px-2 py-1 inline-block font-bold">
                Tech Stack
              </h1>
            </BoxedText>
            <div className="flex flex-row flex-wrap mt-8">
              {
                techStack.map((tech) => {
                  return (
                    <img
                      src={tech.url}
                      key={tech.name}
                      className="h-20 w-20 mx-4 my-4"
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
