/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

/* ------------------------------ TASK 3 ENGLISH -----------------------------------
Write JS code, which will allow the user to click on button "Show users" and print users from Github API (enpoint provided below).

Onclick:
1. Users should be printed in <div id="output"></div> block;
1.1. Information about the users : "login" & "avatar_url" values;
2. Message "Press "Show Users" button to see users" should disappear;

Note: Information about each user (user card) must have minimum style.
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
