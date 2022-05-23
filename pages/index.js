import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <div className="w-1/2 lg:block hidden">
          {/* Hero image here */}
          <img />
        </div>
        <div className="text-center w-full">
          <img className="w-40 mx-auto" />
          <div className="py-4">
            {/* Your Name */}
          </div>
          <div className="pb-4">
            {/* Your Description */}
          </div>
          <div className="text-lg text-blue-500">
            {/* Place your links here */}
            {/* <a
              href="https://www.linkedin.com/in/sean-choon"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a> */}
            {/* <span className="text-black dark:text-white"> | </span> */}
            {/* End of Links */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
