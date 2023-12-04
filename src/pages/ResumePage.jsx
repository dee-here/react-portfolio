export default function ResumePage() {
  return (
    <div className="page-container">
      Resume
      <div className="section">
        <a
          href="src/assets/resume/Deepak-Sinha-Resume.pdf"
          className="download-link"
          target="_blank"
        >
          Download resume<i className="fa-solid fa-file-arrow-down"></i>
        </a>
      </div>
      <div className="section">
        <div className="section-header">Front End skills</div>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>JS</li>
          <li>HTML/CSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="section">
        <div className="section-header">Back End skills</div>
        <ul>
          <li>Node</li>
          <li>NPM</li>
          <li>MongoDB</li>
          <li>MYSQL</li>
          <li>Express</li>
        </ul>
      </div>
    </div>
  );
}
