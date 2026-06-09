import { useState } from "react";

const compliments = [
  "You are adorable.",
  "You are talented.",
  "You are such a good boy.",
  "You are doing so well.",
  "You are so loved.",
  "You are my sweet puppy.",
  "I am proud of you.",
  "You make my days better.",
];

function Compliments() {
  const [notes, setNotes] = useState(
    compliments.map((text, index) => ({
      text,
      x: 0,
      y: 0,
      id: index,
    }))
  );

  const moveNote = (event, id) => {
    const startX = event.clientX;
    const startY = event.clientY;

    const selectedNote = notes.find((note) => note.id === id);
    const originalX = selectedNote.x;
    const originalY = selectedNote.y;

    const onMouseMove = (moveEvent) => {
      const newX = originalX + moveEvent.clientX - startX;
      const newY = originalY + moveEvent.clientY - startY;

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === id ? { ...note, x: newX, y: newY } : note
        )
      );
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <main className="compliments-page">
      <section className="corkboard">
        <div className="board-header">
          <p className="page-tag">tiny notes for you</p>
          <h1>🌟 Compliments Board</h1>
          <p>Drag the little notes around, puppy.</p>
        </div>

        <div className="sticky-notes">
          {notes.map((note, index) => (
            <div
              className={`sticky-note note-${index + 1}`}
              key={note.id}
              onMouseDown={(event) => moveNote(event, note.id)}
              style={{
                transform: `translate(${note.x}px, ${note.y}px)`,
              }}
            >
              <span className="pin"></span>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Compliments;