/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createField = /* GraphQL */ `
  mutation CreateField(
    $condition: ModelFieldConditionInput
    $input: CreateFieldInput!
  ) {
    createField(condition: $condition, input: $input) {
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
export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $condition: ModelFolderConditionInput
    $input: CreateFolderInput!
  ) {
    createFolder(condition: $condition, input: $input) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $condition: ModelPostConditionInput
    $input: CreatePostInput!
  ) {
    createPost(condition: $condition, input: $input) {
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
export const deleteField = /* GraphQL */ `
  mutation DeleteField(
    $condition: ModelFieldConditionInput
    $input: DeleteFieldInput!
  ) {
    deleteField(condition: $condition, input: $input) {
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
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $condition: ModelFolderConditionInput
    $input: DeleteFolderInput!
  ) {
    deleteFolder(condition: $condition, input: $input) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $condition: ModelPostConditionInput
    $input: DeletePostInput!
  ) {
    deletePost(condition: $condition, input: $input) {
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
export const updateField = /* GraphQL */ `
  mutation UpdateField(
    $condition: ModelFieldConditionInput
    $input: UpdateFieldInput!
  ) {
    updateField(condition: $condition, input: $input) {
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
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $condition: ModelFolderConditionInput
    $input: UpdateFolderInput!
  ) {
    updateFolder(condition: $condition, input: $input) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $condition: ModelPostConditionInput
    $input: UpdatePostInput!
  ) {
    updatePost(condition: $condition, input: $input) {
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
