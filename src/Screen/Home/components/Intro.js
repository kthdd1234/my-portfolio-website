import { useEffect } from 'react';

const Intro = () => {
  useEffect(() => {
    const element_1 = window.document.querySelector('.home-intro-me1');
    const element_2 = window.document.querySelector('.home-intro-me2');

    const effectElement = (element) => {
      element.style.opacity = 1;
      element.style.transition = 'all 1s';
      element.style.transform = 'translateY(-20px)';
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            effectElement(element_1);
            window.setTimeout(() => effectElement(element_2), 500);
            observer.unobserve(entry.target);
          }
        },
        { threshole: 0.5 }
      );
    });

    observer.observe(element_1);
    observer.observe(element_2);
  });
  return (
    <div className='home-intro'>
      <div className='home-intro-me1'>프론트엔드 개발자 김동현입니다.</div>
      <div className='home-intro-me2'>
        어제 보다는 오늘, 오늘 보다는 내일의{' '}
        <span className='home-intro-me2-mid'>
          미래를 향해 달려가는 개발자 김동현입니다.
        </span>
      </div>
    </div>
  );
};

export default Intro;
