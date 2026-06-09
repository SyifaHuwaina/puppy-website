import { useState } from 'react'

const strings = [
  { note: 'E', message: 'You make my heart feel warm.' },
  { note: 'A', message: 'I love hearing you talk about music.' },
  { note: 'D', message: 'You are my favourite guitarist.' },
  { note: 'G', message: 'I am so proud of you.' },
  { note: 'B', message: 'One day, play for me please hehe.' },
  { note: 'e', message: 'I love you, puppy.' },
]

function Guitar() {
  const [message, setMessage] = useState('Tap a string and I’ll tell you something sweet 🎸')

  return (
    <main className="guitar-page">
      <section className="guitar-panel">
        <div className="guitar-intro">
          <p className="page-tag">for my favourite guitarist</p>
          <h1>🎸 Guitar Corner</h1>
          <p>
            A tiny interactive guitar made just for the boy who makes music feel softer.
          </p>
        </div>

        <div className="guitar-body">
          <div className="guitar-strings-card">
            <h2>Tap a string</h2>

            <div className="mini-guitar">
              {strings.map((string) => (
                <button
                  key={string.note}
                  className="guitar-string"
                  onClick={() => setMessage(string.message)}
                >
                  <span>{string.note}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="guitar-message-card">
            <p>{message}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Guitar