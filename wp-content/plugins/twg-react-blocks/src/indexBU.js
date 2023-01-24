import "./index.scss"

wp.blocks.registerBlockType("twg-react-blocks/masterclass-videos", {
    title: "Masterclass Videos",
    icon: "format-video",
    category: "media",
    attributes: {
        videoURL1: { type: "string" },
        videoTitle1: { type: "string" },
        videoDescription1: { type: "string" },
        videoThumbnailURL1: { type: "string" },
        videoThumbnailAltText1: { type: "string" },
        videoURL2: { type: "string" },
        videoTitle2: { type: "string" },
        videoDescription2: { type: "string" },
        videoThumbnailURL2: { type: "string" },
        videoThumbnailAltText2: { type: "string" },
        videoURL3: { type: "string" },
        videoTitle3: { type: "string" },
        videoDescription3: { type: "string" },
        videoThumbnailURL3: { type: "string" },
        videoThumbnailAltText3: { type: "string" },
        videoURL4: { type: "string" },
        videoTitle4: { type: "string" },
        videoDescription4: { type: "string" },
        videoThumbnailURL4: { type: "string" },
        videoThumbnailAltText4: { type: "string" },
        videoURL5: { type: "string" },
        videoTitle5: { type: "string" },
        videoDescription5: { type: "string" },
        videoThumbnailURL5: { type: "string" },
        videoThumbnailAltText5: { type: "string" },
    },
    edit: EditComponent,
    save: function () {
        return null
    }
});

function EditComponent(props) {
    console.log('props', props);

    const [state, setState] = useState({
        videoURL1: props.attributes.videoURL1,
        videoTitle1: props.attributes.videoTitle1,
        videoDescription1: props.attributes.videoDescription1,
        videoThumbnailURL1: props.attributes.videoThumbnailURL1,
        videoThumbnailAltText1: props.attributes.videoThumbnailAltText1,
        videoURL2: props.attributes.videoURL2,
        videoTitle2: props.attributes.videoTitle2,
        videoDescription2: props.attributes.videoDescription2,
        videoThumbnailURL2: props.attributes.videoThumbnailURL2,
        videoThumbnailAltText2: props.attributes.videoThumbnailAltText2,
        videoURL3: props.attributes.videoURL3,
        videoTitle3: props.attributes.videoTitle3,
        videoDescription3: props.attributes.videoDescription3,
        videoThumbnailURL3: props.attributes.videoThumbnailURL3,
        videoThumbnailAltText3: props.attributes.videoThumbnailAltText3,
        videoURL4: props.attributes.videoURL4,
        videoTitle4: props.attributes.videoTitle4,
        videoDescription4: props.attributes.videoDescription4,
        videoThumbnailURL4: props.attributes.videoThumbnailURL4,
        videoThumbnailAltText4: props.attributes.videoThumbnailAltText4,
        videoURL5: props.attributes.videoURL5,
        videoTitle5: props.attributes.videoTitle5,
        videoDescription5: props.attributes.videoDescription5,
        videoThumbnailURL5: props.attributes.videoThumbnailURL5,
        videoThumbnailAltText5: props.attributes.videoThumbnailAltText5,
    });
    console.log('state', state);
    const handleChange = (event) => {
        console.log('event', event);
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
        props.setAttributes({ [name]: value });
    }


    function updateVideoURL1(e) {
        console.log('updateVideoURL1', e.target.value);
        props.setAttributes({ videoURL1: e.target.value });
    }
    function updateVideoTitle1(e) {
        props.setAttributes({ videoTitle1: e.target.value });
    }
    function updateVideoDescription1(e) {
        props.setAttributes({ videoDescription1: e.target.value });
    }
    function updateVideoThumbnailURL1(e) {
        props.setAttributes({ videoThumbnailURL1: e.target.value });
    }
    function updateVideoThumbnailAltText1(e) {
        props.setAttributes({ videoThumbnailAltText1: e.target.value });
    }
    function updateVideoURL2(e) {
        props.setAttributes({ videoURL2: e.target.value });
    }
    function updateVideoTitle2(e) {
        props.setAttributes({ videoTitle2: e.target.value });
    }
    function updateVideoDescription2(e) {
        props.setAttributes({ videoDescription2: e.target.value });
    }
    function updateVideoThumbnailURL2(e) {
        props.setAttributes({ videoThumbnailURL2: e.target.value });
    }
    function updateVideoThumbnailAltText2(e) {
        props.setAttributes({ videoThumbnailAltText2: e.target.value });
    }
    function updateVideoURL3(e) {
        props.setAttributes({ videoURL3: e.target.value });
    }
    function updateVideoTitle3(e) {
        props.setAttributes({ videoTitle3: e.target.value });
    }
    function updateVideoDescription3(e) {
        props.setAttributes({ videoDescription3: e.target.value });
    }
    function updateVideoThumbnailURL3(e) {
        props.setAttributes({ videoThumbnailURL3: e.target.value });
    }
    function updateVideoThumbnailAltText3(e) {
        props.setAttributes({ videoThumbnailAltText3: e.target.value });
    }
    function updateVideoURL4(e) {
        props.setAttributes({ videoURL4: e.target.value });
    }
    function updateVideoTitle4(e) {
        props.setAttributes({ videoTitle4: e.target.value });
    }
    function updateVideoDescription4(e) {
        props.setAttributes({ videoDescription4: e.target.value });
    }
    function updateVideoThumbnailURL4(e) {
        props.setAttributes({ videoThumbnailURL4: e.target.value });
    }
    function updateVideoThumbnailAltText4(e) {
        props.setAttributes({ videoThumbnailAltText4: e.target.value });
    }
    function updateVideoURL5(e) {
        props.setAttributes({ videoURL5: e.target.value });
    }
    function updateVideoTitle5(e) {
        props.setAttributes({ videoTitle5: e.target.value });
    }
    function updateVideoDescription5(e) {
        props.setAttributes({ videoDescription5: e.target.value });
    }
    function updateVideoThumbnailURL5(e) {
        props.setAttributes({ videoThumbnailURL5: e.target.value });
    }
    function updateVideoThumbnailAltText5(e) {
        props.setAttributes({ videoThumbnailAltText5: e.target.value });
    }



    return (
        <div className="makeUpYourBlockTypeName">
            <div className="makeUpYourBlockTypeName__video1">
                <label className="makeUpYourBlockTypeName__label">Video 1 test</label><br />
                <input type="text" name="videoURL1" value={state.videoURL1} onChange={handleChange} placeholder="https://www.youtube.com/watch?v=NKqogVcqDHA" />
                <input type="text" name="videoTitle1" value={state.videoTitle1} onChange={handleChange} placeholder="Video Title" />
                <input type="text" name="videoThumbnailURL1" value={state.videoThumbnailURL1} onChange={handleChange} placeholder="https://i.ytimg.com/vi/NKqogVcqDHA/hqdefault.jpg" />
                <input type="text" name="videoThumbnailAltText1" value={state.videoThumbnailAltText1} onChange={handleChange} placeholder="Video Thumbnail Alt Text" /><br />
                <textarea rows="4" cols="100" name="videoDescription1" type="text" value={state.videoDescription1} onChange={handleChange} placeholder="Video Description" /><br />
            </div>
            <div className="makeUpYourBlockTypeName__video2">
                <label className="makeUpYourBlockTypeName__label">Video 2</label><br />
                <input type="text" value={props.attributes.videoURL2} onChange={updateVideoURL2} placeholder="https://www.youtube.com/watch?v=NKqogVcqDHA" />
                <input type="text" value={props.attributes.videoTitle2} onChange={updateVideoTitle2} placeholder="Video Title" />
                <input type="text" value={props.attributes.videoThumbnailURL2} onChange={updateVideoDescription2} placeholder="https://i.ytimg.com/vi/NKqogVcqDHA/hqdefault.jpg" />
                <input type="text" value={props.attributes.videoThumbnailAltText2} onChange={updateVideoThumbnailURL2} placeholder="Video Thumbnail Alt Text" /><br />
                <textarea rows="4" cols="100" type="text" value={props.attributes.videoDescription2} onChange={updateVideoThumbnailAltText2} placeholder="Video Description" /><br />
            </div>
            <div className="makeUpYourBlockTypeName__video3">
                <label className="makeUpYourBlockTypeName__label">Video 3</label><br />
                <input type="text" value={props.attributes.videoURL3} onChange={updateVideoURL3} placeholder="https://www.youtube.com/watch?v=NKqogVcqDHA" />
                <input type="text" value={props.attributes.videoTitle3} onChange={updateVideoTitle3} placeholder="Video Title" />
                <input type="text" value={props.attributes.videoThumbnailURL3} onChange={updateVideoDescription3} placeholder="https://i.ytimg.com/vi/NKqogVcqDHA/hqdefault.jpg" />
                <input type="text" value={props.attributes.videoThumbnailAltText3} onChange={updateVideoThumbnailURL3} placeholder="Video Thumbnail Alt Text" /><br />
                <textarea rows="4" cols="100" type="text" value={props.attributes.videoDescription3} onChange={updateVideoThumbnailAltText3} placeholder="Video Description" /><br />
            </div>
            <div className="makeUpYourBlockTypeName__video4">
                <label className="makeUpYourBlockTypeName__label">Video 4</label><br />
                <input type="text" value={props.attributes.videoURL4} onChange={updateVideoURL4} placeholder="https://www.youtube.com/watch?v=NKqogVcqDHA" />
                <input type="text" value={props.attributes.videoTitle4} onChange={updateVideoTitle4} placeholder="Video Title" />
                <input type="text" value={props.attributes.videoThumbnailURL4} onChange={updateVideoDescription4} placeholder="https://i.ytimg.com/vi/NKqogVcqDHA/hqdefault.jpg" />
                <input type="text" value={props.attributes.videoThumbnailAltText4} onChange={updateVideoThumbnailURL4} placeholder="Video Thumbnail Alt Text" /><br />
                <textarea rows="4" cols="100" type="text" value={props.attributes.videoDescription4} onChange={updateVideoThumbnailAltText4} placeholder="Video Description" /><br />
            </div>
            <div className="makeUpYourBlockTypeName__video5">
                <label className="makeUpYourBlockTypeName__label">Video 5</label><br />
                <input type="text" value={props.attributes.videoURL5} onChange={updateVideoURL5} placeholder="https://www.youtube.com/watch?v=NKqogVcqDHA" />
                <input type="text" value={props.attributes.videoTitle5} onChange={updateVideoTitle5} placeholder="Video Title" />
                <input type="text" value={props.attributes.videoThumbnailURL5} onChange={updateVideoDescription5} placeholder="https://i.ytimg.com/vi/NKqogVcqDHA/hqdefault.jpg" />
                <input type="text" value={props.attributes.videoThumbnailAltText5} onChange={updateVideoThumbnailURL5} placeholder="Video Thumbnail Alt Text" /><br />
                <textarea rows="4" cols="100" type="text" value={props.attributes.videoDescription5} onChange={updateVideoThumbnailAltText5} placeholder="Video Description" /><br />
            </div>
        </div>
    );
}
