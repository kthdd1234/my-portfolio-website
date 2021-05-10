import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../page.css';

const ProjectIntro = ({ contents, logo, link, history }) => {
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

      <div className='project-before' onClick={() => history.push(link.before)}>
        <LeftOutlined />
      </div>
      <div className='project-next' onClick={() => history.push(link.next)}>
        <RightOutlined />
      </div>

      <div className='project-intro'>
        <img
          className={`project-intro-${logo.width}-${logo.radius}`}
          src={logo.img}
        />

        <div className='project-intro-desc'>{contents.desc}</div>
        <div className='project-intro-contents'>
          {list.map((data, key) => (
            <div className='project-intro-contents-list' key={key}>
              <div className='project-intro-contents-list-title'>{data[0]}</div>
              <div className='project-intro-contents-list-stack'>{data[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectIntro);
