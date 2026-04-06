import "../styles/index.css";
import { ExperienceData, type Experience as ExperienceType } from "../constants";
import Experience from "./Experience";
import React from "react";

export default function Work() {
  return (
    <section id="work" className="scroll-m-20 bg-black p-10 text-white">
      <div className="m-auto max-w-250">
        <h1 className="font-lexend text-center text-5xl font-semibold">Work</h1>

        {ExperienceData.map((value: ExperienceType, index) => (
          <React.Fragment key={index}>
            <Experience data={value} />

            {index < ExperienceData.length - 1 && <div className="h-0.5 w-full bg-white" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
