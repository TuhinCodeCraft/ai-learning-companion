import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";
import { fail } from "assert";
import { fallbackModeToFallbackField } from "next/dist/lib/fallback";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <>
     
      {canCreateCompanion ? (
        <CompanionForm />
      ) : (
        <div className="flex items-center justify-center mt-10">
          <article className="companion-limit relative text-center p-6 bg-white rounded-xl shadow-md space-y-4">
            {/* 🟢 Upgrade Plan Badge at the top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              ⚡ Upgrade your plan to unlock more!
            </div>

            {/* Limit Image */}
            <Image
              src="/images/limit.svg"
              alt="Companion limit reached"
              width={360}
              height={230}
              className="mx-auto"
            />

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800">
             Opps...!  You’ve Reached Your Limit 😢
            </h1>

            {/* Description */}
            <p className="text-gray-600">
              You’ve hit your companion limit. Upgrade to unlock more AI
              companions and access premium features built for advanced
              learners.
            </p>

            {/* CTA Button */}
            <Link
              href="/subscription"
              className="btn-primary w-fit mx-auto justify-center hover:scale-105 transition-transform duration-300"
            >
              🚀 Upgrade My Plan
            </Link>
          </article>
        </div>
      )}
    </>
  );
};

export default NewCompanion;
