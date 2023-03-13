import { Configuration, OpenAIApi } from "openai";
import "./App.css";
import { useState } from "react";

function App() {
  // const configuration = new Configuration({
  //   apiKey: process.env.Openai_Key,
  // });

  // const openai = new OpenAIApi(configuration);

  const [loading, setloading] = useState(false);
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  

  const handelClick = async () => {
    setloading(true);
    try {

      const requestinfo = {
        method : "POST",
        headers :{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + "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"

        },
        body : JSON.stringify({
          model: "text-davinci-003",
          prompt: prompt,
          temperature: 0.5,
          max_tokens: 100,
        })
      }

      const response = await fetch("https://api.openai.com/v1/completions", requestinfo)
      const data = await response.json()
     
        
      setResult(data.choices[0].text) 
       
    } catch (error) {
      console.error(error);
    }

    setloading(false);
  };

  return (
    <main className="main">
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

        <button className="btn" onClick={handelClick} disabled={loading || prompt.length === 0}>
           {loading ? "Generating.." : "Generate"}
        </button>

        <pre className="result">{result}</pre>

      </div>
    </main>
  );
}

export default App;
