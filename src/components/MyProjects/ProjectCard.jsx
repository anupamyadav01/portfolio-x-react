/* eslint-disable react/prop-types */

const ProjectCard = ({
  id,
  className,
  projectTitle,
  projectDesc,
  projectLink,
  deployedProjectLink,
  projectImg,
}) => {
  return (
    <div
      id={id}
      className={`p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 ${className}`}
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={projectImg}
          alt={`${projectTitle} image`}
        />
      </div>
      <div className="space-y-2">
        <div className="text-xl font-medium text-black">{projectTitle}</div>
        <p className="text-gray-500">{projectDesc}</p>
      </div>
      <div className="flex space-x-4">
        <a
          href={projectLink}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
        <a
          href={deployedProjectLink}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
