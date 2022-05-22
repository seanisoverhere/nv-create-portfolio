import React from "react";
import Layout from "../components/Layout";

const Work = () => {
  return (
    <Layout>
      <div className="text-4xl text-center font-semibold pb-24">My Work</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/heartcode.png"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project HeartCode
          </p>
          <p>
            Community service project that provide less privileged youths the
            opportunity to explore their interest in IT through solving real
            world problems with IT innovations.
          </p>
        </div>
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project 2
          </p>
          <p>Sample Description of Project</p>
        </div>
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project 3
          </p>
          <p>Sample Description of Project</p>
        </div>
        <div>
          <a
            href="https://heartcode.scis.smu.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover w-full h-80 mb-6 rounded"
              src="/placeholder.jpeg"
              alt="Project HeartCode"
            />
          </a>
          <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Project 4
          </p>
          <p>Sample Description of Project</p>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
