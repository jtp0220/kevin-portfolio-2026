import { type Experience } from "../constants";

export default function Experience({ data }: { data: Experience }) {
  return (
    <div className="mx-auto my-10 max-w-200">
      <h1 className="font-lexend my-10 text-4xl">{data.title}</h1>
      <div className="my-10 border-5 p-2">
        <iframe className="h-120 w-full" src={data.videoLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <p className="text-2xl">{data.description}</p>
    </div>
  );
}
