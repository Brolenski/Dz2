function calculateSalaries() {
  let salaries = {
    Jarik: 1000,
    Anna: 1600,
    Miko: 1300
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }

  alert("Загальна сума зарплат: " + sum); // має бути 3900
}

calculateSalaries(); // Виклик функції