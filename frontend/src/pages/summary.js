import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";

const Summary = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [geminiResponse, setGeminiResponse] = useState(null); // State to hold Gemini response
  const [loading, setLoading] = useState(false); // State to indicate loading

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file); // Log selected file
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      setLoading(true); // Start loading
      try {
        const response = await axios.post("http://localhost:8080/upload2", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("File uploaded and processed successfully:", response.data);
        setGeminiResponse(response.data.geminiResponse); // Set Gemini response to state
        console.log(response.data.geminiResponse)
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div>
      <Layout>
        <h1>Financial Summary </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label">
              Small file input example
            </label>
            <input
              className="form-control form-control-sm w-25"
              id="formFileSm"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {loading && <p>Loading...</p>} {/* Show loading indicator */}
        
        {geminiResponse && (
  <div className="mt-4 w-100 justify-content">
    <div dangerouslySetInnerHTML={{ __html: geminiResponse }} />
  </div>
)}
      </Layout>
    </div>
  );
};

export default Summary;
