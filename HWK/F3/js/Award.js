import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { Candidate } from "./Candidate.js";

// creates a selector for each award 
// (Parent of Canditate)
export function Award({ name, options }) {
  return html`
  <select name="${name}" id="${name}" form="userform">
  ${options.map(
    (candidate) => 
    html `
    <${Candidate} name=${candidate.name}/>
    `
  )}</select>
  `;
}