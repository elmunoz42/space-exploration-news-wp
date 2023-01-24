
import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"

const divsToUpdate = document.querySelectorAll(".boilerplate-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("boilerplate-update-me")
})

function OurComponent(props) {
  const initialState = [
    {
      position: 1,
      videoURL: props.videoURL1,
      videoTitle: props.videoTitle1,
      videoDescription: props.videoDescription1,
      videoThumbnailURL: props.videoThumbnailURL1,
      videoThumbnailAltText: props.videoThumbnailAltText1,
    }, 
    { 
      position: 2,
      videoURL: props.videoURL2,
      videoTitle: props.videoTitle2,
      videoDescription: props.videoDescription2,
      videoThumbnailURL: props.videoThumbnailURL2,
      videoThumbnailAltText: props.videoThumbnailAltText2,
    },
    { 
      position: 3,
      videoURL: props.videoURL3,
      videoTitle: props.videoTitle3,
      videoDescription: props.videoDescription3,
      videoThumbnailURL: props.videoThumbnailURL3,
      videoThumbnailAltText: props.videoThumbnailAltText3,
    },
    {
      position: 4,
      videoURL: props.videoURL4,
      videoTitle: props.videoTitle4,
      videoDescription: props.videoDescription4,
      videoThumbnailURL: props.videoThumbnailURL4,
      videoThumbnailAltText: props.videoThumbnailAltText4,
    },
    {
      position: 5,
      videoURL: props.videoURL5,
      videoTitle: props.videoTitle5,
      videoDescription: props.videoDescription5,
      videoThumbnailURL: props.videoThumbnailURL5,
      videoThumbnailAltText: props.videoThumbnailAltText5,
    }
  ];
  const [state, setState] = useState(initialState);
  const [selected, setSelected] = useState(1);


  return (
    <div className="boilerplate-frontend">

      {state.map(item => (  // map through the state array and return a new array of JSX elements
        <>
          { selected == item.position ? (   
            <div key={item.position} className="boilerplate-frontend-item">
              <div className="boilerplate-frontend-item-thumbnail">
                <img src={item.videoThumbnailURL} alt={item.videoThumbnailAltText} />
              </div>
              <div className="boilerplate-frontend-item-content">
                <h3>{item.videoTitle}</h3>
                <iframe width="560" height="315" src={item.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{item.videoDescription}</p>
                <a href={item.videoURL}>Watch Video</a>
              </div>
            </div>
          ) : (
          < div key = { item.position } className = "boilerplate-frontend-item" 
          // onClick={setSelected(item.position)}
          >
              <div className="boilerplate-frontend-item-thumbnail">
                <img src={item.videoThumbnailURL} alt={item.videoThumbnailAltText} />
              </div>
              <div className="boilerplate-frontend-item-content">
                <h3>{item.videoTitle}</h3>
                <p>{item.videoDescription}</p>
                <a href={item.videoURL}>Watch Video</a>
              </div>
            </div>
           )} 
        </>
      ))}
    </div>
  )
}
