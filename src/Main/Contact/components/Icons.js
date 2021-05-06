import { BoldOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';

const Icons = () => {
  return (
    <div className='contact-icons'>
      <GithubOutlined
        className='contact-icons-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://github.com/kthdd1234', '_blank')}
      />

      <BoldOutlined
        className='contact-icons-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('https://blog.naver.com/kthdd12', '_blank')}
      />

      <MailOutlined
        className='contact-icons-icon'
        style={{ color: 'gray' }}
        onClick={() => window.open('mailto:kthdd1234@gmail.com', '_blank')}
      />
    </div>
  );
};

export default Icons;
