export default function CVPage() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-8 md:pl-[320px] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/80 dark:bg-neutral-900/60 backdrop-blur p-4 sm:p-6 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">Curriculum Vitae</h1>
          <a href="/cv.pdf" download className="rounded-full border px-4 py-2 text-sm font-semibold border-black/20 text-neutral-900 hover:bg-black/[0.03] dark:border-white/30 dark:text-white dark:hover:bg-white/10">Download PDF</a>
        </div>
        <div className="mt-4 aspect-[1/1.414] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/15 bg-white dark:bg-neutral-900">
          <iframe src="/cv.pdf" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}


