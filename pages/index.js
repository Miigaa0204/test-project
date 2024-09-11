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

  return (
    <div className="m-auto text-center">
      <div className="grid grid-cols-3 gap-6 p-10 ">
        <Card className="p-10 text-start">
          Name:{friends[0].name}
          <br />
          Age:{friends[0].age}
          <br />
          Sex:{friends[0].sex}
          <br />
          Profession:{friends[0].profession}
          <br />
          Skin:{friends[0].skin}
          <br />
          Id:{friends[0].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[1].name}
          <br />
          Age:{friends[1].age}
          <br />
          Sex:{friends[1].sex}
          <br />
          Profession:{friends[1].profession}
          <br />
          Skin:{friends[1].skin}
          <br />
          Id:{friends[1].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[2].name}
          <br />
          Age:{friends[2].age}
          <br />
          Sex:{friends[2].sex}
          <br />
          Profession:{friends[2].profession}
          <br />
          Skin:{friends[2].skin}
          <br />
          Id:{friends[2].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[3].name}
          <br />
          Age:{friends[3].age}
          <br />
          Sex:{friends[3].sex}
          <br />
          Profession:{friends[3].profession}
          <br />
          Skin:{friends[3].skin}
          <br />
          Id:{friends[3].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[4].name}
          <br />
          Age:{friends[4].age}
          <br />
          Sex:{friends[4].sex}
          <br />
          Profession:{friends[4].profession}
          <br />
          Skin:{friends[4].skin}
          <br />
          Id:{friends[4].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[5].name}
          <br />
          Age:{friends[5].age}
          <br />
          Sex:{friends[5].sex}
          <br />
          Profession:{friends[5].profession}
          <br />
          Skin:{friends[5].skin}
          <br />
          Id:{friends[5].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[6].name}
          <br />
          Age:{friends[6].age}
          <br />
          Sex:{friends[6].sex}
          <br />
          Profession:{friends[6].profession}
          <br />
          Skin:{friends[6].skin}
          <br />
          Id:{friends[6].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[7].name}
          <br />
          Age:{friends[7].age}
          <br />
          Sex:{friends[7].sex}
          <br />
          Profession:{friends[7].profession}
          <br />
          Skin:{friends[7].skin}
          <br />
          Id:{friends[7].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[8].name}
          <br />
          Age:{friends[8].age}
          <br />
          Sex:{friends[8].sex}
          <br />
          Profession:{friends[8].profession}
          <br />
          Skin:{friends[8].skin}
          <br />
          Id:{friends[8].id}
          <br />
        </Card>
        <Card className="p-10 text-start">
          Name:{friends[9].name}
          <br />
          Age:{friends[9].age}
          <br />
          Sex:{friends[9].sex}
          <br />
          Profession:{friends[9].profession}
          <br />
          Skin:{friends[9].skin}
          <br />
          Id:{friends[9].id}
          <br />
        </Card>
      </div>
    </div>
  );
}
