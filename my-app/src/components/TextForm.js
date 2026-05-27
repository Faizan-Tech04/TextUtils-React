import React , {useState}from 'react'

export default function TextForm(props) {

        const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
        }

        
        const handleSentenceClick = ()=>{
        let newText = 
        text.charAt(0).toUpperCase() + 
        text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("Converted to Sentence case!", "success");
        }

       const handleClearClick = ()=>{
        console.log("Clearcase was clicked" + text);
        let newText ='';
        setText(newText);
        props.showAlert("Text cleared!", "success");
        }


          const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
        }

        const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success");
  }


const [text, setText] = useState('');
// text = "new text"; //wqrong way to change the state
// setText("new text"); //correct way to change the state

  return (
    <>
    <div className="container"  style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
      
        <h1 className="mb-4">{props.heading} </h1>
    <div className="mb-3">
    
    <textarea className="form-control" value= {text} onChange={handleOnChange}  style={ { backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black'} } id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2  " onClick={handleUpClick}>Convert to Uppercase </button>

<button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase </button>

<button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={handleClearClick}> Clear Text </button>


<button disabled={text.length===0} className="btn btn-info mx-2 my-2" onClick={handleSentenceClick}>Convert to Sentence Text </button>


<button disabled={text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces </button>

    </div>
    <div className="container my-3" style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
            <h2>Your Text Summary</h2>
             <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
             <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Nothing to preview"}</p>
    </div>
    
    </>
  )
}


