function Project({ title, deployedLink, github, subTitle, backgroundClass }) {
  return (
    <div className={backgroundClass ? "project-block " + backgroundClass : "project-block "}>
      <div className="project-links">
        <a
          className="project-title"
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <a
          className="github-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
        <div className="project-subtitle">{subTitle}</div>
      </div>

      {/* <div className="project-subtitle">{subTitle}</div> */}
    </div>
  );
}

export default Project;
