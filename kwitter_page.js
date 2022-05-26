//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC9SIL117JFWpQWgGM8Cfp7V3cX-sG00xc",
      authDomain: "quitter-a91b8.firebaseapp.com",
      databaseURL: "https://quitter-a91b8-default-rtdb.firebaseio.com",
      projectId: "quitter-a91b8",
      storageBucket: "quitter-a91b8.appspot.com",
      messagingSenderId: "233925105986",
      appId: "1:233925105986:web:a892eb1a4c90e4b4b350db",
      measurementId: "G-5L8H0P3D64"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");
function send(){
      msg= document.getElementById("msg").value 
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0
      });
      document.getElementById("msg").value= ""
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
