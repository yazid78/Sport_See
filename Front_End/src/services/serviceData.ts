import axios from 'axios';
import { User } from '../interface/user';

// Requêter un utilisateur avec un ID donné.



export default function getData(id: number) {
    axios.get('http://localhost:3000/user/' + id)
        .then(function (response) {
            const responseData: User = response.data
            console.log(responseData);

        })
        .catch(function (error) {

            console.log(error);
        })
        .finally(function () {

        });
}