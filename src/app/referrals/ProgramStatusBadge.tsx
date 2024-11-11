export default function ProgramStatusBadge() {
  return (
    <div className="relative bg-cyan-700 text-white text-sm font-semibold py-2 px-3 rounded-lg shadow flex items-center gap-2">
      <span className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse"></span>
        Active
      </span>
    </div>
  );
}
