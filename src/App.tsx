import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import {Authenticator, Divider, ScrollView, SearchField,} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

import {Link, Outlet} from "react-router-dom";
import PostCreateForm from '../ui-components/PostCreateForm';

const client = generateClient<Schema>();

function App() {
  const [posts, setPosts] = useState<Array<Schema["Post"]["type"]>>([]);

  useEffect(() => {
    client.models.Post.list().then((res) => {
      setPosts(res.data)
    });
  }, []);

  useEffect(() => {
    const sub = client.models.Post.observeQuery().subscribe({
      next: ({ items }) => {
        setPosts([...items]);
      },
    });

    return () => sub.unsubscribe();
  }, []);


  return (

      <Authenticator>
          {({ signOut, user }) => (

              <>
                <div id="sidebar">
                  <h1>
                    <Link to={'user/' + user?.userId}>{user?.userId}</Link>
                    <button onClick={signOut}>Sign out</button>
                  </h1>

                  <div>
                    <SearchField
                        label="Search"
                        placeholder="Search here..."
                    />
                  </div>

                  <nav>
                  <ScrollView>

                    <ul>
                        {posts.map((post) => (
                          <li key={post.id}>
                            <Link to={`post/` + post.id}>{post.title}</Link>
                          </li>
                        ))}

                    </ul>

                    <div style={{height: "16px"}}></div>
                  </ScrollView>
                  </nav>

                  <Divider/>

                  <PostCreateForm/>
                </div>

                <div id="detail">
                  <Outlet />
                </div>

                {/*<section>*/}
                {/*  <SelectField*/}
                {/*      label="Select Post"*/}
                {/*      placeholder="Please select an option"*/}
                {/*      value={selectedPost?.id}*/}
                {/*      onChange={(e) => {*/}
                {/*        const {value} = e.target;*/}
                {/*        const post = posts.find((post) => post.id === value);*/}
                {/*        console.log(value);*/}
                {/*        setSelectedPost(post !== undefined ? post : null);*/}
                {/*      }}*/}
                {/*  >*/}
                {/*    {posts.map((post) => (*/}
                {/*        <option key={post.id} value={post.id}>*/}
                {/*          {post.title}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*  </SelectField>*/}
                {/*</section>*/}

              </>

          )}
      </Authenticator>
  );
}

export default App;
