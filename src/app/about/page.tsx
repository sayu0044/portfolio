import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="w-full px-4 sm:px-8 md:pl-[320px] py-8 sm:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-8 sm:p-10 shadow-sm">
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">About Me</h1>
          </div>

          <div className="mt-4 grid gap-8 md:grid-cols-2 items-start">
            {/* Bio */}
            <article className="prose prose-neutral dark:prose-invert max-w-none prose-sm">
              <p>
                Hi! My name is Sayu Dmar Yunan, or Sayu for short. I was born and raised in Surabaya, a city that is always bustling but full of stories in every corner. Currently, I &#39;am studying for a D4 degree in Information Technology at Airlangga University.
              </p>
              <p>
                Since I started college, I have always been interested in technology and design—two fields that seem different but actually complement each other. I love how the logic of programming can blend with the aesthetics of design to create something useful and beautiful to look at.
              </p>
              <p>
                During my studies in Computer Science, I have learned and developed various technical skills, such as Laravel, Flutter, Golang, Next.js, and interface design using Figma. In addition, I &#39;am also accustomed to working with PostgreSQL and MySQL to manage databases efficiently.
              </p>
              <p>
                For me, technology isn&#39;t just a bunch of codes and systems, but a way to make other people&#39;s lives easier and more meaningful. Looking ahead, I aspire to become a civil servant—because I want to contribute directly to society through a professional path. But on the other hand, I also want to build my own business, so I can create innovative solutions that benefit many people.
              </p>
            </article>

            {/* Stacked Image Cards (Right) */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64">
                <div className="absolute inset-0">
                  <div className="absolute top-3 left-3 w-full h-full rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-neutral-800 dark:to-neutral-700 shadow-md rotate-2" />
                  <div className="absolute top-1.5 left-1.5 w-full h-full rounded-xl bg-gradient-to-br from-green-100 to-teal-100 dark:from-neutral-800 dark:to-neutral-700 shadow-md -rotate-1" />
                  <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-lg">
                    <Image src="/images/hero/3.JPG" alt="Photo 3" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


