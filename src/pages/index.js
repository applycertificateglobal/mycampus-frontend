export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-700">Welcome to CampusVibe 🚀</h1>
      <p className="mt-4 text-lg">Explore real campus life by visiting:</p>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        <li>/university/[id] — for university details</li>
        <li>/booking — for booking ambassadors</li>
      </ul>
    </div>
  );
}
