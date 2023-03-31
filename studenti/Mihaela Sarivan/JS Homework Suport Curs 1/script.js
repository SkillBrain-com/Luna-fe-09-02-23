//Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.
//Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.
//În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

function isDivisibleBy10(num) {
    if ((num % 10) == 0){
         return true;
    } else { 
        return false; 
        }
    }
    
    console.log(isDivisibleBy10(20))
    console.log(isDivisibleBy10(15))

//Scrieți o funcție numită tellFortune care:
//primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
//afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."

    let childNumber = 4;
    let name = "Mike";
    let geographicalLocation = ["Londra"];
    let workPlace = ["postas"];

    const person1 = {
        childNumber: 4,
        name: "Mike",
        geographicalLocation: ["Londra"],
        workPlace: ["postas"],
     }

     function greet(person1) {
        console.log("Buna," + " " + person1)
    }

    greet ("vei fi casatorita cu Mike din Londra, postas, si vei avea 4 copii")


//Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii
//Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

    let day= 1;
    let dayName;
    
    switch(day) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break; 
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;  
        case 7:
            dayName = "Sunday";
            break; 
    }


    console.log(dayName);
   

    






