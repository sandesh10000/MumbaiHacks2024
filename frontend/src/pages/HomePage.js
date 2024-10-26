import React from "react";
import Layout from "../components/Layout";

const HomePage = () => {
  return (
    <>
    <div>
      <Layout >
      
    <header class="header">
        <h1>Welcome to Peppy.AI</h1>
    </header>

    {/* <!-- Main Content Section --> */}
    <main class="main-content container">
        <section>
            <h2>About Peppy.AI</h2>
            <p>Get ready to transform the financial industry with cutting-edge AI solutions! Peppy.AI brings together passionate developers, data scientists, and finance enthusiasts to tackle real-world challenges in finance using artificial intelligence. Our hackathon focuses on two high-impact functionalities designed to bring powerful insights to businesses, investors, and financial analysts.</p>
        </section>

        {/* <!-- Financial Document Summarizer Section --> */}
        <div class="feature-box">
            <h2><i class="fas fa-file-alt"></i> Financial Document Summarizer</h2>
            <p>Finance professionals handle vast amounts of data every day, from annual reports to investment analyses. Our <strong>Financial Document Summarizer</strong> streamlines this process by providing clear, concise summaries of critical financial documents. Using advanced NLP models, this tool captures essential figures, statistics, and conditions in a fraction of the time, ensuring analysts get all the important numbers and insights without combing through lengthy reports.</p>
            <ul>
                <li>Extracts and summarizes key numerical data, conditions, and financial metrics.</li>
                <li>Reduces document length by up to two-thirds while preserving critical details.</li>
                <li>Enables faster, more efficient decision-making in finance and investment.</li>
            </ul>
        </div>

        {/* <!-- Financial News Sentiment Analysis & Stock Predictor Section --> */}
        <div class="feature-box">
            <h2><i class="fas fa-chart-line"></i> Financial News Sentiment Analysis & Stock Predictor</h2>
            <p>Staying on top of financial news is essential, but how do you know which stories impact the market and which don’t? Our <strong>Financial News Sentiment Analysis & Stock Predictor</strong> tackles this challenge head-on. By analyzing recent financial news, this tool provides real-time sentiment analysis, gauging positive or negative market impact and forecasting potential stock performance.</p>
            <ul>
                <li>Analyzes financial news sentiment to highlight positive, neutral, or negative market trends.</li>
                <li>Provides real-time stock predictions based on news sentiment, helping investors make timely decisions.</li>
                <li>Offers an intuitive interface to track sentiment over time and monitor potential market moves.</li>
            </ul>
        </div>
    </main>

    {/* <!-- Footer Section --> */}
    <footer class="footer">
        <p>&copy; 2023 Peppy.AI | Empowering the Future of Finance with AI</p>
    </footer>

   

      </Layout>
    </div>
    </>
  );
};

export default HomePage;
