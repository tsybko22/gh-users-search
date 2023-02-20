import { useAlert } from '../../context/AlertContext';
import './Alert.css';

const Alert = ({ alertMessage }) => {
  const { isVisible, handleToggleAlert } = useAlert();

  if (!isVisible) {
    return null;
  }

  return (
    <div className="alert">
      <h2 className="alert__message">{alertMessage}</h2>
      <button
        onClick={handleToggleAlert}
        className="btn"
      >
        Close
      </button>
    </div>
  );
};

export default Alert;
