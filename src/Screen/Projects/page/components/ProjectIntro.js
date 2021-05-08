import 'antd/dist/antd.css';
import '../page.css';

const ProjectIntro = ({ contents, logo }) => {
  const list = [
    ['포지션', contents.position],
    ['기간', contents.term],
    ['사용 스택', contents.stack],
  ];

  return (
    <div className='project'>
      <img
        className='project-background'
        src={contents.backgroundImg}
        alt='img'
      />
      <div className='project-intro'>
        <div className='project-intro-head'>
          <img
            className='project-intro-head-img'
            src={logo.img}
            style={{ width: logo.width, borderRadius: logo.radious }}
          />
        </div>
        <div className='project-intro-desc'>{contents.desc}</div>
        <div className='project-intro-contents'>
          {list.map((data) => (
            <div className='project-intro-contents-list'>
              <div className='project-intro-contents-list-title'>{data[0]}</div>
              <div className='project-intro-contents-list-stack'>{data[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectIntro;
