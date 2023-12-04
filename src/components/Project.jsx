function Project({ title, deployedLink, github, subTitle, backgroundClass }) {
  return (
    <div className="project-block">
      <div
        className={
          backgroundClass
            ? "tile-background " + backgroundClass
            : "tile-background"
        }
      ></div>
      <div className="project-links">
        <a
          className="project-title"
          href={deployedLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Deployed Application Link"
        >
          {title}
        </a>
        <a
          className="github-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          title="Github Repository"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
        <div className="project-subtitle">{subTitle}</div>
      </div>
    </div>
  );
}

export default Project;
