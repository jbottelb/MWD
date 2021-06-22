import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getUsers } from "./users.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    return getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  // when we get to authentification, this will be a login page
  // for now its a list of the example voter forms.

  // When we do routing, I will do this differently,
  // for now there will just a a from displayed below as an example

  return html`
    <form action="../voter.html">
      <select name="users" id="users" form="userform">
        ${users.map(
          (user) => html`<option value="${user.user}">${user.user}</option>`
        )}
      </select>

      <input type="submit" value="Submit" />
    </form>
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
