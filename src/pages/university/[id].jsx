import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getUniversities } from "@/api/university";
import { getAmbassadors } from "@/api/ambassador";

export default function UniversityDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [university, setUniversity] = useState(null);
  const [ambassadors, setAmbassadors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const uniData = await getUniversities();
        const ambassadorData = await getAmbassadors();

        const selectedUniversity = uniData.data.find(
          (item) => item.id.toString() === id
        );

        const matchedAmbassadors = ambassadorData.data.filter(
          (amb) => amb.attributes.university?.data?.id.toString() === id
        );

        setUniversity(selectedUniversity);
        setAmbassadors(matchedAmbassadors);
      } catch (err) {
        console.error("Error loading data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div className="p-10 text-xl">Loading...</div>;
  if (!university) return <div className="p-10 text-red-600">University not found</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{university.attributes.name}</h1>

      {ambassadors.length > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Connect with Ambassadors:</h2>
          <ul className="list-disc pl-5">
            {ambassadors.map((amb) => (
              <li key={amb.id}>
                {amb.attributes.name} ({amb.attributes.email})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-4 p-4 border rounded bg-yellow-100">
          No ambassador assigned yet. Fill the form below to request info.
        </div>
      )}
    </div>
  );
}
