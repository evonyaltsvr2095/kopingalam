export default function MenuLoading() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Skeleton Header */}
      <div className="mb-12 flex flex-col items-center">
        <div className="h-4 w-24 animate-pulse rounded bg-light-grey" />
        <div className="mt-4 h-10 w-3/4 max-w-md animate-pulse rounded bg-light-grey md:h-12" />
        <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-light-grey" />
      </div>

      {/* Skeleton Grid */}
      <div className="flex flex-col gap-16">
        {[1, 2, 3].map((section) => (
          <div key={section}>
            <div className="mb-6 h-8 w-48 animate-pulse rounded bg-light-grey" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex h-32 flex-col gap-3 rounded-2xl border border-light-grey bg-white p-5">
                  <div className="h-6 w-1/2 animate-pulse rounded bg-light-grey" />
                  <div className="h-4 w-full animate-pulse rounded bg-light-grey" />
                  <div className="mt-auto h-4 w-1/3 animate-pulse rounded bg-light-grey" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}