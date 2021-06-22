import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getUsers } from "./users.js";

function viewer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  // Display a voting page
  // Once again, once we learn routing I can do this a lot better
  // and specific forms will be displayed
  // the form will also have a vote action when a server exists

  return html`
  ${users.map(
    (user) => 
    html ` <h2>${user.user}</h2>
    <form action="">
    ${user.data.map(
      (award) => html `<p>${award.award}</p>
      <select name="${award.award}" id="${award.award}" form="userform">
      ${award.canidates.map(
        (canidate) => 
        html `
        <option value="${canidate.name}">${canidate.name}</option>
        `
      
      )}</select>`
    )}
    <input type="submit" value="Submit" />
    </form>`
  )}
  `;
}

render(html` <${viewer} /> `, document.getElementById("component2"));
  
