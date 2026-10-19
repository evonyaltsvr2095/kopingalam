export default function GalleryLoading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 flex flex-col items-center">
        <div className="h-4 w-24 animate-pulse rounded bg-light-grey" />
        <div className="mt-4 h-10 w-3/4 max-w-md animate-pulse rounded bg-light-grey md:h-12" />
        <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-light-grey" />
      </div>

      <div className="flex flex-col gap-16">
        {[1, 2].map((section) => (
          <div key={section}>
            <div className="mb-6 h-8 w-48 animate-pulse rounded bg-light-grey" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="overflow-hidden rounded-2xl border border-light-grey bg-white">
                  <div className="aspect-square w-full animate-pulse bg-light-grey" />
                  <div className="p-4">
                    <div className="h-5 w-2/3 animate-pulse rounded bg-light-grey" />
                    <div className="mt-2 h-4 w-full animate-pulse rounded bg-light-grey" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}