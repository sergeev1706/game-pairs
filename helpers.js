

export function findDescription(num) {
  if (num === 1) return `Осталось найти - ${num} пару`;
  else if (num > 1 && num < 5) return `Осталось найти - ${num} пары`;
  else if (num > 4) return `Осталось найти - ${num} пар`;
  else return 'Игра окончина';
}