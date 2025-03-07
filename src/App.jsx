import { useState } from 'react'

function App() {
  const [meme, setMeme] = useState({topText:"One does not simply" , bootomText:"Walk into Mordor" , imagUrl:"http://i.imgflip.com/1bij.jpg"})

  return (
    <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imagUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bootomText}</span>
            </div>
        </main>
  )
}

export default App
