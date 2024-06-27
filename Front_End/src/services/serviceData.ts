import axios from "axios";
import { User, User_Activity, User_Average_Sessions, User_Performance } from "../interface/user";

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
export async function getDataUserAverageSessions(id: number): Promise<User_Average_Sessions> {
  return <User_Average_Sessions>await axios
    .get("http://localhost:3000/user/" + id + "/average-sessions")
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
}
export async function getDataUserPerformance(id: number): Promise<User_Performance> {
  return <User_Performance>await axios
    .get("http://localhost:3000/user/" + id + "/performance")
    .then((response) => response.data.data)
    .catch((error) => console.log(error));
} 