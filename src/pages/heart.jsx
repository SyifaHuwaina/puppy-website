import { useState } from "react";

const heartTypes = ["❤️", "💗", "💖", "💕", "💞", "💓"];

function Heart() {
  const [hearts, setHearts] = useState([]);

  const addHeart = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const randomHeart =
      heartTypes[Math.floor(Math.random() * heartTypes.length)];

    setHearts((prev) => [
      ...prev,
      {
        x,
        y,
        emoji: randomHeart,
        id: Date.now() + Math.random(),
      },
    ]);
  };

  return (
    <main className="heart-page">
      <div className="heart-card">
        <p className="page-tag">for my sweet puppy</p>

        <h1>💗 Fill Mommy's Heart</h1>

        <p className="heart-subtitle">
          Every click adds a little more love.
        </p>

        <p className="heart-counter">
          {hearts.length} little pieces of love collected
        </p>

        <div className="heart-box" onClick={addHeart}>
          {hearts.map((heart) => (
            <span
              key={heart.id}
              className="heart"
              style={{
                left: `${heart.x}px`,
                top: `${heart.y}px`,
              }}
            >
              {heart.emoji}
            </span>
          ))}
        </div>

        {hearts.length >= 25 && (
          <div className="love-secret">
            🐶 Good boy. You're filling my heart.
          </div>
        )}

        {hearts.length >= 50 && (
          <div className="love-secret">
            💌 Mommy is proud of you.
          </div>
        )}

        {hearts.length >= 75 && (
          <div className="love-secret">
            💙 You're so loved.
          </div>
        )}

        {hearts.length >= 100 && (
          <div className="love-secret special">
            💗 Congratulations, puppy. You've completely stolen my heart.
          </div>
        )}
      </div>
    </main>
  );
}

export default Heart;