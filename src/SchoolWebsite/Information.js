
import React, { useState } from 'react';
import axios from 'axios';
 
const Information = () => {
  const initialFormData = {
    studentName: '',
    email: '',
    mobileNumber: '',
    gender: '',
    bloodGroup: '',
    transportOption: '',
    standard: '',
    address: '',
    terms: false,
    parentName: '',
    parentOccupation:'',
    healthInstructions:'',
    studentImage:'',
    birthCertificate:'',
    Aadharcard:''
   
  };
 
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(null);
 
  const handleChange = (e) => {
    const { studentName, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
 
    setFormData((prevFormData) => ({
      ...prevFormData,
      [studentName]: val,
    }));
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('Admission.php', formData);
      console.log('Response:', response.data);
      if (response.data === "SUCCESS") {
        setSubmitted('success');
        setFormData(initialFormData); // Reset form data after successful submission
      } else {
        setSubmitted('error');
      }
    } catch (error) {
      console.error('There was an error!', error);
      setSubmitted('error');
    }
    // console.log('hello')
  };
 
  return (
    <div className='bg-slate-200'>
      <div className="text-lg text-gray-700 mb-6 text-center">
        <h1 className="text-3xl font-semibold font-serif text-gray-800 mb-6">Admission Process</h1>
        <p className="text-xl text-center mb-12">
          We're delighted that you're considering Prabhuram Gurukul School for your child's education. Prabhuram Gurukul aims to create a nurturing and holistic educational environment that promotes intellectual growth, cultural appreciation, personal development, and overall well-being of students, preparing them to become responsible, confident, and capable individuals.
        </p>
        <p className='text-xl text-center mb-12'>
          To begin the admission process, please fill out the form below
        </p>
      </div>
      <div className=" text-left mt-8 border-radius: 1rem">
        <form onSubmit={handleSubmit} className="bg-sky-950 shadow-md rounded-2xl  mb-4">
          {/* studentName */}
        <div className='grid-flow-row'>
         <div className='pt-2 flex space-x-3 mr-2'>
         <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="name">
              Student Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="studentName"
              type="text"
              placeholder="student Name"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              pattern="^[A-Za-z\s]+$"
              title="Enter only alphabets."
            />
          </div>
          {/* Email */}
          <div className="w-1/2 ml-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Enter a valid email address in the format test@gmail.com."
            />
          </div>
         </div>
         <div className='flex space-x-3 mr-2'>
          {/* Mobile Number */}
          <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobileNumber"
              type="text"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              title="Enter a 10-digit mobile number."
            />
          </div>
          {/* Gender */}
          <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              {/* <option value="other">Other</option> */}
            </select>
          </div>
          </div>
          
          <div className='flex space-x-3 mr-2'>
          {/* Blood Group */}
          <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="bloodGroup">
              Blood Group
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bloodGroup"
              type="text"
              placeholder="Blood Group"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
            />
          </div>
          {/* Transport Option */}
          {/* <div className="mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="transportOption">
              Transport Option
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="transportOption"
              name="transportOption"
              value={formData.transportOption}
              onChange={handleChange}
              required
            >
              <option value="">Select Transport Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div> */}
          {/* Standard */}
          <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="standard">
              Age
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="standard"
              name="standard"
              value={formData.standard}
              onChange={handleChange}
              required
            >
              <option value="">Select Age</option>
              <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
             
            </select>
          </div>
          </div>

          <div className='flex space-x-3 mr-2'>
            {/* Parent name */}
            <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="parentName">
              Parent Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentName"
              type="text"
              placeholder="Parent Name"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              pattern="^[A-Za-z\s]+$"
              title="Enter only alphabets."
            />
           </div>
           {/* parent Occupation */}
           <div className="w-1/2 mx-2 mt-4 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="parentOccupation">
            Parent Occupation
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="parentOccupation"
              type="text"
              placeholder="Parent Occupation"
              name="parentOccupation"
              value={formData.parentOccupation}
              onChange={handleChange}
              required
              pattern="^[A-Za-z\s]+$"
              title="Enter a only alphabets"
             />
            </div>
          </div>
          {/* Address */}
          <div className="mx-2 mb-4">
            <label className="block text-white text-lg font-serif font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <div className='mx-2 mb-4'>
            <label className='block text-white text-lg font-serif font-bold mb-2' htmlFor="healthInstructions">
              Health History & Care Instructions</label>
              <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="healthInstructions"
              placeholder="Give the information about Medical History of student, Any Allergy, Special Care or Advice "
              name="healthInstructions"
              value={formData.healthInstructions}
              onChange={handleChange}
              required
              ></textarea>
          </div>
          
          <div className='mx-2 flex justify-between mb-2'>

            {/* Student Images */}
          <div className='w-[25%] mx-2 mb-4'>
            <label className='block text-white text-lg font-serif font-bold mb-2' htmlFor="studentImage">
            Student Image</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-cyan-100 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="studentImage"
            type="file"
            name="studentImage"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            ></input>
          </div>

          {/* Birth certificate */}
          <div className='w-[25%] mx-2 mb-4'>
            <label className='block text-white text-lg font-serif font-bold mb-2' htmlFor="birthCertificate">
            Birth Certificate</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-cyan-100 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="birthCertificate"
            type="file"
            name="birthCertificate"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            ></input>
          </div>

          {/* Aadhar card */}
          <div className='w-[25%] mx-2 mb-4'>
            <label className='block text-white text-lg font-serif font-bold mb-2' htmlFor="Aadharcard">
            Aadhar Card</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-cyan-100 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="Aadharcard"
            type="file"
            name="Aadharcard"
            accept=".jpg, .jpeg, .png"
            onChange={handleChange}
            ></input>
          </div>
          </div>
          
          {/* New Field */}
       



          {/* Terms and Conditions */}
          <div className="mx-2 block text-white text-lg font-serif font-bold mb-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2 leading-tight"
              required
            />
            <label htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
 
 
         
 
         {submitted === 'success' && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
              <p>Form submitted successfully!</p>
            </div>
          )}
          {submitted === 'error' && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
              <p>There was an error submitting the form!</p>
            </div>
          )}
 
 
          {/* Submit Button */}
          <div className="flex items-center justify-center mt-6 pb-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white object-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              name="Send"
              id="Send"
              value="Send"
            >
              Submit
            </button>
          </div>
       
        </form>
      </div>
      {/* Additional content */}
      <div>
        <div className="bg-slate-100 rounded-lg text-left shadow-lg pl-6 mt-6 ">
          <h2 className="text-2xl font-semibold text-gray-800 font-serif mb-4">Eligibility</h2>
          <ul className="list-disc pl-6 text-gray-700">
          <li> Children Age Group 2.5 years to 7 years</li>
          </ul>
        </div>
       
        <div className="bg-slate-100 rounded-lg text-left shadow-lg p-6 ">
          <h2 className="text-2xl font-semibold text-gray-800 font-serif mb-4">Documents for Submission</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Filled up registration form</li>
            <li>Copy of birth certificate</li>
            <li>Copy of Aadhar card</li>
            <li>Transfer certificate, progress sheet of the last examination taken</li>
            <li>Official copy of reports/marks card from previous school</li>
            <li>Four passport size photographs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
 
export default Information;
 