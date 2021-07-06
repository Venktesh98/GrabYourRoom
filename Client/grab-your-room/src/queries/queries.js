import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const UPDATE_USER = gql`
  mutation (
    $id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $checkIn: String!
    $checkOut: String!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      checkIn: $checkIn
      checkOut: $checkOut
    ) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const GET_USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      checkIn
      checkOut
    }
  }
`;

const GET_ROOMS = gql`
  query ($checkIn: String!) {
    rooms(checkIn: $checkIn) {
      id
      roomCategory
      roomPrice
      roomImages
      roomDescription
      roomSize
      maxpersons
      extraFacilities
      bookingStart
      bookingEnd
    }
  }
`;

const GET_ROOM = gql`
  query ($id: ID!) {
    room(id: $id) {
      id
      roomCategory
      roomPrice
      roomImages
      roomDescription
      roomSize
      maxpersons
      extraFacilities
      bookingStart
      bookingEnd
    }
  }
`;

const UPDATE_ROOM = gql`
  mutation ($id: ID!, $checkIn: String!, $checkOut: String!) {
    updateRoom(id: $id, checkIn: $checkIn, checkOut: $checkOut) {
      bookingStart
      bookingEnd
    }
  }
`;

export {
  REGISTER_USER,
  UPDATE_USER,
  GET_USER,
  GET_ROOMS,
  GET_ROOM,
  UPDATE_ROOM,
};
