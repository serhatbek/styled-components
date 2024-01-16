import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './SocialIcons.styled';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <ul>
        <li>
          <a href='https://facebook.com/'>
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href='https://linkedin.com/'>
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
