import { Card } from "@/components/ui/card";

export default function home() {
  let friends = [
    {
      id: 1,
      age: 23,
      sex: "male",
      name: "Naraa",
      skin: "yellow",
      profession: "dev",
    },
    {
      id: 2,
      age: 22,
      sex: "female",
      name: "Maralaa",
      skin: "white",
      profession: "teacher",
    },
    {
      id: 3,
      age: 35,
      sex: "male",
      name: "Nyambaa",
      skin: "brown",
      profession: "businessman",
    },
    {
      id: 4,
      age: 17,
      sex: "male",
      name: "Tsenguun",
      skin: "brown",
      profession: "student",
    },
    {
      id: 5,
      age: 21,
      sex: "male",
      name: "Jerry",
      skin: "brown",
      profession: "dev",
    },
    {
      id: 6,
      age: 22,
      sex: "male",
      name: "Temuujin",
      skin: "white",
      profession: "dev",
    },
    {
      id: 7,
      age: 21,
      sex: "male",
      name: "Miigaa",
      skin: "brown",
      profession: "dev",
    },
    {
      id: 8,
      age: 21,
      sex: "male",
      name: "Hangal",
      skin: "white",
      profession: "dev",
    },
    {
      id: 9,
      age: 21,
      sex: "male",
      name: "Zoloo",
      skin: "brown",
      profession: "dev",
    },
    {
      id: 10,
      age: 21,
      sex: "male",
      name: "Badral",
      skin: "brown",
      profession: "dev",
    },
  ];

  let number = 0;

  function add() {
    number++;
    document.getElementById("output").innerText = number;
  }

  function remove() {
    number--;
    document.getElementById("output").innerText = number;
  }

  return (
    <div className="grid grid-cols-3 items-center">
      {friends.map((item) => (
        <div className="p-3">
          <Card className="p-10 text-start ">
            Name:{item.name}
            <br />
            Age:{item.age}
            <br />
            Gender:{item.sex}
            <br />
            Profession:{item.profession}
            <br />
            Skin:{item.skin}
            <br />
            Id:{item.id}
            <br />
          </Card>
        </div>
      ))}
      <Card className="flex justify-center items-center p-3 w-fit h-fit">
        Average age of friends:
        {friends.reduce((ages, person) => ages + person.age, 0) /
          friends.length}
      </Card>
      <div className="flex gap-8">
        <button onClick={remove} className="rounded-2xl p-3 bg-green-500">
          remove
        </button>

        <div id="output" className="bg-slate-400 p-3 rounded-2xl w-24 flex items-center justify-center">
          0
        </div>

        <button onClick={add} className="rounded-2xl p-3 bg-green-500">
        add
        </button>
      </div>
    </div>
  );
}
