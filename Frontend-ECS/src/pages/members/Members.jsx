import React from "react";
import Card from "../cards/Card";
import "./members.css";
import cardsData from "./membersData"; // Import the cardsData array

export default function Members() {
  const rows = [];
  const cardsPerRow = 3;

  for (let i = 0; i < cardsData.length; i += cardsPerRow) {
    rows.push(cardsData.slice(i, i + cardsPerRow));
  }

  return (
    <div className="main mx-auto w-full max-w-7xl space-y-10 ">
      
      

      <div className="members p-5 text-center">
        <div className="membersTitle flex justify-center items-center pt-10">
          <img src="https://i.postimg.cc/nzSYcp3Z/members.png" alt="Members" />
        </div>

        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="row flex flex-col gap-10 sm:flex-row mt-[50px]  p-4 h-auto w-full items-center justify-center gap-x-[18vw]"
            >
              {row.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
