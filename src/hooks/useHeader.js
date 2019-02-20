import { createElement } from "react";

export function useHeader(text, level = 1) {
  return createElement(`h${level}`, null, text);
}
