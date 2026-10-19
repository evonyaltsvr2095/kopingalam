export default function EventsLoading() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Skeleton Header */}
      <div className="mb-12 flex flex-col items-center">
        <div className="h-4 w-24 animate-pulse rounded bg-light-grey" />
        <div className="mt-4 h-10 w-3/4 max-w-md animate-pulse rounded bg-light-grey md:h-12" />
        <div className="mt-4 h-4 w-full max-w-lg animate-pulse rounded bg-light-grey" />
      </div>

      {/* Skeleton Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex h-64 flex-col gap-4 rounded-2xl border border-light-grey bg-white p-6">
            <div className="flex justify-between gap-4">
              <div className="h-6 w-2/3 animate-pulse rounded bg-light-grey" />
              <div className="h-6 w-16 animate-pulse rounded-full bg-light-grey" />
            </div>
            <div className="h-4 w-full animate-pulse rounded bg-light-grey" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-light-grey" />
            <div className="mt-auto space-y-2">
              <div className="h-4 w-1/2 animate-pulse rounded bg-light-grey" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-light-grey" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}