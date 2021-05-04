import './index.css';
import ContactHead from './ContactHead';
import ClosingGreeting from './ClosingGreeting';
import SocialIcons from './SocialIcons';
import MyPhoneNumber from './MyPhoneNumber';

const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-wrapper'>
        <ContactHead />
        <ClosingGreeting />
        <SocialIcons />
        <MyPhoneNumber />
      </div>
    </div>
  );
};

export default Contact;
