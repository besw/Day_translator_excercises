var day = "Tuesday";
switch (day) {
    case "Monday":
        day = "Montag";
        break;
    case "Tuesday": 
        day = "Dienstag";
        break;
    case "wednsday": 
        day = "Mitwoch";
        break;
    case 4: 
        day = "Thursday";
        break;
    case 5: 
        day = "Friday";
        break;
     case 6: 
        day = "Saturday";
        break;
     case 0: 
        day = "Sunday";
        break;
        
    default:
        day = "I don't know?";
}





document.getElementById("test").innerHTML = "It is " + day;