import React, {useState} from 'react'


export default function TextForms(props) {
    // function handleClick() {
    //     console.log("submit was clicked")

    // }
    const [text, setText] = useState('');
    const [text2, setLongestText] = useState('');

    const handleClickup = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleClicklw = ()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const findLongest = ()=>{
        const words = text.split(" ");
        let longest = "";

        words.forEach(word => {
            if (word.length>longest.length) {
                longest= word;
            }
        });

        setLongestText(longest);
    }
    const handleClickcl = ()=>{
        setText("");
    }
    const handleChange = (event)=>{
        setText(event.target.value);
    }
    const handleChange2 = (event)=>{
        setLongestText(event.target.value);
    }
    return (
        <div>
            <div className="mb-3">
                <h1 className='my-2'>Text Analyser</h1>
                <textarea className="form-control" id="mytxt" rows="9" placeholder='Enter ur text here' value={text} onChange={handleChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleClickup}>convert upper</button>
            <button className="btn btn-primary mx-2" onClick={handleClicklw}>convert lower</button>
            <button className="btn btn-primary mx-2" onClick={handleClickcl}>clear</button><br />
            <textarea className="form-control my-3" id="mytxt" rows="2" value={text2} onChange={handleChange2}></textarea>
            <button className="btn btn-primary mx-2" onClick={findLongest}>search</button>
            <h1 className='my-3'>Your text summary</h1>
            <p>{text.length} charecters and {text.split(" ").length} words</p>
            <p>Time required to read it is: {0.008*text.split(" ").length}</p>
            <p>Number of scentences: {text.split(/[.!?]+/).length-1}</p>
            <p>Number of paragraphs: {text.split('\n').length}</p>
        </div>
    )
}
