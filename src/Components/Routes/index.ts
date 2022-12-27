export { default as GlobalRoutes } from "./GlobalRoutes";
export type Navigation = {
    cookie: {
        name: string;
        value: string;
    };
    route: string;
}

export enum AllowedDomainType {
    development = "http://localhost:8082",
    production = "https://poc-iframe-app-shell.vercel.app"
}

export const AllowedDomains = [
    "http://localhost:8082",
    "https://poc-iframe-app-shell.vercel.app"
]