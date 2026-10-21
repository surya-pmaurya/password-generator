function RefreshButton({ onClick, className = "", label = "Refresh" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Generate new password"
      aria-label="Generate new password"
      className={`group flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium px-3.5 py-2 transition cursor-pointer border-l border-gray-600 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45 group-active:-rotate-180"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
      {label && <span>{label}</span>}
    </button>
  );
}

export default RefreshButton;

