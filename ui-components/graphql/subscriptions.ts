/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateField = /* GraphQL */ `
  subscription OnCreateField($filter: ModelSubscriptionFieldFilterInput) {
    onCreateField(filter: $filter) {
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
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder($filter: ModelSubscriptionFolderFilterInput) {
    onCreateFolder(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onDeleteField = /* GraphQL */ `
  subscription OnDeleteField($filter: ModelSubscriptionFieldFilterInput) {
    onDeleteField(filter: $filter) {
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder($filter: ModelSubscriptionFolderFilterInput) {
    onDeleteFolder(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onUpdateField = /* GraphQL */ `
  subscription OnUpdateField($filter: ModelSubscriptionFieldFilterInput) {
    onUpdateField(filter: $filter) {
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder($filter: ModelSubscriptionFolderFilterInput) {
    onUpdateFolder(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
