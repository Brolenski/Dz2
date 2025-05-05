function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

function processMenu() {
  let menu = {
    width: 200,
    height: 300,
    title: "Моє меню"
  };

  alert("До виклику:\n" + JSON.stringify(menu, null, 2));
  multiplyNumeric(menu);
  alert("Після виклику:\n" + JSON.stringify(menu, null, 2));
}

processMenu(); // Виклик функції