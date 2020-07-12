var { buildSchema } = require('graphql');

var schema = buildSchema(`
scalar DateTime

type Query {
  getAllPublicationsStatus: [PublicationStatus],
  getAllPublications: [Publication],
  getPublication(id: Int!): Publication,
}

type Mutation {
    createPublication(title: String, statusId: Int!, userId: Int!, bodies: [PublicationBodyInput]) : Publication,
    login(email: String!, password: String!): Self
}

type Self {
    id: Int!,
    name: String,
    email: String,
    key: String,
    typeId: Int,
    type: UserType
}

type User {
    id: Int!,
    name: String!
    email: String!,
    key: String,
    typeId: Int!,
    type: UserType
}

type UserType {
    id: Int!,
    name: String!
}

type Publication {
    id: Int!,
    title: String!,
    statusId: Int!,
    userId: Int!,
    date: DateTime!,
    user: User,
    status: PublicationStatus,
    bodies: [PublicationBody],
    files: [PublicationFile]
}

type PublicationStatus {
    id: Int!,
    name: String!
}

type PublicationBody {
    id: Int!,
    publicationId: Int!,
    textId: Int,
    imageId: Int,
    order: Int!,
    publication: Publication,
    text: Text,
    image: Image
}

input PublicationBodyInput {
    textId: Int,
    imageId: Int,
    order: Int
}

type PublicationFile {
    id: Int!,
    publicationId: Int!,
    fileId: Int!,
    order: Int!,
    publication: Publication,
    file: File
}

type Text {
    id: Int!,
    size: Float!,
    color: String!,
    font: String!,
    bold: Boolean!,
    italic: Boolean!,
    content: String!
}

type Image {
    id: Int!,
    name: String!,
    extension: String!,
    width: Float!,
    height: Float!,
    content: String!
}

type File {
    id: Int!,
    name: String!,
    extension: String!,
    content: String!
}

`);

module.exports = schema;