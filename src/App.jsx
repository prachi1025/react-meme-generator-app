import { useState } from 'react'

function App() {
  const [meme, setMeme] = useState({
    topText:"One does not simply" , 
    bottomText:"Walk into Mordor" , 
    imagUrl:"http://i.imgflip.com/1bij.jpg"
  })

  function handleChange(event) {
    const {value, name} = event.currentTarget
    console.log(value)

    setMeme(prevMeme => (
      {...prevMeme, 
      [name]:value}
    ))
  }

  return (
    <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imagUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
  )
}

export default App
