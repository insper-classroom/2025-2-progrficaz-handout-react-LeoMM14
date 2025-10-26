import "./index.css";
import { Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div className="card">
      {/* Botão visual de lixeira (apenas HTML/CSS) */}
      <button
        type="button"
        className="note-trash"
        aria-label="Deletar nota"
        title="Deletar nota"
        onClick={() => props.deleteNote(props.id)} // chama deletaNota(id)
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        </svg>
      </button>

      <h3 className="card-title">{props.title}</h3>
      <Link to={`edit/${props.id}`}>✏️</Link>
      <div className="card-content">{props.children}</div>
    </div>
  );
}