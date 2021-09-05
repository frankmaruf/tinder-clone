import React, { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../css/TinderCards.css";
const TinderCards = () => {
  const [people, setPeople] = React.useState([
    {
      name: "Elon Musk",
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
      job: "SpaceX CEO",
      id: 1,
    },
    {
      name: "Bill Gates",
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTc5MTIxNDE2OTcxNjA4/gettyimages-1165301142.jpg",
      job: "Microsoft CEO",
      id: 2,
    },
    {
      name: "Steve Jobs",
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
      job: "Apple CEO",
      id: 3,
    },
    {
      name: "Mark Zuckerberg",
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg",
      job: "Facebook CEO",
      id: 4,
    },
    {
      name: "Jeff Bezos",
      imgUrl: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
      job: "Amazon CEO",
      id: 5,
    },
  ]);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/tinder/card");
      const data = await res.json();
      setPeople(data);
    }
    fetchData();
  }, []);
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => {
              outOfFrame(person.name);
            }}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <div className="box-2">
                <h3>{person.name}</h3>
              </div>
              <div className="box">
                <h5>{person.job}</h5>
              </div>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
