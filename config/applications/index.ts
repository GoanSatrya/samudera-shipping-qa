import app01 from "./app-01.js";
import app02 from "./app-02.js";
import app03 from "./app-03.js";
import app04 from "./app-04.js";
import app05 from "./app-05.js";
import app06 from "./app-06.js";
import type { AppId, AppConfig } from "../../framework/types/app-config.js";

export const APPLICATIONS: Record<AppId, AppConfig> = {
  "app-01": app01,
  "app-02": app02,
  "app-03": app03,
  "app-04": app04,
  "app-05": app05,
  "app-06": app06,
};
