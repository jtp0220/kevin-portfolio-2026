import "../styles/index.css";
import { CompositionData, type Experience as ExperienceType } from "../constants";

export default function Compositions() {
  return (
    <section id="compositions" className="scroll-m-20 bg-black px-5 py-10 text-white">
      <div className="m-auto max-w-250">
        <h1 className="font-lexend pb-5 text-center text-5xl font-semibold">Compositions</h1>
        {CompositionData.map((value, index) => (
          <Composition data={value} key={index} />
        ))}
      </div>
    </section>
  );
}

function Composition({ data }: { data: ExperienceType }) {
  return (
    <div className="mx-auto my-10 max-w-200">
      <h1 className="font-lexend my-10 text-3xl">{data.title}</h1>
      <div className="my-10 border">
        <iframe className="h-120 w-full" src={data.videoLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="font-outfit text-xl font-light">{data.description}</div>
    </div>
  );
}
