// let nume = "Andrei";
// let age = 20;
// let isStudent = true;
let mincarePreferata = ['mar', 'banana', 'mandarina']; // 'mar banana mandarina'


const persona1 = {
    nume: 'Andrei',
    age: 20,
    isStudent: true,
    fructePreferate: ['mar', 'banana', 'mandarina'],
    // salutre() {
        //     alert('Salut')
        // } // metoda
    }
    // console.log(persona1['nume']);
    
    // console.log('asdasda')
    
    // persona1.salutre();
    
    // // alert(persona1.nume);
// let result = 10;

// function adunare(num1, num2) {
    //     let result = num1 + num2;
    //     alert(result);
    // }
    
    // adunare(2, 2); // 20
    
    // if (3>2 && 3 === '3') {
        //     alert('3 este mai mare');
        // } else if (false){
            //     alert('3 nu este mai mare');
            // } else if(true){
                //     alert('ultimul statemnt')
                // }else {
                    
                    // }
                    
                    // for (let i = 0; i < mincarePreferata.length; i++){
                        //     console.log(mincarePreferata[i]);
                        // }
                        
                        // for (const element of mincarePreferata) {
                            //     console.log(element);
// }
for (const proprietateaNume in persona1) {
    console.log(proprietateaNume + ' ' + persona1[proprietateaNume]);
}
