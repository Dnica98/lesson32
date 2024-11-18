import EditIconSrc from '../../components/assets/file-edit.png';
import DeleteIconSrc from '../../components/assets/delete-icon.png';
import { Icon } from '../Icon';
import './styles.css';

const ListItem = ({ title, done, editAction }) => {
    return (
        <li
            className={done ? 'listItem' : ''}
        >
            {title}
            <div onClick={editAction}>
                <Icon src={EditIconSrc} />
            </div>
            <Icon src={DeleteIconSrc} />
        </li>
    )
}

export default ListItem;