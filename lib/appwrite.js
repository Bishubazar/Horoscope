import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Storage,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.ufe.astro",
  projectId: "663514d7001ea747f175",
  databaseId: "6635167c0025dacaa039",
  userCollectionId: "663516a30006f667092f",
  storageId: "66351792000b600bf1aa",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const dataBases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await dataBases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
  } catch (error) {
    throw new Error(error);
  }
}
