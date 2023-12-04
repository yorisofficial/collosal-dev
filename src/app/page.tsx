import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="hero-section relative -z-10 flex h-screen w-full items-center justify-center">
        <div className="absolute z-10 flex h-screen w-full flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-semibold capitalize">lorem title</h1>
          <p className="w-3/4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            expedita necessitatibus rem dolorem, sequi quas id eaque omnis,
            debitis architecto, exercitationem consequatur aspernatur facere
            nesciunt? Hic, consequatur tenetur quos debitis iure magnam dolore
            fugit distinctio ullam aliquid optio, aliquam architecto inventore
            eligendi labore dolores voluptatibus dicta, dolor molestias corrupti
            sed?
          </p>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="text-start text-2xl font-semibold">
          Documentasi Components
        </h1>
        <ul className="flex gap-2">
          <li>
            <Link href={"/component/style/Button"}>button</Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
          <li>
            <Link href={"/"}></Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
