'use client';
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-[14%] py-20 bg-[#1c1c1c] text-[#9acd32] font-mono">
      <div className="w-full px-[10%] py-[5%] flex flex-row items-center justify-between">
        <div className="w-[80%]">
          <h2 className="text-4xl font-bold tracking-wider">
            <span className="text-[#9acd32] font-bold">{t("title")}</span>
          </h2>
          <p className="max-w-md mt-4 text-lg text-[#9acd32] opacity-70">
            {t("subtitle1")}
          </p>
          <p className="max-w-md mt-4 text-lg text-[#9acd32] opacity-70">
            {t("subtitle2")}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 text-left mb-0 w-[40%] grid-cols-1 ">
          <a
            className="group w-full rounded-lg border border-transparent px-3 py-2 hover:border-[#9acd32] hover:bg-[#9acd32] hover:text-[#1c1c1c] hover:cursor-pointer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {t("button.start")}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
          <a
            className="group w-full rounded-lg border border-transparent px-3 py-2 hover:border-[#9acd32] hover:bg-[#9acd32] hover:text-[#1c1c1c] hover:cursor-pointer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {t("button.rule")}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
          <a
            className="group w-full rounded-lg border border-transparent px-3 py-2 hover:border-[#9acd32] hover:bg-[#9acd32] hover:text-[#1c1c1c] hover:cursor-pointer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {t("button.setting")}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between  items-center">
      <div className="mt-25">
            <LocaleSwitcher />
          </div>
      </div>
    </main>
  );
}
