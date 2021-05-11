import couple from '../../../../gallery/couple.jpg';
import meetyou_logo from '../../../../gallery/meet-youLogo.png';
import meetyou_main from '../../../../gallery/meet-you-mainscreen.gif';
import meetyou_chat from '../../../../gallery/meetyou-chat.gif';
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectIntro from '../components/ProjectIntro';
import ProjectGIF from '../components/ProjectGIF';

const Desc = () => {
  return (
    <div>
      이성간에 서로의 관심사에 맞춰 추천해주는
      <span style={{ color: 'tomato' }}> 소개팅 앱</span>
      입니다.
    </div>
  );
};

const project = {
  contents: {
    position: 'Back-End',
    term: '2020년 6월 1일 ~ 6월 30일',
    stack: 'Node.js • Express • Sequelize',
    desc: <Desc />,
    backgroundImg: couple,
  },
  logo: {
    img: meetyou_logo,
    width: 'large',
    radius: 'round',
  },
  link: {
    before: '/projects/your-tube',
    next: '/projects/sfcinema-web',
    more: 'https://github.com/kthdd1234/Meet-You_server/tree/master',
  },
  GIF1: {
    width: '20rem',
    title: '메인 화면',
    gif: meetyou_main,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '20rem',
    title: '포인트 사용 및 채팅',
    gif: meetyou_chat,
    backgroundColor: 'rgb(20, 21, 23)',
  },
};

const Meetyou = ({ history }) => {
  return (
    <div>
      <ProjectNavBar more={project.link.more} history={history} />
      <ProjectIntro
        contents={project.contents}
        logo={project.logo}
        link={project.link}
        history={history}
      />
      <ProjectGIF GIF={project.GIF1} />
      <ProjectGIF GIF={project.GIF2} />
    </div>
  );
};

export default Meetyou;
