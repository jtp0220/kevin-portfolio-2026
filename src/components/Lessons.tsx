import poster from "../assets/images/poster.png";

export default function Lessons() {
  return (
    <section id="lessons" className="scroll-m-20 p-10">
      <div>
        <h1 className="font-lexend text-center text-5xl font-semibold">Lessons</h1>
        <div className="m-auto mt-10 max-w-250">
          <img src={poster} alt="" />
        </div>
      </div>
    </section>
  );
}
