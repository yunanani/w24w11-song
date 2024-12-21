import { useState } from "react"
const Container = (props) => {
  const [careerExpanded,setcareerExpanded] = useState(false)

  const toggleLyrics = () => {
    setcareerExpanded(prevState => !prevState)
  }
    return (
      <>
        <div className="container">
            <img 
               src={props.builder.imageUrl} 
               alt={` ${props.builder.realName}의 이미지`}

              onClick = {toggleLyrics}/>
            <a href={`https://www.youtube.com/results?search_query=${props.builder.youtubeName}`}
            target="_blank"
            rel= "noreferrer">
            <div className="builder-title">
              {`${props.builder.youtubeName} (${props.builder.realName}) `}
            </div>
            </a>
        </div>
        {props.builder.career && careerExpanded&& (
        <pre className='builder-career'>
          {props.builder.career}
        </pre>
        )}  
      </>
    )
  }

  export default Container