import { useState } from "react";

const letters = [
  {
    title: "Open when you miss me",
    emoji: "💌",
    content: `Hi puppy,

If you're reading this, then I'm guessing you miss me a little right now.

I wish I could be there with you. Maybe we'd be sitting together, talking about random things, listening to music, or maybe we'd just be quietly existing in the same room. Honestly, I think I'd be happy doing absolutely nothing as long as I got to spend that time with you.

I know we're far apart, and sometimes that can be frustrating. There are days where I wish I could just randomly appear beside you, steal your attention for a while, and remind you how much you mean to me.

Until that day comes, I hope this letter can do that for me.

Please remember that even when we're busy, even when we're doing our own things, and even when we're not talking at that exact moment, I still care about you very much.

You have become such an important part of my life, and I genuinely look forward to talking to you every day.

So if you're missing me right now, know that somewhere on the other side of the world, there's a girl who misses you too.

Come here and accept your virtual hug.

Love,
💙 Mommy`,
  },
  {
    title: "Open when you're sad",
    emoji: "🌧️",
    content: `Hi puppy,

If you're reading this, I'm guessing today hasn't been very kind to you.

Whatever happened, I want you to know that it's okay to feel upset. You don't have to pretend you're fine all the time, and you don't have to carry everything by yourself.

Take a deep breath for me.

And if nobody has told you this today, let me be the one to say it:

I'm proud of you.

I'm proud of how hard you try, even when things feel difficult. I'm proud of you for making it this far, even on the days where you feel tired, frustrated, or overwhelmed.

Please don't let one bad day convince you that you're doing badly in life. One difficult moment doesn't define who you are.

You are still the same sweet, caring, talented person that I know and love.

So tonight, be gentle with yourself. Listen to some music, play your guitar, rest, or do something that makes you feel a little better.

And if I were there right now, I'd be giving you the biggest hug.

I love you very much, puppy.

Tomorrow is a new day.

💙 Mommy`,
  },
{
    title: "Open when you're overthinking",
    emoji: "🌙",
    content: `Hi puppy,

Your brain is probably being a little mean to you right now.

Maybe you're worrying about something.

Maybe you're replaying conversations.

Maybe you're wondering whether you're doing enough.

Whatever it is, I want you to stop for a moment and take a breath.

You don't have to have everything figured out right now.

You don't have to know exactly where you're going.

You don't have to be perfect.

And most importantly, you don't have to earn your worth.

You are allowed to exist exactly as you are.

I know sometimes you can be hard on yourself, but I wish you could see yourself the way I see you.

I see someone kind.

Someone thoughtful.

Someone who tries.

Someone who deserves patience, especially from himself.

So please be gentle with yourself today.

The world is already difficult enough.

You don't need to fight yourself too.

💙`,
},
{
    title: "Open when you're playing guitar",
    emoji: "🎸",
    content: `Hi puppy,

If you're holding your guitar right now, then this letter is for you.

One of my favourite things about you is how passionate you are when it comes to music.

I love hearing you talk about guitar.

I love hearing about songs you like.

I love seeing how excited you get when discussing something you're interested in.

There's something really special about watching someone talk about the things they genuinely love.

And every time I think about guitars now, I automatically think about you.

I know music means a lot to you, and I hope you never lose that passion.

Keep learning.

Keep practicing.

Keep having fun.

And remember that somewhere out there is a girl who would probably be smiling like an idiot watching you play.

Just know mommy always proud of her little guitarist!

💙 Mommy`,
},
{
    title: "Open when you need praise",
    emoji: "🐶💙",
    content: `Good boy.

Yes, this entire letter exists because sometimes I think you deserve to hear that.

I'm proud of you.

Not just when you accomplish something.

Not just when you're productive.

Not just when things are going well.

I'm proud of you even on the days where you're struggling.

I'm proud of the effort you put into the things you care about.

I'm proud of the way you keep going even when things aren't easy.

And I'm proud of you for simply being yourself.

You don't always have to prove something to deserve praise.

You don't always have to earn rest.

You don't always have to be at your best.

Sometimes it's enough to simply keep moving forward.

So here's your reminder:

You're doing better than you think.

Now come here.

You deserve head pats.

💙 Mommy`,
},
{
    title: "Open When You need reminder",
    emoji: "🐶💕",
    content: `Hi puppy,

Who's Mommy's good boy?

You are.

Yes, you.

You are Mommy's good boy.

You are a good boy when you're trying your best.

You are a good boy when you're playing your favourite games.

You are a good boy when you're talking about guitar.

You are a good boy when you're sleepy.

You are a good boy when you're excited.

You are a good boy when you're being shy.

You are even a good boy when you're doubting yourself, because you're still trying.

So if you're opening this letter because you needed reassurance, here it is:

Mommy is proud of you.

Mommy loves you.

Mommy thinks you're adorable.

And Mommy thinks you deserve lots of head pats.

pat pat pat pat pat

There.

Now stop doubting yourself and accept your praise.

Good boy.

💙 Mommy`,
},
];

const pins = ["📌", "📍", "🧷", "⭐", "💙"];
const stickers = ["⭐", "💙", "🐶", "🎸", "💌", "🌙", "💕", "✨"];

function OpenWhen() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [openedCount, setOpenedCount] = useState(0);
  const [deskPins, setDeskPins] = useState([]);
  const [letterStickers, setLetterStickers] = useState([]);

  const [letterPositions, setLetterPositions] = useState(
    letters.map((_, index) => ({ id: index, x: 0, y: 0 }))
  );

  function openLetter(letter) {
    setSelectedLetter(letter);
    setOpenedCount((count) => count + 1);
  }

  function dragItem(event, id, items, setItems) {
    event.preventDefault();

    const startX = event.clientX;
    const startY = event.clientY;
    const current = items.find((item) => item.id === id);

    const originalX = current.x;
    const originalY = current.y;

    function onMouseMove(moveEvent) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                x: originalX + moveEvent.clientX - startX,
                y: originalY + moveEvent.clientY - startY,
              }
            : item
        )
      );
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function dragEnvelope(event, id) {
    event.preventDefault();

    const startX = event.clientX;
    const startY = event.clientY;
    const current = letterPositions.find((item) => item.id === id);

    const originalX = current.x;
    const originalY = current.y;
    let moved = false;
    const dragThreshold = 6;

    function onMouseMove(moveEvent) {
      const deltaX = Math.abs(moveEvent.clientX - startX);
      const deltaY = Math.abs(moveEvent.clientY - startY);
      moved = deltaX > dragThreshold || deltaY > dragThreshold;

      setLetterPositions((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                x: originalX + moveEvent.clientX - startX,
                y: originalY + moveEvent.clientY - startY,
              }
            : item
        )
      );
    }

    function onMouseUp() {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      if (!moved) openLetter(letters[id]);
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  }

  function addPin(pin) {
    setDeskPins((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        emoji: pin,
        x: 80,
        y: 80,
      },
    ]);
  }

  function addSticker(sticker) {
    setLetterStickers((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        emoji: sticker,
        x: 120,
        y: 120,
      },
    ]);
  }

  return (
    <main className="openwhen-page">
      <section className="openwhen-header">
        <p className="page-tag">letters for different moments</p>
        <h1>📬 Open When...</h1>
        <p>Drag the envelopes, pins, and stickers around.</p>

        <div className="opened-counter">{openedCount} letters opened</div>
      </section>

      <section className="letter-desk">
        <div className="pin-tray">
          <p>add pins</p>
          <div>
            {pins.map((pin) => (
              <button key={pin} type="button" onClick={() => addPin(pin)}>
                {pin}
              </button>
            ))}
          </div>
        </div>

        {deskPins.map((pin) => (
          <button
            key={pin.id}
            type="button"
            className="desk-pin"
            onMouseDown={(event) =>
              dragItem(event, pin.id, deskPins, setDeskPins)
            }
            style={{
              left: `${pin.x}px`,
              top: `${pin.y}px`,
            }}
          >
            {pin.emoji}
          </button>
        ))}

        {letters.map((letter, index) => (
          <button
            type="button"
            key={letter.title}
            className={`desk-envelope envelope-place-${index + 1}`}
            onMouseDown={(event) => dragEnvelope(event, index)}
            style={{
              translate: `${letterPositions[index].x}px ${letterPositions[index].y}px`,
            }}
          >
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

            <div className="sticker-toolbar">
            <p className="sticker-hint">
                🎀 Psst... try clicking a sticker and decorate this letter for Mommy.
            </p>

            <div className="sticker-row">
                {stickers.map((sticker) => (
                <button
                    key={sticker}
                    type="button"
                    onClick={() => addSticker(sticker)}
                >
                    {sticker}
                </button>
                ))}
            </div>
            </div>

            <p>{selectedLetter.content}</p>

            {letterStickers.map((sticker) => (
            <button
                key={sticker.id}
                type="button"
                className="placed-sticker"
                onMouseDown={(event) =>
                dragItem(event, sticker.id, letterStickers, setLetterStickers)
                }
                style={{
                left: `${sticker.x}px`,
                top: `${sticker.y}px`,
                }}
            >
                {sticker.emoji}
            </button>
            ))}
          </article>
        </div>
      )}
    </main>
  );
}

export default OpenWhen;