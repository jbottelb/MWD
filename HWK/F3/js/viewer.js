import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getUsers } from "./users.js";
import { UserForm } from "./UserForm.js";


// Gets users data and displays a form with all the options for each
function viewer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  // Display a voting page
  // Once again, once we learn routing I can do this a lot better
  // and specific forms will be displayed. 
  // the form will also have a vote action when a server exists
  // The submit button will eventually update the votes

  return html`
  ${users.map(
    (user) => 
    html ` <h2>${user.user}</h2>
    <${UserForm} userData=${user.data} />
    `
  )}
  `;
}

render(html` <${viewer} /> `, document.getElementById("component2"));