function addUser(){
    user_name=document.getElementById("user_name").value;
    document.getElementById(user_name).innerHTML("sub-title");
    localStorage.setItem("user_name", user_name);
    window.location="chat_room.html";
    
}