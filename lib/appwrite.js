import { Client } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "6709188200259bfe89b5",
  databaseId: "670e1808001eff0be7f7",
  userCollectionId: "670e1af60014eacc9a8f",
  videoCollectionId: "670e1b3f0000e66fb7b1",
  storageId: "670e1ce50023d1c82462",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.
//
//

const account = new Account(client);

// Register User
account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
