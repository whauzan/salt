import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environtment } from "src/environtments/environtment.prod";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config')

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environtment.apiEndpoint
}