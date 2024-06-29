export interface User {
    "id": number,
    "userInfos": {
        "firstName": string,
        "lastName": string,
        "age": number
    },
    todayScore?: number,
    score?: number,
    "keyData": {
        "calorieCount": number,
        "proteinCount": number,
        "carbohydrateCount": number,
        "lipidCount": number
    }
}
export interface User_Activity {
    "userId": number,
    "sessions": [
        {
            "day": string,
            "kilogram": number,
            "calories": number
        }

    ]

}
export interface User_Average_Sessions {

    "userId": number,
    "sessions": [
        {
            "day": number,
            "sessionLength": number
        }
    ]
}
export interface User_Performance {
    "userId": number,
    "kind": {
        [key: number]: string
    },
    "data": [
        {
            "value": number,
            "kind": number,
        },
    ],
}