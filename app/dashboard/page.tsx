interface DashboardProps {
  onLogout: () => void;
}
export default function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="text-center p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-light text-gray-700 mb-4">You are logged in!</h2>
      <p className="text-gray-600 mb-6">
        This is a placeholder for your main dashboard content.
      </p>
      <button
        onClick={onLogout}
        className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
}