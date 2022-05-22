import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="text-6xl lg:text-8xl font-semibold py-32">
        <div className="py-4">I design & build</div>
        <div>web applications.</div>
      </div>
      <div className="text-4xl font-semibold">About Me</div>
      <div className="py-8 text-lg">
        {`Hi I'm Sean, I'm a final year student from Singapore Manangement
        University majoring in Information Systems.`}
      </div>
      <div>
        Here you write more about your experience. Include things such as:
        <br />
        1. Your professional experiences
        <br />
        2. Your hobby
        <br />
        3. An image of yourself
      </div>
    </Layout>
  );
};

export default About;
