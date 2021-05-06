import { useEffect } from 'react';

const EducationIntro = () => {
  useEffect(() => {
    const educationIntroContainer = window.document.querySelector(
      '.education-intro'
    );

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            educationIntroContainer.style.opacity = 1;
            educationIntroContainer.style.transition = 'all 1s';
            educationIntroContainer.style.transform = 'translateX(-50px)';

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
    });
    observer.observe(educationIntroContainer);
  });

  return (
    <div className='education-intro'>
      <div className='education-intro-wrap'>
        <span className='education-intro-title'>EDUCATION</span>
      </div>
      <div className='education-contents'>
        <div>
          코드스테이츠의{' '}
          <span className='education-contents-course'>Immersive Course</span> 를
          수료한 경험을 가지고 있습니다.
        </div>
        <div>
          <span className='education-contents-stacks'>
            HTML, CSS, JavaScript, React
          </span>{' '}
          와 같은 개발 언어를 습득하였습니다.
        </div>
        <div>
          그리고 동기들과 함께 4주간의 팀 협업 프로젝트을 진행하였습니다.
        </div>
        <div>
          팀 프로젝트를 통해
          <span className='education-contents-skills'>
            {' '}
            협업능력 커뮤니케이션 문제해결능력{' '}
          </span>
          을 길렀습니다.
        </div>
        <div
          className='education-contents-link'
          onClick={() =>
            window.open(
              'https://www.codestates.com/course/software-engineering',
              '_blank'
            )
          }
        >
          {' '}
          https://www.codestates.com/course/software-engineering
        </div>
      </div>
    </div>
  );
};

export default EducationIntro;
