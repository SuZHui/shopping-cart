import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function Empty() {
  return (
    <div className="empty">
      <div>
        <FontAwesomeIcon icon={faInbox} size="4x" />
      </div>
      <span>空空如也</span>
    </div>
  );
}
