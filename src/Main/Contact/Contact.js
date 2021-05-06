import ContactTitle from './components/ContactTitle';
import ClosingGreeting from './components/ClosingGreeting';
import Icons from './components/Icons';
import PhoneNumber from './components/PhoneNumber';
import './Contact.css';

const Contact = () => {
  return (
    <div id='focus-contact' className='contact'>
      <ContactTitle />
      <ClosingGreeting />
      <Icons />
      <PhoneNumber />
    </div>
  );
};

export default Contact;
