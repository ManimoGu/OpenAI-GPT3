import React from 'react'
import openai from "../helpers/configuration";

import { useState } from "react";

const Dall = () => {

    const [loading, setloading] = useState(false);
    const [result, setResult] = useState("");
    const [prompt, setPrompt] = useState("");
  
    const handelClick = async () => {
      setloading(true);
  
      try {
        const response = await openai.createImage(
          {
            prompt : prompt,
            n : 1,
            size : "1024x1024"
  
          }
         
        );
  
         setResult(response.data.data[0].url) ;
        console.log(result)
      } catch (error) {
        console.log(error);
      }
  
      setloading(false);
    };

  return (
    <div className='main'>
        
      <div className="w-2/4 max-auto">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write your prompt"
          className="textarea"
        ></textarea>

        <button
          className="btn"
          onClick={handelClick}
          disabled={loading || prompt.length === 0}
        >
          {loading ? "Generating.." : "Generate"}
        </button>

        <img src={result} alt="" />
      </div>
    </div>
  )
}

export default Dall