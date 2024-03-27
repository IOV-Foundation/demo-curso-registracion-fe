// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden bg-gray-100 p-2`}>
      <div className="my-4 grid grid-cols-2 gap-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
      <div className="my-4 grid grid-cols-2 gap-4">
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
        <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
      </div>
    </div>
  );
}
