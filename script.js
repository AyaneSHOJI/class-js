class Student {
    constructor(name, city){
        this.name = name;
        this.city = city;      
    }

    greet(){
        console.log('Bonjour, je m\'appelle ' + this.name + ', J\'habite à ' + this.city);
    }

    getName(){
        return this.name;
    }

    speak(language){
        console.log('Je parle ' + language);
    }
    
}

const student1 = new Student('Marc', 'Lille');
console.log(student1.name);
student1.greet();

const student2 = new Student('Anne', 'Roubaix');
console.log(student2.getName());
student2.speak('l\'anglais');

document.getElementById('name').innerHTML = student1.name;