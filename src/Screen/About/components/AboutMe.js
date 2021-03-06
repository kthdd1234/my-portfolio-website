import { useEffect } from 'react';

const contents = [
  '안녕하세요. 주니어 프론트엔드 개발자 김동현입니다.',
  '주로 자바스크립트, 리액트를 사용하고 있습니다.',
  '최근에는 리액트 네이티브에 관심이 있습니다.',
  '개발을 통해 사용자에게 즐거움과 가치를 전달하고 싶으며',
  '사용자 입장에서 늘 고민하는 개발자가 되고 싶습니다.',
  '소통과 배움을 통해 꾸준히 성장하는 프론트엔드 개발자가 되겠습니다.',
];

const AboutMe = () => {
  useEffect(() => {
    const aboutContents = window.document.querySelector('.about-me-contents');
    const aboutMecontainer = window.document.querySelector('.about-me');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            aboutMecontainer.style.opacity = 1;
            aboutMecontainer.style.transition = 'all 1s';
            aboutMecontainer.style.transform = 'translateX(-50px)';

            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
    });

    observer.observe(aboutContents);
  });

  return (
    <div className='about-me'>
      <div className='about-me-sub'>
        <span className='about-me-sub-title'>ABOUT ME</span>
      </div>
      <div className='about-me-contents'>
        {contents.map((content, key) => (
          <div key={key}>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
