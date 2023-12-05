import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LinkedInIcon = ({ profileUrl }) => {
    return (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}  />
        </a>
      );
};

export default LinkedInIcon;