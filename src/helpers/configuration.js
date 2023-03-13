import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  export default openai