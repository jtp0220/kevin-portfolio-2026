import itmhPDF from "/src/assets/documents/Introduction to Music History-Kevin Tran.pdf";

export type NavbarTab = {
  label: string;
  href: string;
};

type NavTabData = {
  label: string;
  href: string;
};

type HeaderData = {
  navTabs: NavTabData[];
};

export const HeaderData: HeaderData = {
  navTabs: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Performances",
      href: "#performances",
    },
    {
      label: "Compositions",
      href: "#compositions",
    },
    {
      label: "Lessons",
      href: "#lessons",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};

export type Experience = {
  title: string;
  videoLink: string;
  description: React.ReactNode;
};

export const PerformanceData: Experience[] = [
  {
    title: "Liszt/Saint-Saëns — Danse Macabre (Solo Piano Arrangement)",
    videoLink: "https://www.youtube.com/embed/fhAaXLbNXRA",
    description: "This video features my performance of Franz Liszt's solo piano arrangement of Camille Saint-Saëns' Danse Macabre, Op. 40. It was recorded during a studio recital at Von Kuster Hall, University of Western Ontario.",
  },
  {
    title: "Duke Ellington — Fantazm (Improvised Solo)",
    videoLink: "https://www.youtube.com/embed/ezuT1vJ0CH4",
    description: "This clip showcases a solo I improvised during a performance of Duke Ellington's Fantazm with the University of Western Ontario Jazz Band. It was recorded at one of our final concerts on campus, held in the Paul Davenport Theatre.",
  },
  {
    title: "Bach Partita in A minor - Fantasia and Gigue",
    videoLink: "https://www.youtube.com/embed/4JlF7dOoon8",
    description: "In this video, I am performing the Fantasia and Gigue movements from Bach's Partita No. 3 in A minor. This performance was part of my audition for the Orford Music Festival.",
  },
  {
    title: `Franz Liszt's Transcendental Étude No. 12, "Chasse-neige."`,
    videoLink: "https://www.youtube.com/embed/edxOiLswVFY",
    description: "This video features my performance of Franz Liszt's Transcendental Étude No. 12, “Chasse-neige.” It was recorded during a studio recital at Von Kuster Hall, University of Western Ontario. ",
  },
  {
    title: " Johann Sebastian Bach's Prelude and Fugue in C-sharp minor, BWV 849",
    videoLink: "https://www.youtube.com/embed/Z07GPcdBJ4A",
    description: "This video features my performance of Johann Sebastian Bach's Prelude and Fugue in C-sharp minor, BWV 849. It was recorded during a studio recital at Von Kuster Hall, University of Western Ontario. ",
  },
  {
    title: "Moritz Moszkowski's Piano Concerto No. 2 in E major, Op. 59: III",
    videoLink: "https://www.youtube.com/embed/MPALkZP3mu8",
    description: "This video features my performance of Moritz Moszkowski's Piano Concerto No. 2 in E major, Op. 59: III. It was recorded as a submission for a concerto competition. ",
  },
  {
    title: "Louis Ganne - Andante et Scherzo for Flute and Piano",
    videoLink: "https://www.youtube.com/embed/ek6EUpt4CDc",
    description: (
      <>
        Recorded as part of the Flute Studio Recital, this performance features Andante et Scherzo for Flute and Piano by Louis Ganne.
        <br />
        <br /> The piece moves between lyrical, singing lines and light, agile passages, highlighting the contrast between expressive phrasing and technical brilliance in the flute writing. This performance captures both the reflective character of the Andante and the playful energy of the Scherzo in collaboration between flute and piano.
      </>
    ),
  },
];

export const CompositionData: Experience[] = [
  {
    title: "Introduction to Music History - Part I: Aria; Part II: Recitative and Duet, Tran",
    videoLink: "https://www.youtube.com/embed/RpdAQr_A0AU",
    description: <>Recorded as Introduction to Music History - Part I: Aria; Part II: Recitative and Duet, this video includes the aria and the recitative/duet from the first two movements of the cantata. These recordings represent early performance versions of the work as it was being developed.</>,
  },
  {
    title: "Introduction to Music History - Part III: Finale, Tran",
    videoLink: "https://www.youtube.com/embed/3eTjAX6OVV0",
    description: (
      <>
        <a href={itmhPDF} className="font-outfit mb-8 inline-block rounded-xl border bg-white px-3 py-2 text-lg text-black hover:bg-blue-500 hover:text-white">
          View PDF
        </a>
        <br />
        "Introduction to Music History (2026)" is a three-part cantata for soprano, two tenors, and piano. Loosely based on a first-year music history class, it follows Katie, an irritable student trying to understand the final term paper rubric, who consults Peter, her TA, and ultimately confronts Prof. Geiger, the eccentric professor. <br />
        <br /> The first part features Prof. Geiger's lecture and da capo aria, with piano accompaniment reflecting his wandering thoughts and referencing composers discussed in class. <br />
        <br /> The second part is a duet between Katie and Peter in sonata-allegro form, highlighting Katie's agitation and Peter's initial detachment. <br />
      </>
    ),
  },
];
