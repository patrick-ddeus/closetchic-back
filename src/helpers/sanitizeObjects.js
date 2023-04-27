import { stripHtml } from "string-strip-html";

export default function sanitizeObjects(obj) {
    for (const [key, data] of Object.entries(obj)) {
        obj[key] = stripHtml(data).result;
    }
    return obj;
}