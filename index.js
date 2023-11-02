document.addEventListener('DOMContentLoaded', function () {
  const projectButton = document.querySelector('.project_btn');
  const projectSection = document.querySelector('.project');

  if (projectButton && projectSection) {
    projectButton.addEventListener('click', function () {
      projectSection.scrollIntoView({
        behavior: 'smooth',
      });
    });
  }
});