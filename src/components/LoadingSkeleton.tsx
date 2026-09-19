export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-gray-800 bg-gray-900 p-5 animate-pulse"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gray-800" />
            <div className="flex-1">
              <div className="h-3 w-20 bg-gray-800 rounded mb-2" />
              <div className="h-4 w-32 bg-gray-800 rounded" />
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="h-3 w-full bg-gray-800 rounded" />
            <div className="h-3 w-3/4 bg-gray-800 rounded" />
          </div>
          <div className="flex gap-2 mb-4">
            <div className="h-5 w-16 bg-gray-800 rounded-md" />
            <div className="h-5 w-14 bg-gray-800 rounded-md" />
            <div className="h-5 w-12 bg-gray-800 rounded-md" />
          </div>
          <div className="flex items-center justify-between pt-3 border-t border-gray-800">
            <div className="flex gap-4">
              <div className="h-4 w-12 bg-gray-800 rounded" />
              <div className="h-4 w-10 bg-gray-800 rounded" />
            </div>
            <div className="h-4 w-16 bg-gray-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
