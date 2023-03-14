interface Options {
    HOST: string,
    USER: string,
    PASSWORD: string,
    DB: string,
    dialect: "postgres" | "mysql" | "sqlite"
}

const options: Options = {
    HOST: process.env.HOST || "localhost",
    USER: process.env.USER || "postgres",
    PASSWORD: process.env.PASSWORD || "Pchelka123.",
    DB: process.env.DB || "prezenty",
    dialect: "postgres",
}

export default options;