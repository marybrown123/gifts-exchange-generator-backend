interface Options {
    HOST: string,
    USER: string,
    PASSWORD: string,
    DB: string,
    dialect: "postgres" | "mysql" | "sqlite"
}

const options: Options = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Pchelka123.",
    DB: "prezenty",
    dialect: "postgres",
}

export default options;