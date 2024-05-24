import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Schema["Todo"]["type"][]>([]);

  const fetchTodos = async () => {
    const { data: items } = await client.models.Todo.list();
    setTodos(items);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    const sub = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        setTodos([...items]);
      },
    });

    return () => sub.unsubscribe();
  }, []);

  const createTodo = async () => {
    await client.models.Todo.create({
      content: window.prompt("Todo content?"),
      isDone: false,
    });
    // no more manual refetchTodos required!
    // - fetchTodos()
  };
  return (

      <Authenticator>
          {({ signOut, user }) => (
              <main>
                <h1>{user?.signInDetails?.loginId}'s todos</h1>
                <button onClick={createTodo}>Add new todo</button>
                <ul>
                  {todos.map(({id, content}) => (
                      <li key={id}>{content}</li>
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
