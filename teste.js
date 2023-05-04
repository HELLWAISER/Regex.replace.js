const data = "2022-11-30";
const padraoBrasileiro = data.replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$3/$2/$1");
console.log(padraoBrasileiro);