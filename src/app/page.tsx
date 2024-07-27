import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[14%] py-20 bg-[#1c1c1c] text-[#9acd32] font-mono">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-2xl left-0 top-0 flex w-full justify-center lg:static lg:w-auto">
          The Impostors
          {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
        </h1>
      </div>

      <div className="w-full px-[10%] py-[5%] flex flex-row items-center justify-between">
        <div className="w-[60%]">
          <h2 className="text-4xl font-bold tracking-wider">
            <span className="text-[#9acd32] font-bold">Welcome back to the Future</span>
          </h2>
          <p className="max-w-md mt-4 text-lg text-[#9acd32]">
            Experience the retro-futuristic sounds of The Pretenders, a band that blends vintage sci-fi aesthetics
            with modern rock.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mb-32 gap-5 text-left mb-0 w-[30%] grid-cols-1 ">
          <a
            className="group w-full rounded-lg border border-transparent px-3 py-2 hover:border-[#9acd32] hover:bg-[#9acd32] hover:text-[#1c1c1c] hover:cursor-pointer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
          <a
            className="group w-full rounded-lg border border-transparent px-3 py-2 hover:border-[#9acd32] hover:bg-[#9acd32] hover:text-[#1c1c1c] hover:cursor-pointer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Start Game{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50 group-hover:opacity-100">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between  items-center">
        <div style={{ width: "100px", height: "100px", backgroundColor: "green" }}></div>
        <div style={{ width: "100px", height: "100px", backgroundColor: "green" }}></div>
      </div>
    </main>
  );
}
