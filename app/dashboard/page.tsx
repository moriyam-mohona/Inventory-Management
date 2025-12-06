import Sidebar from "../components/sidebar";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentPath="/dashboard" />
    </div>
  );
}
