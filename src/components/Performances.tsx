import "../styles/index.css";
import { PerformanceData, type Experience as ExperienceType } from "../constants";
import Experience from "./Experience";
import React from "react";

export default function Performances() {
  return (
    <section id="performances" className="scroll-m-20 bg-black px-5 py-10 text-white">
      <div className="m-auto max-w-250">
        <h1 className="font-lexend pb-5 text-center text-5xl font-semibold">Performances</h1>

        {PerformanceData.map((value: ExperienceType, index) => (
          <React.Fragment key={index}>
            <Experience data={value} />

            {index < PerformanceData.length - 1 && <div className="h-0.5 w-full bg-white" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
