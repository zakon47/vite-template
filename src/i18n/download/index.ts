import axios, { AxiosError } from 'axios';
// import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// @ts-ignore
import { ns } from '../vars.js';

// dotenv.config();

type Settings = {
  i18n: {
    languages: string[];
  };
  ns: string[];
};

const settings: Settings = {
  // Пример настройки, вставьте ваш реальный конфиг
  i18n: {
    languages: ['en', 'ru'],
  },
  ns,
};

async function downloadLang(
  apiKey: string,
  nsName: string,
  language: string,
): Promise<void> {
  try {
    const url = `https://api.i18nexus.com/project_resources/translations/${language}/${nsName}.json?api_key=${apiKey}`;

    const response = await axios.get(url, {
      responseType: 'stream',
    });

    const dir = path.resolve('./public/locales/', language);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filename = nsName + '.json';
    const filePath = path.resolve(dir, filename);

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    console.log(`The file: ${filename} has been downloaded successfully.`);
  } catch (error) {
    const err = error as AxiosError;
    console.error(`An error occurred: ${err.message}`);
  }
}

async function downloadAll(apiKey: string): Promise<void> {
  for (const lang of settings.i18n.languages) {
    for (const nsName of settings.ns) {
      await downloadLang(apiKey, nsName, lang);
    }
  }
}
(async () => {
  // const apiKey = process.env.I18NEXUS_API_KEY
  // if(!apiKey) throw new Error("I18NEXUS_API_KEY is not found")
  // await downloadAll(apiKey);
})();
