import { useState } from "react";

const letters = [
  {
    title: "Open when you miss me",
    emoji: "💌",
    content: `Hi puppy,

If you're reading this, I'm guessing you miss me a little right now.

I wish I could be there with you, sitting beside you, listening to whatever is on your mind. Maybe we'd be talking, maybe we'd just be quietly existing together.

Until then, please remember that even if I'm not physically there, you're still very important to me.

Now come here and accept your virtual hug.

Love,
💙 Mommy`,
  },
  {
    title: "Open when you're sad",
    emoji: "🌧️",
    content: `Hi puppy,

I'm sorry you're having a hard time.

Please don't forget that one bad day doesn't define you. You're allowed to rest, be upset, and take your time.

I'm proud of you for making it this far.

One step at a time, okay?

💙`,
  },
  {
    title: "Open when you can't sleep",
    emoji: "🌙",
    content: `Hi puppy,

Still awake?

Go get some water first. Seriously.

Now get comfortable and relax your shoulders. You've made it through today, and that's enough.

If I was there, I'd probably be talking softly to you until you fell asleep.

Sleep well, puppy.

💙 Mommy`,
  },
  {
    title: "Open when you're overthinking",
    emoji: "💙",
    content: `Hi puppy,

Your brain is probably being mean to you right now.

Take a second and breathe.

Not everything needs an answer tonight. You don't have to be perfect. You don't have to earn love.

You're enough exactly as you are.

Please be a little kinder to yourself.

💙`,
  },
  {
    title: "Open when you need praise",
    emoji: "🐶",
    content: `Good boy.

Yes, this entire letter is dedicated to telling you that.

I'm proud of how hard you try. I'm proud of the effort you put into the things you care about. And I'm proud of you even on days where you don't feel productive.

Now accept your praise.

You earned it.

💙 Mommy`,
  },
  {
    title: "Open when you had a bad day",
    emoji: "⭐",
    content: `Hi puppy,

Some days just suck.

And honestly? That's okay.

You don't need to pretend you're fine. Take a break, listen to music, play a game, and rest.

Tomorrow is a completely new day.

For now, focus on being gentle with yourself.

💙`,
  },
  {
    title: "Open when you're playing guitar",
    emoji: "🎸",
    content: `Hi puppy,

If you're holding your guitar right now, I hope you're having fun.

One of my favourite things about you is how passionate you get when it comes to music.

I love hearing you talk about guitar. I love seeing how excited you get.

Keep playing, guitarist.

💙`,
  },
  {
    title: "Open when you're happy",
    emoji: "☀️",
    content: `Hi puppy,

If you're happy right now, then I'm smiling too.

I hope you're enjoying this moment.

You deserve good things. You deserve to laugh. You deserve to feel proud of yourself.

And later, I expect a full report on whatever made you happy.

💙`,
  },
  {
    title: "Open when you need love",
    emoji: "💖",
    content: `Hi puppy,

In case nobody reminded you today:

You are loved.
You are appreciated.
You are important.

You make my days brighter and you make me smile more than you probably realize.

I'm very grateful that you're in my life.

I love you.

💙 Mommy`,
  },
];

function OpenWhen() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [openedCount, setOpenedCount] = useState(0);

  const openLetter = (letter) => {
    setSelectedLetter(letter);
    setOpenedCount((count) => count + 1);
  };

  return (
    <main className="openwhen-page">
      <section className="openwhen-header">
        <p className="page-tag">letters for different moments</p>
        <h1>📬 Open When...</h1>
        <p>Click an envelope whenever you need a little piece of me.</p>

        <div className="opened-counter">
          {openedCount} letters opened
        </div>
      </section>

      <section className="letter-desk">
        {letters.map((letter, index) => (
          <button
            type="button"
            key={letter.title}
            className={`desk-envelope envelope-place-${index + 1}`}
            onClick={() => openLetter(letter)}
          >
            <span className="envelope-flap"></span>
            <span className="envelope-emoji">{letter.emoji}</span>
            <span className="envelope-title">{letter.title}</span>
          </button>
        ))}
      </section>

      {selectedLetter && (
        <div className="letter-modal">
          <article className="letter-paper-open">
            <button
              type="button"
              className="close-letter"
              onClick={() => setSelectedLetter(null)}
            >
              ✕
            </button>

            <div className="paper-sticker">{selectedLetter.emoji}</div>

            <h2>{selectedLetter.title}</h2>

            <p>{selectedLetter.content}</p>

            <div className="sticker-row">
              <span>⭐</span>
              <span>💙</span>
              <span>🐶</span>
              <span>🎸</span>
              <span>💌</span>
              <span>🌙</span>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

export default OpenWhen;