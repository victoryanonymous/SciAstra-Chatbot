// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/chat", (req, res) => {
  const userMessage = req.body.user_message;
  const botMessage = generateResponse(userMessage);
  const messages = [
    { role: "user", text: userMessage },
    { role: "bot", text: botMessage },
  ];
  res.json({ messages });
});

function generateResponse(userMessage) {
  switch (userMessage.toLowerCase()) {
    case "hi":
      return "Hello! How can I help you with SciAstra today?";
    case "hello":
      return "Hello! How can I help you with SciAstra today?";
    case "what services do you offer?":
      return "SciAstra provides a range of scientific research and data analysis services.";
    case "how can I contact you?":
      return "You can contact us through our website or email us at info@sciastra.com.";
    case "when did sciastra's youtube channel start?":
      return "March 2021";
    case "how many mentors does sciastra have?":
      return "Over 60 mentors";
    case "what is sciastra's philosophy on education?":
      return "Education should go beyond cracking competitive exams, focusing on fostering critical thinking.";
    case "name some premier research institutes associated with sciastra":
      return "Harvard, Oxford, Max Planck, IISc, IISERs, etc.";
    case "what are the core services provided by sciastra?":
      return "Comprehensive guidance for institutes like IISERs, NISER, IISc Bangalore, ISI, CMI, and others. Assistance in research entrance exams.";
    case "how many selections has sciastra achieved in iisers?":
      return "Over 600+ selections.";
    case "what is sciastra's approach to student mentoring?":
      return "Moving beyond rote memorization for exam qualifications, guiding students to think like scientists.";
    case "how many students has sciastra mentored through its courses?":
      return "Over 10,000 students.";
    case "describe sciastra's active community":
      return "Over 1,00,000 dedicated students receiving career guidance and support.";
    case "what are the responsibilities of an intern working with sciastra?":
      return " Making new pages and changes to the website, regular updates, overall website maintenance, coordination for SEO.";
    case "name some skills required for the internship at sciastra":
      return "AWS, Bootstrap, CSS, HTML, JavaScript, jQuery, MySQL, Node.js, PHP, ReactJS, WordPress.";
    case "when is the duration of the work-from-home internship at sciastra?":
      return "Between 21st Dec'23 and 25th Jan'24 for a duration of 2 months.";
    case "what are some notable achievements in research entrance exams mentioned for sciastra?":
      return "AIR 1 in IAT, AIR 12 in NEST, AIR 13 in KVPY.";
    case "how has sciastra's youtube channel grown since its inception?":
      return "Started from a hostel room and a small channel, now includes over 60 mentors.";
    case "what is the significance of sciastra's focus on critical thinking in education?":
      return "Moving beyond rote memorization, aspiring to guide students to think like scientists.";
    case "thankyou":
      return "WelCome☺";
    default:
      return "I'm sorry, I didn't understand that. Please ask another question related to SciAstra.";
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
