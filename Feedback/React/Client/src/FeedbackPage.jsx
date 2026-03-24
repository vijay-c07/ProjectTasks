import { useEffect, useState } from "react";
import { getFeedbacks } from "./Services/FeedbackServices";

function FeedbackPage() {

  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeedbacks()
      .then(res => {
        setFeedbacks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
  <div>
    <h2>All Feedback</h2>

    {loading ? (
      <p>Loading...</p>
    ) : (
      feedbacks.map((item) => (
        <div key={item._id} style={{
          border: "1px solid black",
          margin: "10px",
          padding: "10px"
        }}>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Semester:</b> {item.semester}</p>
          <p><b>Course:</b> {item.course}</p>
          <p><b>Instructor:</b> {item.instructor}</p>
          <p><b>Q1:</b> {item.q1}</p>
          <p><b>Q2:</b> {item.q2}</p>
          <p><b>Q3:</b> {item.q3}</p>
          <p><b>Suggestion:</b> {item.suggestion}</p>
        </div>
      ))
    )}
  </div>
);

}
export default FeedbackPage;