import { useState } from 'react'
import { Link } from "react-router-dom";

import './App.css'


function App() {
  const [formData, setFormData] = useState({
  name: "",
  semester: "",
  course: "",
  instructor: "",
  q1: "",
  q2: "",
  q3: "",
  suggestion: ""
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
const handleSubmit = async () => {

  
  if (!formData.name || !formData.q1 || !formData.q2 || !formData.q3) {
    alert("Please fill all required fields!");
    return;
  }

  //  API call
  try {
    const response = await fetch("http://localhost:8080/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data);

    alert("Feedback submitted successfully!");

    //Clear form
    setFormData({
      name: "",
      semester: "",
      course: "",
      instructor: "",
      q1: "",
      q2: "",
      q3: "",
      suggestion: ""
    });

  } catch (error) {
    console.error(error);
  }
};


  return (
    <>
      <section id="feedback-header">
        <div className="feedback-form">
        </div>
        <div>
          <h1>Feedback form for Students</h1>
         
        <Link to="/users">
  <button>View All Feedback</button>
</Link>
        </div>
       
      </section>

       <section className='Student-info'>
        <div className='form-group'>
          <b>Student information</b><br />

         <label htmlFor="full-name">Full Name <t></t>: </label>
<input 
  type="text"
  name="name"
  placeholder="John Smith"
  onChange={handleChange}
/>
<br />
 <label htmlFor="full-name">Semester : </label>
<input 
  type="text"
  name="semester"
  placeholder="5th"
  onChange={handleChange}
/>
<br />
 <label htmlFor="Course">Course Title: </label>
<input 
  type="text"
  name="course"
  placeholder="B-tech"
  onChange={handleChange}
/><br />
<label htmlFor="Instructor">Instructors Name: </label>
<input 
  type="text"
  name="instructor"
  placeholder="Prof.H.C Varma"
  onChange={handleChange}
/><br /> 
        
        </div>
      </section>

      <section id="next-steps">
        <div id='criteria'>
          <b>Evaluation Criteria</b>
        <ol>
          <li>The course material were helpful and ralevant to the subject.</li>
        <label>
      <input type="radio" name="q1" value="Strongly Agree" onChange={handleChange} />
      Strongly Agree
      </label>
       <label>
      <input type="radio" name="q1" value="Agree" onChange={handleChange} />
      Agree
      </label>
      <label>
      <input type="radio" name="q1" value="Neutral" onChange={handleChange} />
      Neutral
      </label>
       <label>
      <input type="radio" name="q1" value="Disagree" onChange={handleChange} />
      Disagree
      </label>

          <li>The Instructor was well prepared and organized.</li>

           <label>
      <input type="radio" name="q2" value="Strongly Agree" onChange={handleChange} />
      Strongly Agree
      </label>
       <label>
      <input type="radio" name="q2" value="Agree" onChange={handleChange} />
      Agree
      </label>
      <label>
      <input type="radio" name="q2" value="Neutral" onChange={handleChange} />
      Neutral
      </label>
       <label>
      <input type="radio" name="q2" value="Disagree" onChange={handleChange} />
      Disagree
      </label>

          <li>The class discussion and interactions were productive.</li>

            <label>
      <input type="radio" name="q3" value="Strongly Agree" onChange={handleChange} />
      Strongly Agree
      </label>
       <label>
      <input type="radio" name="q3" value="Agree" onChange={handleChange} />
      Agree
      </label>
      <label>
      <input type="radio" name="q3" value="Neutral" onChange={handleChange} />
      Neutral
      </label>
       <label>
      <input type="radio" name="q3" value="Disagree" onChange={handleChange} />
      Disagree
      </label>
          <br />
          <li>Suggestions.</li>
          <textarea 
  name="suggestion"
  placeholder="What can we do better?"
  onChange={handleChange}
/>
        </ol>

        </div>
        <div id='submit'>
       <button 
  type="button"
  className="submit-btn"
  onClick={handleSubmit}
>
  Submit
</button>
        </div>
         
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
      <footer>© 2026 Feedback From </footer>
      
    </>
  );
}


export default App
