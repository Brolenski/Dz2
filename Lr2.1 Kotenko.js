let user = {};                  
console.log("Крок 1:", user);

user.name = "Марк";             
console.log("Крок 2:", user);

user.surname = "Сміт";          
console.log("Крок 3:", user);

user.name = "Тарас";            
console.log("Крок 4:", user);

delete user.name;               
console.log("Крок 5:", user);