import './MainSection.css'
import {useState, useEffect} from 'react'

export default function MainSection() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Moiroor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const[allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => console.log(data.data.memes))
    },[])

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(meme)
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
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}