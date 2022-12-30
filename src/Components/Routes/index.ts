export { default as GlobalRoutes } from "./GlobalRoutes";
export type Navigation = {
    cookie: {
        name: string;
        value: string;
    };
    route: string;
}

export enum AllowedDomainType {
    development = "https://localhost:8082",
    production = "https://poc-iframe-app-shell.vercel.app"
}

export const AllowedDomains = [
    "https://localhost:8082",
    "https://poc-iframe-app-shell.vercel.app"
]