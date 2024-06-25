export interface User {
    "id": number,
    "userInfos": {
        "firstName": string,
        "lastName": string,
        "age": number
    },
    "todayScore": number,
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