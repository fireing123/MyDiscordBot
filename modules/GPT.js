import { OpenAIApi, Configuration } from 'openai';
import { config } from 'dotenv'; config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const ChatCompletion = (prompt) => {
    return new Promise(resolve => {
        openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: chat}]
        }).then(res => {
          resolve(chat + "\n" + res.data.choices[0].text)
        });
      });
};

const Completion = (prompt, max_token = 50, temperature = 0.9, top_p = 1, frequency_penalty = 0.0, presence_penalty = 0.6, stop) => {
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