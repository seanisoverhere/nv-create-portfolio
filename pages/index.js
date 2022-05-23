import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex items-center">
        <div className="w-1/2 lg:block hidden">{/* Hero image here */}</div>
        <div className="text-center w-full">
          {/* Place your links here */}

          {/* End of Links */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
