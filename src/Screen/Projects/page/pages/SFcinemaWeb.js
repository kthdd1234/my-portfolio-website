import ProjectNavBar from '../components/ProjectNavBar';
import ProjectIntro from '../components/ProjectIntro';
import ProjectGIF from '../components/ProjectGIF';

const Desc = () => {
  return (
    <div>
      사용자에게 다양한 <span className='project-intro-desc-sf'>SF</span> 영화를
      소개해주는 <span className='project-intro-desc-tomato'>웹사이트</span>
      입니다.
    </div>
  );
};

const s3 =
  'https://kimdonghyun-portfolio-image.s3.ap-northeast-2.amazonaws.com';

const project = {
  contents: {
    position: 'Full-Stack',
    term: '2020년 7월 7일 ~ ',
    stack: 'React • Node.js • AWS',
    desc: <Desc />,
    backgroundImg: `https://image.tmdb.org/t/p/original/pZvZjxPFfWWIwtPQodsNygQ6u5Z.jpg`,
  },
  logo: {
    img: `${s3}/SFCINEMALogo.png`,
    width: 'large',
    radius: 'circle',
  },
  link: {
    before: '/projects/meet-you',
    next: '/projects/sfcinema-app',
    more: 'https://github.com/kthdd1234/SF-CINEMA',
  },
  GIF1: {
    width: '67.5vw',
    title: '메인 화면',
    gif: `${s3}/sf-web-main.gif`,
    backgroundColor: '#202a45',
  },
  GIF2: {
    width: '67.5vw',
    title: '영화 정보 및 예고편',
    gif: `${s3}/sf-web-detail.gif`,
    backgroundColor: 'rgb(20, 21, 23)',
  },
};

const SFcinemaWeb = ({ history }) => {
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

export default SFcinemaWeb;
