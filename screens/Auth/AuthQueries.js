import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const LOG_IN_CONFIRM = gql`
  mutation confirmLogin($email: String!, $password: String!) {
    confirmLogin(email: $email, password: $password)
  }
`;
export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
    $bio: String
  ) {
    createAccount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      bio: $bio
    )
  }
`;
