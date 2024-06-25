import axios from "axios";
import { User, User_Activity } from "../interface/user";

// Requêter un utilisateur avec un ID donné.

export async function getDataUser(id: number): Promise<User> {
  return <User>await axios
    .get("http://localhost:3000/user/" + id)
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
}

export async function getDataActivity(id: number): Promise<User_Activity> {
  return <User_Activity>await axios
    .get("http://localhost:3000/user/" + id + "/activity")
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
} 