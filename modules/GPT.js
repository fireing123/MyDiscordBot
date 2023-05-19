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

const Completion = (prompt, max_token, temperature, top_p, frequency_penalty, presence_penalty, stop) => {
    return new Promise(resolve => {
        openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: max_token,
            temperature: temperature,
            top_p: top_p,
            frequency_penalty: frequency_penalty,
            presence_penalty:presence_penalty,
            stop: stop
          }).then(res => {
            resolve(prompt +"\n"+ res.data.choices[0].text)
          });
    });
};

export { ChatCompletion, Completion };