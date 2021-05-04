import { BoldOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';

const SocialIcons = () => {
  return (
    <div className='social-icon-box'>
      <GithubOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://github.com/kthdd1234', '_blank')}
      />

      <BoldOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://blog.naver.com/kthdd12', '_blank')}
      />

      <MailOutlined
        className='social-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('mailto:kthdd1234@gmail.com', '_blank')}
      />
    </div>
  );
};

export default SocialIcons;
