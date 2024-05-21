import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Team"]["type"]>>([]);

  useEffect(() => {
    client.models.Team.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    const name = prompt("Enter a name for the new todo");
    client.models.Team.create({
      name: name === null ? "Untitled" : name,
    });
  }

  function deleteTodo(id: string) {
    client.models.Team.delete({id: id});
  }

  return (

      <Authenticator>
          {({ signOut, user }) => (
              <main>
                <h1>{user?.signInDetails?.loginId}'s todos</h1>
                <button onClick={createTodo}>+ new</button>
                <ul>
                  {todos.map((todo) => (
                      <li key={todo.id} onClick={() => deleteTodo(todo.id)}>{todo.name}</li>
                  ))}
                </ul>
                <div>
                  🥳 App successfully hosted. Try creating a new todo.
                  <br/>
                  <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
                    Review next step of this tutorial.
                  </a>
                </div>
                <button onClick={signOut}>Sign out</button>
              </main>

          )}
      </Authenticator>
  );
}

export default App;