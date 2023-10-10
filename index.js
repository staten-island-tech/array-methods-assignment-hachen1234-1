const people = [
  {
    name: "Ivan Chen",
    intellgence: false,
    famous_quote: "Time to play the racist champion",
    nickname: ["fishfood_eater", "lighting", "minecraft_addict"],
  },
  {
    name: "Owen Deng",
    intellgence: false,
    famous_quote: "Time to cook",
    nickname: ["rat", "windter", "chef"],
  },
  {
    name: "Asdac",
    intellgence: false,
    famous_quote: "Its a cult",
    nickname: ["french men", "sus guy", "physic suffer"],
  },
  {
    name: "Kevin Chen",
    intellgence: false,
    famous_quote: "China did not like that ",
    nickname: ["Weeb", "Why do you play so much gacha games", "Sucrose lover"],
  },
];

const peoplename = people.forEach((people) => {
  console.log(people.name);
});
const nickname = people.forEach((people) => {
  people.nickname.forEach((nickname) => console.log(nickname));
});
const lowintel = people.filter((people) => people.intellgence === false);
console.log(lowintel);
