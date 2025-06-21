import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-1/3 h-full flex flex-col items-center gap-2.5">
      <section className="cta-section w-full">
        <div className="cta-badge"> Start learning your next skill today! </div>

        <h2 className="text-3xl font-bold">
          Build and Personalize Learning Companion
        </h2>
        <p>
          Pick a name, subject, voice, & personality - and start learning
          through voice conversations that feel natural and fun.
        </p>

        <Image src="images/cta.svg" alt="CTA Image" width={362} height={232} />
      </section>
      <button className="bg-yellow-300 border-[3px] border-black px-4 py-2 flex items-center gap-2 shadow-[4px_4px_0_0_black] font-mono font-bold text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_black] transition-all">
        <Image src="/icons/plus.svg" alt="Plus Icon" width={12} height={12}/>
        <Link href="/companions/new">
          <p className="text-sm uppercase">Build a new Companion</p>
        </Link>
      </button>
    </div>
  );
};

export default CTA;
