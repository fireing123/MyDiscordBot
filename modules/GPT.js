import { OpenAIApi, Configuration } from 'openai';
import { config } from 'dotenv'; config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ChatCompletion = (chatList) => {
    return new Promise(resolve => {
        openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: chatList
        }).then(res => {
          resolve(res.data.choices[0].text)
        });
      });
};

const Completion = (JSON) => {
    return new Promise(resolve => {
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: JSON.prompt,
            max_tokens: JSON.max_token,
            temperature: JSON.temperature,
            top_p: JSON.top_p,
            frequency_penalty: JSON.frequency_penalty,
            presence_penalty: JSON.presence_penalty,
            stop: JSON.stop
          }).then(res => {
            console.log(JSON)
            resolve(JSON.prompt +"\n"+ res.data.choices[0].text)
          });
    });
};

export { ChatCompletion, Completion };