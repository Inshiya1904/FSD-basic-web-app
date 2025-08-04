import { useEffect, useState } from 'react';
import ApplicantCard from '../components/ApplicantCard';
import API from '../service/api';

const Admin = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await API.get('/applicants');
        setApplicants(res.data);
      } catch (err) {
        alert("Failed to fetch applicants.");
      }
    };
    fetchApplicants();
  }, []);

  return (
    <div className="min-h-screen mt-10 bg-gray-100 p-4 sm:p-6 lg:p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Admin Panel – Applicants
        </h2>

        {applicants.length === 0 ? (
          <p className="text-center text-gray-500">No applicants found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto pr-2">
            {applicants.map((applicant) => (
              <ApplicantCard key={applicant._id} applicant={applicant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
