/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getField = /* GraphQL */ `
  query GetField($id: ID!) {
    getField(id: $id) {
      content
      createdAt
      id
      post {
        createdAt
        folderId
        id
        title
        updatedAt
        __typename
      }
      postId
      title
      type
      updatedAt
      __typename
    }
  }
`;
export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      createdAt
      fields {
        nextToken
        __typename
      }
      id
      title
      updatedAt
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      createdAt
      fields {
        nextToken
        __typename
      }
      folder {
        createdAt
        id
        title
        updatedAt
        __typename
      }
      folderId
      id
      title
      updatedAt
      __typename
    }
  }
`;
export const listFields = /* GraphQL */ `
  query ListFields(
    $filter: ModelFieldFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFields(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        postId
        title
        type
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        folderId
        id
        title
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
