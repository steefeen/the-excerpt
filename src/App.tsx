import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import {Authenticator, Divider, ScrollView, SearchField,} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// @ts-expect-error
import {PostCreateForm} from '../ui-components';
import {Link, Outlet} from "react-router-dom";

const client = generateClient<Schema>();

function App() {
  const [posts, setPosts] = useState<Array<Schema["Post"]["type"]>>([]);

  useEffect(() => {
    client.models.Post.list().then((res) => {
      setPosts(res.data)
      //setSelectedPost(res.data[0]);
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
                {/*<h1>{user?.signInDetails?.loginId}'s todos</h1>*/}
                <div id="sidebar">
                  <h1>
                    <span>{user?.userId}</span>
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
                    {/*<ul>*/}
                    {/*  {posts.map((post) => (*/}
                    {/*      <PostList key={post.id} post={post}/>*/}
                    {/*  ))}*/}
                    {/*</ul>*/}

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
