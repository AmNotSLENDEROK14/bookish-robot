function addUser() {

    user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);
    
      window.location = "Prochat_room.html";
} 





function login(){
  
    var user_name= document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name);
 window.location= "pro_room.html";
}