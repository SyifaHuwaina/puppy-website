import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Background from './components/background'
import Guitar from './pages/guitar'
import Heart from './pages/heart'
import MusicBoard from './pages/musicboard'
import Compliments from './pages/compliment'

const galleryImages = [
  { src: '/design.jpg', alt: 'Romantic design card collage' },
  { src: '/design1.jpg', alt: 'Blue envelope and scrapbook design' },
  { src: '/design2.jpg', alt: 'Cute cat and heart illustration' },
  { src: '/design3.jpg', alt: 'Bold black and white guitar style design' },
  { src: '/design4.jpg', alt: 'Soft inspirational reminder card' },
  { src: '/design5.jpg', alt: 'Another scrapbook style design card' },
]

const puppyMessages = [
  'Good boy!',
  "Mommy's so proud of you!",
  "You're doing very well!",
  'Such a sweet boy!',
  'Keep going, baby.',
]

function LetterPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBurst, setShowBurst] = useState(false)
  const [patCount, setPatCount] = useState(0)
  const [puppyMessageIndex, setPuppyMessageIndex] = useState(0)
  const [showPuppyMessage, setShowPuppyMessage] = useState(false)
  const [dogPlayToken, setDogPlayToken] = useState(0)

  const letterText =
    'My sweetest puppy,\n\nI made this little website just for you. I know it is not perfect but I wanted to create something you could come back to whenever you miss me, need a smile or simply want a reminder of how much you mean to me.\n\nThank you for all the time you spend with me, whether we are talking, playing games, listening to music or just sitting together on call. Even the smallest moments with you have become some of my favourite parts of the day.\n\nI love hearing you talk about the things you are passionate about especially music and guitar. Your excitement is contagious and it always makes me happy seeing you enjoy the things you love.\n\nThank you for being patient with me when I get quiet, for listening to my random stories and for making me feel safe enough to be myself around you. You make me feel cared for in ways you probably do not even realize.\n\nI hope you enjoy exploring this little website. Every page was made with you in mind and every song, compliment and heart was chosen because it reminded me of you.\n\nWith lots of love,\n\n💙 Mommy'

  useEffect(() => {
    if (!showBurst) return
    const timer = window.setTimeout(() => setShowBurst(false), 1200)
    return () => window.clearTimeout(timer)
  }, [showBurst])

  useEffect(() => {
    if (!showPuppyMessage) return
    const timer = window.setTimeout(() => setShowPuppyMessage(false), 5000)
    return () => window.clearTimeout(timer)
  }, [showPuppyMessage, puppyMessageIndex])

  function handleEnvelopeClick() {
    setIsOpen((value) => !value)
    setShowBurst(true)
  }

  function handlePuppyPat() {
    setPatCount((value) => value + 1)
    setPuppyMessageIndex((value) => value + 1)
    setShowPuppyMessage(true)
    setDogPlayToken((value) => value + 1)
  }

  const currentPuppyMessage = puppyMessages[puppyMessageIndex % puppyMessages.length]

  return (
    <>
      <div className="floating-designs" aria-hidden="true">
        {galleryImages.map((image, index) => (
          <img
            key={image.src}
            className={`floating-design floating-${index + 1}`}
            src={image.src}
            alt=""
          />
        ))}
      </div>

      <main className={`love-page ${isOpen ? 'open' : ''}`}>
        <div className="page-header">
          <p className="page-tag">for my sweetest puppy</p>

          <h1 className="page-title">
            made a letter for my sweetest boy! hope u like it hehe
          </h1>

          <p className="page-subtitle">
            Click the letter!!! a surprise is waiting for you 💌
          </p>
        </div>

        <section className="envelope-reveal" aria-label="Envelope reveal gallery">
          {!isOpen && (
            <button
              type="button"
              className="envelope-shell"
              onClick={handleEnvelopeClick}
              aria-label="Open the envelope"
            >
              <img className="envelope-shell__image" src="/env.png" alt="Blue envelope" />
              <span className="envelope-shell__cta">tap the envelope</span>
            </button>
          )}

          {isOpen && (
            <div className="reveal-panel show" aria-live="polite">
              <div className="manual-letter-scene">
                <div className="letter-paper" aria-label="Opened letter">
                  <div className="paper-top-fold" aria-hidden="true" />

                  <div className="letter-text-layer">
                    {letterText.split('\n').map((line, index) => (
                      <p key={`${line}-${index}`}>{line || ' '}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="tiny-actions">
          <button type="button" className="soft-button" onClick={handleEnvelopeClick}>
            {isOpen ? 'close the letter' : 'open the envelope'}
          </button>
        </div>
      </main>

      <aside className="puppy-dock" aria-label="Interactive puppy">
        <button
          type="button"
          className="dog-button"
          onClick={handlePuppyPat}
          aria-label="Pat the puppy"
        >
          <span className="dog-frame" aria-hidden="true">
            <img className="dog-gif" src={`/dog.gif?play=${dogPlayToken}`} alt="" />
          </span>
        </button>

        <p className="puppy-count">{patCount} pats</p>

        <div className={`puppy-message ${showPuppyMessage ? 'show' : ''}`} aria-live="polite">
          {currentPuppyMessage}
        </div>
      </aside>

      <div className={`sparkles ${showBurst ? 'show' : ''}`} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  )
}

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'white-blue')
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <Background />

        <nav className="nav">
          <Link to="/">💌 Letter</Link>
          <Link to="/guitar">🎸 Guitar</Link>
          <Link to="/heart">💗 Tap Heart</Link>
          <Link to="/musicboard">🌟 Music Board</Link>
          <Link to="/compliment">Compliments</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LetterPage />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/heart" element={<Heart />} />
          <Route path="/musicboard" element={<MusicBoard />} />
          <Route path="/compliment" element={<Compliments />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App