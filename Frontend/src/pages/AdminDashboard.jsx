import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantCard from '../components/ApplicantCard';
import API from '../service/api';

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          alert('Unauthorized. Please login.');
          return navigate('/admin');
        }

        const res = await API.get('/applicants', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApplicants(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch applicants. Please check your token or try again later.');
        navigate('/admin'); // Optional: force logout on token failure
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [navigate]);

  return (
    <div className="min-h-screen mt-10 bg-gray-100 p-4 sm:p-6 lg:p-10">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Admin Panel – Applicants
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading applicants...</p>
        ) : applicants.length === 0 ? (
          <p className="text-center text-gray-500">No applicants found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto pr-2">
            {applicants.map((applicant) => (
              <ApplicantCard key={applicant._id} applicant={applicant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
