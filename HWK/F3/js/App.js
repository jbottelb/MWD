import {
  html,
  render,
  useState,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getUsers } from "./users.js";
import { Header } from "./Header.js";

function App() {
  // create 2 users arrays and add them to the state using the useState hook
  // Note: typically 2 variables are added in state because
  // state is immutable
  const [users, setUsers] = useState([]);

  // the useEffect hook is used here to load user data asynchronously
  // we will discuss async data in class, for now you can utilize the pattern
  useEffect(() => {
    return getUsers().then((data) => {
      setUsers(data);
    });
  });

  return html`
  ${users}
  <${Header} title="User List">
    The following is a list of users:
  </${Header}>
    <ul>
      ${users.map(
        (user) =>
          html` <li key="${user}" class="test">
            ${user.user}
          </li>`
      )}
    </ul>
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
