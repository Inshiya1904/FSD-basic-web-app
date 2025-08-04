const ApplicantCard = ({ applicant }) => (
  <div className="border p-4 rounded shadow mb-3">
    <h2 className="text-lg font-semibold">{applicant.name}</h2>
    <p><strong>Email:</strong> {applicant.email}</p>
    <p><strong>Phone:</strong> {applicant.phone}</p>
    <p><strong>Role:</strong> {applicant.role}</p>
    <p><strong>Motivation:</strong> {applicant.motivation}</p>
    <p className="text-sm text-gray-500">{new Date(applicant.createdAt).toLocaleString()}</p>
  </div>
);

export default ApplicantCard;
