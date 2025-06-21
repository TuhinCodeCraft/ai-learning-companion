import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {
  getUserCompanions,
  getUserSessions,
  getBookmarkedCompanions,
} from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";

const Profile = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const companions = await getUserCompanions(user.id);
  const sessionHistory = await getUserSessions(user.id);
  const bookmarkedCompanions = await getBookmarkedCompanions(user.id);

  // at the top of the component:
/*const uniqueBookmarkedCompanions = bookmarkedCompanions.filter(
  (companion, index, self) =>
    index === self.findIndex((c) => c.id === companion.id)
);*/


  return (
    <main className="w-full max-w-5xl mx-auto p-6 space-y-10 animate-fade-in">
      {/* Profile Section */}
      <section className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          {/* Profile Image + Verified Badge */}
          <div className="relative w-[100px] h-[100px]">
            <Image
              src={user.imageUrl}
              alt="User Profile"
              fill
              className="rounded-full object-cover border-4 border-gray-400 shadow-xl hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-[2px] shadow-md">
              <Image
                src="/icons/verified.png"
                alt="Verified Badge"
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              👤 {user.firstName} {user.lastName}
            </h1>
            <p className="text-muted-foreground text-sm">
              📧 {user.emailAddresses?.[0]?.emailAddress}
            </p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="bg-blue-100 rounded-xl p-4 w-44 text-center shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-2">✅</div>
            <p className="text-2xl font-bold">{sessionHistory.length}</p>
            <p className="text-sm">Lessons Completed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 text-purple-900 rounded-xl p-4 w-44 text-center shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-2">🤖</div>
            <p className="text-2xl font-bold">{companions.length}</p>
            <p className="text-sm">Companions Created</p>
          </div>
          <div className="bg-yellow-100 text-yellow-900 rounded-xl p-4 w-44 text-center shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-2">📌</div>
            <p className="text-2xl font-bold">{bookmarkedCompanions.length}</p>
            <p className="text-sm">Bookmarks</p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <Accordion type="multiple" className="space-y-4">
       <AccordionItem value="bookmarks">
  <AccordionTrigger className="text-xl font-semibold text-left hover:text-gray-700 transition-colors duration-200">
    📌 Bookmarked Companions{" "}
    <span className="text-muted-foreground">
      {bookmarkedCompanions.length > 0
        ? `(${bookmarkedCompanions.length})`
        : "No bookmarks yet"}
    </span>
  </AccordionTrigger>
  <AccordionContent className="p-2 border-l border-yellow-300 bg-yellow-50 rounded-lg">
    <CompanionsList
      companions={bookmarkedCompanions}
      title="Bookmarked Companions"
    />
  </AccordionContent>
</AccordionItem>

        <AccordionItem value="recent">
          <AccordionTrigger className="text-xl font-semibold text-left hover:text-gray-700 transition-colors duration-200">
            🕒 Recent Sessions
          </AccordionTrigger>
          <AccordionContent className="p-2 border-l border-blue-200 bg-blue-50 rounded-lg">
            <CompanionsList
              title="Recent Sessions"
              companions={sessionHistory}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="companions">
          <AccordionTrigger className="text-xl font-semibold text-left hover:text-gray-700 transition-colors duration-200">
            🧑‍🏫 My Companions{" "}
            <span className="text-muted-foreground"></span>
          </AccordionTrigger>
          <AccordionContent className="p-2 border-l border-purple-200 bg-purple-50 rounded-lg">
            <CompanionsList title="My Companions" companions={companions} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Profile;