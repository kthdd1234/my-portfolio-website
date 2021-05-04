import './index.css';
import CodeStateLogo from './CodeStateLogo';
import EducationIntro from './EducationIntro';
import DecorBottom from './DecorBottom';

const Education = () => {
  return (
    <div id='education' className='education-container'>
      <div className='education-wrap'>
        <CodeStateLogo />
        <EducationIntro />
      </div>
      <DecorBottom />
    </div>
  );
};

export default Education;
