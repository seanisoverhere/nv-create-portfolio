import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <div className="w-1/2 lg:block hidden">
          {/* Hero image here */}
          <img src="/hero.jpg" alt="Plant" />
        </div>
        <div className="text-center w-full">
          <img src="/profile_male.png" alt="Avatar" className="w-40 mx-auto" />
          <div className="text-6xl font-semibold py-4">Sean Choon</div>
          <div className="text-2xl pb-4">Frontend Developer from Singapore</div>
          <div className="text-lg text-blue-500">
            {/* Place your links here */}
            <a
              href="https://www.linkedin.com/in/sean-choon"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>
            <span className="text-black dark:text-white"> | </span>
            <a
              href="https://github.com/seanisoverhere"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            {/* End of Links */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
