import axios from "axios";
import { User, User_Activity, User_Average_Sessions, User_Performance } from "../interface/user";

// Requêter un utilisateur avec un ID donné.

export async function getDataUser(id: number, mocked: boolean): Promise<User> {
  let resultat = null
  if (mocked) {
    resultat = {
      id: 12,
      userInfos: {
        firstName: 'Karl',
        lastName: 'Dovineau',
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
      }
    };
  }
  else {
    resultat = <User>await axios
      .get("http://localhost:3000/user/" + id)
      .then((response) => response.data.data)
      .catch((error) => console.log(error));
  }
  return resultat;
}

export async function getDataActivity(id: number, mocked: boolean): Promise<User_Activity> {
  let resultat = null
  if (mocked) {
    resultat = {
      userId: 12,
      sessions: [
        {
          day: '2020-07-01',
          kilogram: 80,
          calories: 240
        },
        {
          day: '2020-07-02',
          kilogram: 80,
          calories: 220
        },
        {
          day: '2020-07-03',
          kilogram: 81,
          calories: 280
        },
        {
          day: '2020-07-04',
          kilogram: 81,
          calories: 290
        },
        {
          day: '2020-07-05',
          kilogram: 80,
          calories: 160
        },
        {
          day: '2020-07-06',
          kilogram: 78,
          calories: 162
        },
        {
          day: '2020-07-07',
          kilogram: 76,
          calories: 390
        }
      ]
    };
  }
  else {
    resultat = <User_Activity>await axios
      .get("http://localhost:3000/user/" + id + "/activity")
      .then((response) => response.data.data)
      .catch((error) => console.log(error));
  }
  return resultat;
}
export async function getDataUserAverageSessions(id: number, mocked: boolean): Promise<User_Average_Sessions> {
  let resultat = null;
  if (mocked) {
    resultat = {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 30
        },
        {
          day: 2,
          sessionLength: 23
        },
        {
          day: 3,
          sessionLength: 45
        },
        {
          day: 4,
          sessionLength: 50
        },
        {
          day: 5,
          sessionLength: 0
        },
        {
          day: 6,
          sessionLength: 0
        },
        {
          day: 7,
          sessionLength: 60
        }
      ]
    };

  } else {

    resultat = <User_Average_Sessions>await axios
      .get("http://localhost:3000/user/" + id + "/average-sessions")
      .then((response) => response.data.data)
      .catch((error) => console.log(error));
  }
  return resultat;
}
export async function getDataUserPerformance(id: number, mocked: boolean): Promise<User_Performance> {
  let resultat =
    null;
  if (mocked) {
    resultat = {
      userId: 12,
      kind: {
        1: 'cardio',
        2: 'energy',
        3: 'endurance',
        4: 'strength',
        5: 'speed',
        6: 'intensity'
      },
      data: [
        {
          value: 80,
          kind: 1
        },
        {
          value: 120,
          kind: 2
        },
        {
          value: 140,
          kind: 3
        },
        {
          value: 50,
          kind: 4
        },
        {
          value: 200,
          kind: 5
        },
        {
          value: 90,
          kind: 6
        }
      ]
    }
  }
  else {
    resultat = <User_Performance>await axios
      .get("http://localhost:3000/user/" + id + "/performance")
      .then((response) => response.data.data)
      .catch((error) => console.log(error));
  }
  return resultat;
} 