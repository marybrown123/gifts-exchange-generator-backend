interface Options {
  HOST: string;
  USER: string;
  PASSWORD: string;
  DB: string;
  dialect: "postgres" | "mysql" | "sqlite";
}

const options: Options = {
  HOST: process.env.HOST!,
  USER: process.env.USER!,
  PASSWORD: process.env.PASSWORD!,
  DB: process.env.DB!,
  dialect: "postgres",
};

export default options;