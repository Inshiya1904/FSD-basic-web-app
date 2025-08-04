import { useState } from 'react';
import API from '../service/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Intern',
    motivation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/applicants', formData);
      alert('Application submitted!');
      setFormData({ name: '', email: '', phone: '', role: 'Intern', motivation: '' });
    } catch (err) {
      alert('Submission failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Join Us — Intern or Volunteer
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            name="role"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="Intern">Intern</option>
            <option value="Volunteer">Volunteer</option>
          </select>
          <textarea
            name="motivation"
            placeholder="Why do you want to join?"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={formData.motivation}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
