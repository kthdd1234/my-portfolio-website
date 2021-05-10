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

const s3 =
  'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com';

const project = {
  contents: {
    position: 'Back-End',
    term: '2020년 6월 1일 ~ 6월 30일',
    stack: 'Node.js • Express • Sequelize',
    desc: <Desc />,
    backgroundImg: `${s3}/couple.jpg`,
  },
  logo: {
    img: `${s3}/meet-youLogo(%E1%84%91%E1%85%A7%E1%86%AB%E1%84%8C%E1%85%B5%E1%86%B8).png`,
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
    gif: `${s3}/meet-you-mainscreen.gif`,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '20rem',
    title: '포인트 사용 및 채팅',
    gif: `${s3}/meet-you-chat.gif`,
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
