const graphql = require("graphql");
const User = require("../models/UserModel");
const Room = require("../models/RoomModel");
const { GraphQLDate } = require("graphql-iso-date");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    checkIn: { type: GraphQLDate },
    checkOut: { type: GraphQLDate },
  }),
});

const RoomType = new GraphQLObjectType({
  name: "Room",
  fields: () => ({
    id: { type: GraphQLID },
    roomCategory: { type: GraphQLString },
    roomPrice: { type: GraphQLInt },
    roomImages: { type: new GraphQLList(GraphQLString) },
    roomDescription: { type: GraphQLString },
    roomSize: { type: GraphQLInt },
    maxpersons: { type: GraphQLInt },
    extraFacilities: { type: new GraphQLList(GraphQLString) },
    bookingStart: { type: GraphQLDate },
    bookingEnd: { type: GraphQLDate },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    //   fetch all users
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        // from db
        // return User.find({});
        // console.log("Parent:", parent);
        return User.find({});
      },
    },

    // to get user by id
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log("Args:", args);
        return User.findById(args.id);
      },
    },

    // Rooms
    // get all rooms
    rooms: {
      type: new GraphQLList(RoomType),
      args: {
        checkIn: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Room.find({
          $and: [
            {
              bookingStart: {
                $lt: new Date(args.checkIn),
              },
            },
            {
              bookingEnd: {
                $lt: new Date(args.checkIn),
              },
            },
          ],
        });
      },
    },

    // Room by id
    room: {
      type: RoomType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log("Args Room:", args);
        return Room.findById(args.id);
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    //  add user
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        checkIn: { type: new GraphQLNonNull(GraphQLString) },
        checkOut: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        console.log("In resolve");
        let user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          checkIn: new Date(args.checkIn),
          checkOut: new Date(args.checkOut),
        });
        console.log("Users Data:", user);
        return user.save();
      },
    },

    // update user
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        checkIn: { type: GraphQLString },
        checkOut: { type: GraphQLString },
      },
      resolve(parent, args) {
        console.log("In update user details:");
        return new Promise((resolve, reject) => {
          User.findOneAndUpdate(
            { _id: args.id },
            {
              $set: {
                firstName: args.firstName,
                lastName: args.lastName,
                email: args.email,
                checkIn: new Date(args.checkIn),
                checkOut: new Date(args.checkOut),
              },
            },
            { new: true } //returns new document
          ).exec((err, res) => {
            console.log("test", res);
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

    // delete user
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          User.deleteOne({ _id: args.id }).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },

    // Room Details
    // Register Room
    registerRoom: {
      type: RoomType,
      args: {
        roomCategory: { type: new GraphQLNonNull(GraphQLString) },
        roomPrice: { type: new GraphQLNonNull(GraphQLInt) },
        roomImages: { type: new GraphQLList(GraphQLString) },
        roomDescription: { type: new GraphQLNonNull(GraphQLString) },
        roomSize: { type: new GraphQLNonNull(GraphQLInt) },
        maxpersons: { type: new GraphQLNonNull(GraphQLInt) },
        extraFacilities: { type: new GraphQLList(GraphQLString) },
        bookingStart: { type: new GraphQLNonNull(GraphQLDate) },
        bookingEnd: { type: new GraphQLNonNull(GraphQLDate) },
      },
      resolve(parent, args) {
        let room = new Room({
          roomCategory: args.roomCategory,
          roomPrice: args.roomPrice,
          roomImages: args.roomImages,
          roomDescription: args.roomDescription,
          roomSize: args.roomSize,
          maxpersons: args.maxpersons,
          extraFacilities: args.extraFacilities,
          bookingStart: args.bookingStart,
          bookingEnd: args.bookingEnd,
        });
        console.log("room:", room);
        return room.save();
      },
    },

    // update Room
    updateRoom: {
      type: RoomType,
      args: {
        id: { type: GraphQLID },
        checkIn: { type: GraphQLString },
        checkOut: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          Room.findByIdAndUpdate(
            { _id: args.id },
            {
              $set: {
                bookingStart: new Date(args.checkIn),
                bookingEnd: new Date(args.checkOut),
              },
            },
            { new: true } //returns new document
          ).exec((error, response) => {
            console.log("Rsposne of update", response);
            if (error) reject(error);
            else resolve(response);
          });
        });
      },
    },

    // delete Room
    deleteRoom: {
      type: RoomType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return new Promise((resolve, reject) => {
          Room.deleteOne({ _id: args.id }).exec((err, res) => {
            if (err) reject(err);
            else resolve(res);
          });
        });
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
