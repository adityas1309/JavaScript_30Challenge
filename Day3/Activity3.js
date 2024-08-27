//Determine the day of the week based on number use SWITCH case
let ch=4;
switch(ch){
    case 1: 
        console.log("MONDAY");
        break;
    case 2: 
        console.log("TUESDAY");
        break;
    case 3: 
        console.log("WEDNESDAY");
        break;
    case 4: 
        console.log("THURSDAY");
        break; 
    case 5: 
        console.log("FRIDAY");
        break;
    case 6: 
        console.log("SATURDAY");
        break;
    case 7: 
        console.log("SUNDAY");
        break;
    default:
        console.log("Invalid Choice");
}

//Use SWITCH case to assign grade based on score
let sc=37;
switch(true){
    case (sc>90 && sc<=100):
        console.log("A");
        break;
    case (sc>80 && sc<=90):
        console.log("B");
        break;
    case (sc>70 && sc<=80):
        console.log("C");
        break;
    case (sc>60 && sc<=70):
        console.log("D");
        break;
    case (sc>50 && sc<=60):
        console.log("E");
        break;
    case (sc<=50 && sc>=0):
        console.log("F");
        break;
    default:
        console.log("Not valid");
}
