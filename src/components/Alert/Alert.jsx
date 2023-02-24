import { useState } from 'react';
import './Alert.css';

const Alert = ({ alertMessage }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseAlert = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="alert">
      <h2 className="alert__message">{alertMessage}</h2>
      <button
        onClick={handleCloseAlert}
        className="btn"
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
