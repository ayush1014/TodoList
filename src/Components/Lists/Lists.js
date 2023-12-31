import "./Lists.css";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const List = ({ todolist, handleToggle, handleDelete }) => {
  return (
    <>
      <ul className="list">
        {todolist.map((listItem) => (
          <li key={listItem.id} className={listItem.done ? "done" : ''}>
            <span>{listItem.item}</span>
            <span className="actions">
              {
                listItem.done ? <CancelIcon onClick={() => handleToggle(listItem.id)} style={{ fontSize: '4.5vh', margin: 'auto' }} /> : <CheckCircleIcon onClick={() => handleToggle(listItem.id)} style={{ fontSize: '4.5vh', margin: 'auto' }} />
              }
              <DeleteForeverIcon onClick={() => handleDelete(listItem.id)}
                style={{ fontSize: '5vh', margin: 'auto', paddingLeft: '3vh' }} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
// JSON.parse(localStorage.getItem("TodoList"))