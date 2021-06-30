guest_list_input = [];


function push(){
    var guestname = document.getElementById("guest_list_input").value;
    guest_list_input.push(guestname);
    document.getElementById("Answer_of_array").innerHTML = guest_list_input;
    document.getElementById("guest_list_input").value = "";
    
}

function sorting(){
    display_list = "";
    guest_list_input.sort();
    for (var i = 0 ; i < guest_list_input.length ; i++){
        display_list = display_list + guest_list_input[i] + "<br>";  
    } 
    document.getElementById("Answer_of_sorted_list").innerHTML = display_list;
}

function show(){

    display_list = "";
    for (var i = 0 ; i < guest_list_input.length ; i++){
        display_list = display_list + guest_list_input[i] + "<br>";  
    } 
    document.getElementById("Answer_of_show_list").innerHTML = display_list;
}
 