import { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./rs.css";
import { House } from "lucide-react";
import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RsvpForm = () => {
  const [attendance, setAttendance] = useState("");
  const [plusOne, setPlusOne] = useState("");
  const [fullName, setFullName] = useState("");
  const [dietary, setDietary] = useState("");
  const [plusOneName, setPlusOneName] = useState("");
  const [message, setMessage] = useState("");

  // Errors
  const [errors, setErrors] = useState({});

  // Validation Logic
  const validate = () => {
    let temp = {};

    if (!fullName.trim()) temp.fullName = "Full Name is required";

    if (!attendance) temp.attendance = "Please select attendance";

    if (attendance === "accept" && plusOne === "") {
      temp.plusOne = "Please select plus one option";
    }

    if (attendance === "accept" && plusOne === "yes" && !plusOneName.trim()) {
      temp.plusOneName = "Plus One Name is required";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    await addDoc(collection(db, "rsvp"), {
      fullName,
      attendance,
      plusOne,
      plusOneName: plusOne === "yes" ? plusOneName : "",
      dietary: attendance === "accept" ? dietary : "",
      message,
      createdAt: new Date(),
    });

    toast.success("RSVP Submitted Successfully!");

    // Clear fields
    setFullName("");
    setAttendance("");
    setPlusOne("");
    setPlusOneName("");
    setDietary("");
    setMessage("");
    setErrors({});
  } catch (error) {
    toast.error("Error submitting RSVP");
    console.log(error);
  }
};


  return (
    <div className="rsvps tex">
      <div className="home_section">
        <div className="homer">
          <a href="/">

          <House color="#fff" size={15} />
          </a>
        </div>
        <div className="homer">/</div>
        <div className="homer">
          <h2 className="tt">rsvp</h2>
        </div>
      </div>

      <div className="rsvp_container">
        <h2 className="rsvp_titles">rsvp</h2>
        <div className="line"></div>

        <form className="rsvp_form" onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <div className="form_input_section">
            <label className="rsvp_label">Full Name</label>
            <input
              type="text"
              className="rsvp_input"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          {/* ATTENDANCE */}
          <div className="form_input_section">
            <label className="rsvp_label">Will you be attending?</label>
<ToastContainer 
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>

            <div className="former">
              <input
                type="radio"
                id="attend_accept"
                name="attend"
                value="accept"
                checked={attendance === "accept"}
                onChange={(e) => {
                  setAttendance(e.target.value);
                  setPlusOne("");
                }}
              />
              <label htmlFor="attend_accept" className="form_label">
                Accepts with pleasure
              </label>
            </div>

            <div className="former">
              <input
                type="radio"
                id="attend_decline"
                name="attend"
                value="decline"
                checked={attendance === "decline"}
                onChange={(e) => {
                  setAttendance(e.target.value);
                  setPlusOne("");
                }}
              />
              <label htmlFor="attend_decline" className="form_label">
                Declines with regret
              </label>
            </div>

            {errors.attendance && (
              <span className="error">{errors.attendance}</span>
            )}
          </div>

          {/* SHOW ONLY IF ACCEPT */}
          {attendance === "accept" && (
            <>
              {/* PLUS ONE */}
              <div className="form_input_section">
                <label className="rsvp_label">Would you like a plus one?</label>

                <div className="former">
                  <input
                    type="radio"
                    id="plus_yes"
                    name="plusone"
                    value="yes"
                    checked={plusOne === "yes"}
                    onChange={(e) => setPlusOne(e.target.value)}
                  />
                  <label htmlFor="plus_yes" className="form_label">
                    Yes
                  </label>
                </div>

                <div className="former">
                  <input
                    type="radio"
                    id="plus_no"
                    name="plusone"
                    value="no"
                    checked={plusOne === "no"}
                    onChange={(e) => setPlusOne(e.target.value)}
                  />
                  <label htmlFor="plus_no" className="form_label">
                    No
                  </label>
                </div>

                {errors.plusOne && (
                  <span className="error">{errors.plusOne}</span>
                )}
              </div>

              {/* PLUS ONE NAME */}
              {plusOne === "yes" && (
                <div className="form_input_section">
                  <label className="rsvp_label">Plus One Full Name</label>
                  <input
                    type="text"
                    className="rsvp_input"
                    value={plusOneName}
                    onChange={(e) => setPlusOneName(e.target.value)}
                  />
                  {errors.plusOneName && (
                    <span className="error">{errors.plusOneName}</span>
                  )}
                </div>
              )}

              {/* DIETARY */}
              <div className="form_input_section">
                <label className="rsvp_label">
                  Allergies / Dietary Restrictions
                </label>
                <input
                  type="text"
                  className="rsvp_input"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                />
              </div>
            </>
          )}

          {/* MESSAGE */}
          <div className="form_input_section">
            <label className="rsvp_label">Message to the Couple</label>
            <textarea
              rows={10}
              className="rsvp_input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit" className="submit_btn">
            Submit RSVP
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default RsvpForm;
