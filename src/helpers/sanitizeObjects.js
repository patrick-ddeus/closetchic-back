import { stripHtml } from "string-strip-html";

export default function sanitizeObjects(obj) {
    for (const [key, data] of Object.entries(obj)) {
        if (typeof data !== "number") {
            obj[key] = stripHtml(data).result;
        }
    }
    return obj;
}