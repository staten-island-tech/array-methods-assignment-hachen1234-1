const people = [
  {
    name: "Ivan",
    intellgence: false,
    famous_quote: "Time to play the racist champion",
    nickname: ["fishfood_eater", "lighting", "minecraft_addict"],
  },
  {
    name: "Owen",
    intellgence: false,
    famous_quote: "u are the originator of the schizo",
    nickname: ["rat", "windter", "chemist"],
  },
  {
    name: "Asdac",
    intellgence: false,
    famous_quote: "Just because i am french,doesn't mean that i like children",
    nickname: ["french men", "sus guy", "physic suffer"],
  },
  {
    name: "Kevin",
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
