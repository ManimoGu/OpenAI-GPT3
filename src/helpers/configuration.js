import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Openai_Key,
  });

  const openai = new OpenAIApi(configuration);

  export default openai