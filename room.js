var firebaseConfig = {
    apiKey: "AIzaSyCE308yGITh1bAoM7CSn4bffSHQgOkjzYA",
    authDomain: "twitter-app---1.firebaseapp.com",
    databaseURL: "https://twitter-app---1-default-rtdb.firebaseio.com",
    projectId: "twitter-app---1",
    storageBucket: "twitter-app---1.appspot.com",
    messagingSenderId: "767868475441",
    appId: "1:767868475441:web:44674653aab055bbc6dd10",
    measurementId: "G-KPSCNE64M0"
  };
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
    });

       localStorage.setItem("room_name", room_name);


       window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}




