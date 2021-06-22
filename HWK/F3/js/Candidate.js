import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export function Candidate({ name }) {
  return html`
    <option value="${name}">${name}</option>
  `;
}