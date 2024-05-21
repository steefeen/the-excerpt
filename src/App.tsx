import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const client = generateClient<Schema>();

function App() {
  const [posts, setPosts] = useState<Array<Schema["Post"]["type"]>>([]);

  useEffect(() => {
    client.models.Post.list().then((res) => setPosts(res.data));
  }, []);

  function createTodo() {
    const name = prompt("Enter a name for the new todo");
    client.models.Post.create({
        title: name === null ? "Untitled" : name,
    });
  }

  function deleteTodo(id: string) {
    client.models.Post.delete({id: id});
  }

  return (

      <Authenticator>
          {({ signOut, user }) => (
              <main>
                <h1>{user?.signInDetails?.loginId}'s todos</h1>
                <button onClick={createTodo}>+ new</button>
                <ul>
                  {posts.map((post) => (
                      <li key={post.id} onClick={() => deleteTodo(post.id)}>{post.title}</li>
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
