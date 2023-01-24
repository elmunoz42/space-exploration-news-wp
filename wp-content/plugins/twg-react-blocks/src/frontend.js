
import "./frontend.scss"
import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import VimeoPlayer from 'react-vimeo-progress'
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import qs from 'qs';



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
            // videoEnabled: true,
            videoEnabled: props.videoEnabled1,
            videoURL: props.videoURL1,
            videoTitle: props.videoTitle1,
            videoDescription: props.videoDescription1,
            videoThumbnailURL: props.videoThumbnailURL1,
            videoThumbnailAltText: props.videoThumbnailAltText1,
            videoCTAURL: props.videoCTAURL1,
            videoCTAText: props.videoCTAText1,
            videoCTALabel: props.videoCTALabel1,
            videoSubTitle: props.videoSubTitle1,
            videoLength: props.videoLength1,
        },
        {
            position: 2,
            // videoEnabled: true,
            videoEnabled: props.videoEnabled2,
            videoURL: props.videoURL2,
            videoTitle: props.videoTitle2,
            videoDescription: props.videoDescription2,
            videoThumbnailURL: props.videoThumbnailURL2,
            videoThumbnailAltText: props.videoThumbnailAltText2,
            videoCTAURL: props.videoCTAURL2,
            videoCTAText: props.videoCTAText2,
            videoCTALabel: props.videoCTALabel2,
            videoSubTitle: props.videoSubTitle2,
            videoLength: props.videoLength2,
        },
        {
            position: 3,
            // videoEnabled: true,
            videoEnabled: props.videoEnabled3,
            videoURL: props.videoURL3,
            videoTitle: props.videoTitle3,
            videoDescription: props.videoDescription3,
            videoThumbnailURL: props.videoThumbnailURL3,
            videoThumbnailAltText: props.videoThumbnailAltText3,
            videoCTAURL: props.videoCTAURL3,
            videoCTAText: props.videoCTAText3,
            videoCTALabel: props.videoCTALabel3,
            videoSubTitle: props.videoSubTitle3,
            videoLength: props.videoLength3,
        },
        {
            position: 4,
            // videoEnabled: true,
            videoEnabled: props.videoEnabled4,
            videoURL: props.videoURL4,
            videoTitle: props.videoTitle4,
            videoDescription: props.videoDescription4,
            videoThumbnailURL: props.videoThumbnailURL4,
            videoThumbnailAltText: props.videoThumbnailAltText4,
            videoCTAURL: props.videoCTAURL4,
            videoCTAText: props.videoCTAText4,
            videoCTALabel: props.videoCTALabel4,
            videoSubTitle: props.videoSubTitle4,
            videoLength: props.videoLength4,
        },
        {
            position: 5,
            // videoEnabled: true,
            videoEnabled: props.videoEnabled5,
            videoURL: props.videoURL5,
            videoTitle: props.videoTitle5,
            videoDescription: props.videoDescription5,
            videoThumbnailURL: props.videoThumbnailURL5,
            videoThumbnailAltText: props.videoThumbnailAltText5,
            videoCTAURL: props.videoCTAURL5,
            videoCTAText: props.videoCTAText5,
            videoCTALabel: props.videoCTALabel5,
            videoSubTitle: props.videoSubTitle5,
            videoLength: props.videoLength5,
        },
        {
            position: 6,
            videoEnabled: props.videoEnabled6,
            videoURL: props.videoURL6,
            videoTitle: props.videoTitle6,
            videoDescription: props.videoDescription6,
            videoThumbnailURL: props.videoThumbnailURL6,
            videoThumbnailAltText: props.videoThumbnailAltText6,
            videoCTAURL: props.videoCTAURL6,
            videoCTAText: props.videoCTAText6,
            videoCTALabel: props.videoCTALabel6,
            videoSubTitle: props.videoSubTitle6,
            videoLength: props.videoLength6,
        },
        {
            position: 7,
            videoEnabled: props.videoEnabled7,
            videoURL: props.videoURL7,
            videoTitle: props.videoTitle7,
            videoDescription: props.videoDescription7,
            videoThumbnailURL: props.videoThumbnailURL7,
            videoThumbnailAltText: props.videoThumbnailAltText7,
            videoCTAURL: props.videoCTAURL7,
            videoCTAText: props.videoCTAText7,
            videoCTALabel: props.videoCTALabel7,
            videoSubTitle: props.videoSubTitle7,
            videoLength: props.videoLength7,
        },
        {
            position: 8,
            videoEnabled: props.videoEnabled8,
            videoURL: props.videoURL8,
            videoTitle: props.videoTitle8,
            videoDescription: props.videoDescription8,
            videoThumbnailURL: props.videoThumbnailURL8,
            videoThumbnailAltText: props.videoThumbnailAltText8,
            videoCTAURL: props.videoCTAURL8,
            videoCTAText: props.videoCTAText8,
            videoCTALabel: props.videoCTALabel8,
            videoSubTitle: props.videoSubTitle8,
            videoLength: props.videoLength8,
        },
        {
            position: 9,
            videoEnabled: props.videoEnabled9,
            videoURL: props.videoURL9,
            videoTitle: props.videoTitle9,
            videoDescription: props.videoDescription9,
            videoThumbnailURL: props.videoThumbnailURL9,
            videoThumbnailAltText: props.videoThumbnailAltText9,
            videoCTAURL: props.videoCTAURL9,
            videoCTAText: props.videoCTAText9,
            videoCTALabel: props.videoCTALabel9,
            videoSubTitle: props.videoSubTitle9,
            videoLength: props.videoLength9,
        },
        {
            position: 10,
            videoEnabled: props.videoEnabled10,
            videoURL: props.videoURL10,
            videoTitle: props.videoTitle10,
            videoDescription: props.videoDescription10,
            videoThumbnailURL: props.videoThumbnailURL10,
            videoThumbnailAltText: props.videoThumbnailAltText10,
            videoCTAURL: props.videoCTAURL10,
            videoCTAText: props.videoCTAText10,
            videoCTALabel: props.videoCTALabel10,
            videoSubTitle: props.videoSubTitle10,
            videoLength: props.videoLength10,
        }
    ];
    const [cookies, setCookie, removeCookie] = useCookies(['twg-mc']);
    const [state, setState] = useState(initialState);
    const [selected, setSelected] = useState(1);
    const [videoState, setVideoState] = useState({ actualWidth: 954, actualHeight: 536, widthPercentage: 0.5 , loaded: false});
    const [userData, setUserData] = useState({email: '', selectedVideo: 1, video1watchedPercentage: 0, video2watchedPercentage: 0, video3watchedPercentage: 0, video4watchedPercentage: 0, video5watchedPercentage: 0, video6watchedPercentage: 0, video7watchedPercentage: 0, video8watchedPercentage: 0, video9watchedPercentage: 0, video10watchedPercentage: 0});

    const [colState, setColState] = useState({ colHeight: 732, videoSidebarHeight: 532 });
    const numberOfVideos = state.filter(video => video.videoEnabled).length;
    // console.log('numberOfVideos', numberOfVideos);
    // console.log('selected', selected);
    const getWindowSize = () => {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    const actualLeftColDimensionsRef = useRef();
    const getActualLeftColDimensions = () => {
        var actualLeftColWidth = actualLeftColDimensionsRef.current.clientWidth;
        var actualLeftColHeight = actualLeftColDimensionsRef.current.clientHeight;
        var innerWidth = window.innerWidth;
        var widthPercentage = 0.5;
        var sidebarAdjustment = 205;
        if (innerWidth < 768) {
            // if (actualLeftColWidth < 500 && innerWidth < 768) {
                widthPercentage = 1;
            } else if (innerWidth < 900) {
                widthPercentage = 0.8;
                sidebarAdjustment = 0;
            } else if (innerWidth < 990) {
                widthPercentage = 0.8;
                sidebarAdjustment = 70;
            } else if (innerWidth < 1075) {
                widthPercentage = 0.6;
                sidebarAdjustment = 270;
            } else if (innerWidth < 1200) {
                widthPercentage = 0.6;
                sidebarAdjustment = 250;
            } else if (innerWidth < 1630) {
                widthPercentage = 0.6;
                sidebarAdjustment = 230;
            } else if (innerWidth < 1700) {
                widthPercentage = 0.58;
            } else if (innerWidth < 1765) {
                widthPercentage = 0.56;
            } else if (innerWidth < 1800) {
                widthPercentage = 0.54;
            } else if (innerWidth < 1900) {
                widthPercentage = 0.52;
            } 
        var videoSidebarHeight = actualLeftColHeight - sidebarAdjustment;
        // setVideoState({actualWidth: actualLeftColWidth,
        //     actualHeight: actualLeftColWidth * 0.5625, widthPercentage: widthPercentage
        // });
        setVideoState((prevState) => ({
            ...prevState, actualWidth: actualLeftColWidth,
            actualHeight: actualLeftColWidth * 0.5625, widthPercentage: widthPercentage
        }));

        setColState({
            colHeight: actualLeftColHeight, 
            videoSidebarHeight: videoSidebarHeight
        });
        // console.log('actualLeftColWidth', actualLeftColWidth);
        // console.log('actualLeftColHeight', actualLeftColHeight);
        // console.log('videoState', videoState);
        // console.log('colState', colState);
    }
  
    useEffect(() => {
        window.addEventListener("resize", getActualLeftColDimensions);
        console.log('resize happened');
        getActualLeftColDimensions();
    }, []);
    const leftColumnStyles = {
        css : {
            maxWidth: "954px",
        },
        // widthPercentage: 0.5625,
        widthPercentage: 0.5,
        videoMaxHeight: "528",
    };
    

    // Cookie functionality fot the video progress bar ------------------------------------
    // Tried to grab url parameters but paused for now more here https://app.clickup.com/t/2xrgeuv?comment=1182138107 see article https://www.upbeatcode.com/react/how-to-get-url-parameters-in-react/ 
   
    const handleProgress = (progress) => {
        var selection = selected;
        var prevData = userData;
        console.log('progress', progress);
        var progressPercentage = Math.floor((progress) * 100);
        switch (selection) {
            case 1:
            setUserData({...prevData, video1watchedPercentage: progressPercentage});
            break;
            case 2:
            setUserData({...prevData, video2watchedPercentage: progressPercentage});
            break;
            case 3:
            setUserData({...prevData, video3watchedPercentage: progressPercentage});
            break;
            case 4:
            setUserData({...prevData, video4watchedPercentage: progressPercentage});
            break;
            case 5:
            setUserData({...prevData, video5watchedPercentage: progressPercentage});
            break;
            case 6:
            setUserData({...prevData, video6watchedPercentage: progressPercentage});
            break;
            case 7:
            setUserData({...prevData, video7watchedPercentage: progressPercentage});
            break;
            case 8:
            setUserData({...prevData, video8watchedPercentage: progressPercentage});
            break;
            case 9:
            setUserData({...prevData, video9watchedPercentage: progressPercentage});
            break;
            case 10:
            setUserData({...prevData, video10watchedPercentage: progressPercentage});
            break;    
        }  
        console.log(`The user has watched ${progress}% of the video!`);
        console.log('userData progress: ', userData);
    };
    function onSelectChange(selection) {
        setUserData((prevState) => {
            return ({
                ...prevState,
                selectedVideo: selection
            });
        });
        console.log('userData', userData);
        var userDataForCookie = '';
        userDataForCookie += 'email--' + userData.email;
        userDataForCookie += '__selectedVideo--' + selection;
        userDataForCookie += '__video1watchedPercentage--' + userData.video1watchedPercentage;
        userDataForCookie += '__video2watchedPercentage--' + userData.video2watchedPercentage;
        userDataForCookie += '__video3watchedPercentage--' + userData.video3watchedPercentage;
        userDataForCookie += '__video4watchedPercentage--' + userData.video4watchedPercentage;
        userDataForCookie += '__video5watchedPercentage--' + userData.video5watchedPercentage;
        userDataForCookie += '__video6watchedPercentage--' + userData.video6watchedPercentage;
        userDataForCookie += '__video7watchedPercentage--' + userData.video7watchedPercentage;
        userDataForCookie += '__video8watchedPercentage--' + userData.video8watchedPercentage;
        userDataForCookie += '__video9watchedPercentage--' + userData.video9watchedPercentage;
        userDataForCookie += '__video10watchedPercentage--' + userData.video10watchedPercentage;
        setCookie('twg-mc', userDataForCookie , { path: '/' });
    }
    useEffect(() => {
        onSelectChange(selected);
        console.log('selected changed', selected);
    }, [selected, userData.video10watchedPercentage, userData.video9watchedPercentage, userData.video8watchedPercentage, userData.video7watchedPercentage, userData.video6watchedPercentage, userData.video5watchedPercentage, userData.video4watchedPercentage, userData.video3watchedPercentage, userData.video2watchedPercentage, userData.video1watchedPercentage]);

    function parseCookie(cookie) {
        var cookieArray = cookie.split('__');
        var cookieObject = {};
        cookieArray.forEach((item) => {
            var itemArray = item.split('--');
            cookieObject[itemArray[0]] = itemArray[1];
        });
        console.log('cookieObject', cookieObject);
        return cookieObject;
    }

    useEffect(() => {
        var cookie = cookies["twg-mc"];
        if (cookie) {
            var cookieObject = parseCookie(cookie);
            setUserData((prevState) => {
                return ({
                    ...prevState,
                    email: cookieObject.email,
                    selectedVideo: parseInt(cookieObject.selectedVideo),
                    video1watchedPercentage: parseInt(cookieObject.video1watchedPercentage),
                    video2watchedPercentage: parseInt(cookieObject.video2watchedPercentage),
                    video3watchedPercentage: parseInt(cookieObject.video3watchedPercentage),
                    video4watchedPercentage: parseInt(cookieObject.video4watchedPercentage),
                    video5watchedPercentage: parseInt(cookieObject.video5watchedPercentage),
                    video6watchedPercentage: parseInt(cookieObject.video6watchedPercentage),
                    video7watchedPercentage: parseInt(cookieObject.video7watchedPercentage),
                    video8watchedPercentage: parseInt(cookieObject.video8watchedPercentage),
                    video9watchedPercentage: parseInt(cookieObject.video9watchedPercentage),
                    video10watchedPercentage: parseInt(cookieObject.video10watchedPercentage),
                });
            });
            setSelected(parseInt(cookieObject.selectedVideo));
        }
    }, []);
    function getProgress(position){
        var output = 0;
        switch (position) {
            case 1:
            output = userData.video1watchedPercentage;
            break;
            case 2:
            output = userData.video2watchedPercentage;
            break;
            case 3:
            output = userData.video3watchedPercentage;
            break;
            case 4:
            output = userData.video4watchedPercentage;
            break;
            case 5:
            output = userData.video5watchedPercentage;
            break;
            case 6:
            output = userData.video6watchedPercentage;
            break;
            case 7:
            output = userData.video7watchedPercentage;
            break;
            case 8:
            output = userData.video8watchedPercentage;
            break;
            case 9:
            output = userData.video9watchedPercentage;
            break;
            case 10:
            output = userData.video10watchedPercentage;
            break;
        }
        return output;
    }
    const parseTime = (str) => {
        var p = str.split(':'),
            s = 0, m = 1;

        while (p.length > 0) {
            s += m * parseInt(p.pop(), 10);
            m *= 60;
        }

        return s;
    }
    const displayPercentage = (position) => {
        var output = '';
        output = getProgress(position);
        return output + '%';
    }
    const displayPercentageMessage = (position) => {
        var output = '';
        output = getProgress(position);
        return output > 0 ? output + '% watched' : '';
    }

    // Vimeo Player Code  ----------------------------------------------------
    const formatTimeForVimeo = (milliseconds) => {
        const minutes = Math.floor(milliseconds / 6000);
        const seconds = Math.floor(milliseconds / 100);
        return '#t=' + minutes + 'm' + seconds + 's';
    }
    const getVideoLinkWithProgress = (itemObject) => {
        var output = 0;
        output = getProgress(itemObject.position) * parseTime(itemObject.videoLength) ;
        return output > 0 ? itemObject.videoURL + formatTimeForVimeo(output) : itemObject.videoURL;
    }
    const getVideoProgress = (itemObject) => {
        var output = 0;
        output = getProgress(itemObject.position) * parseTime(itemObject.videoLength) ;
        return output > 0 ? formatTimeForVimeo(output) : '';
    }
    const getSeconds = (itemObject) => {       
        return getProgress(itemObject.position) * parseTime(itemObject.videoLength) / 100;
    }
    const onVimeoPlay = () => {
        // console.log('onVimeoPlay', videoState);
        // console.log('videoState', videoState);
        if (videoState.loaded === false) {     
            setTimeout(() => {
                console.log('onVimeoPlay load to true', videoState);
                setVideoState((prevState) => {
                    return ({ ...prevState, loaded: true })
                    // .then(() => console.log('videoState', videoState));
                });  
            }, 200);
        }
    }
    const setVideoTime = () => {
        var VimeoIframeWrapper = document.getElementById('twg-vimeo-player-' + selected);
        var VimeoIframe = VimeoIframeWrapper.getElementsByTagName('iframe')[0];
        console.log('playerIframe', VimeoIframe);
        const currentVimeoPlayer = new Vimeo.Player(VimeoIframe);
        const videoObject = state.find(element => element.position == selected);
        const timeOffset = getSeconds(videoObject);

        console.log('player', currentVimeoPlayer);
        currentVimeoPlayer.setCurrentTime(timeOffset).then(function (seconds) {
            console.log('setCurrentTime: ' + seconds);
            // seconds = the actual time that the player seeked to
        }).catch(function (error) {
            switch (error.name) {
                case 'RangeError':
                    // the time was less than 0 or greater than the video’s duration
                    break;

                default:
                    // some other error occurred
                    break;
            }
        });
    }

    // TODO REFACTOR USING PROMISE / ASYNC AWAIT
    useEffect (() => {
        // I've tried an asyn function but it doesn't work so I've used a setTimeout https://app.clickup.com/t/2xrgeuv?comment=1182134191 is my attempted solution so far
        setTimeout(() => {
            setVideoTime();
            console.log('selected worked');
        }, 1000);
   
    }, [selected]);

    useEffect (() => {
        setTimeout(() => {
            setVideoTime();
            console.log('loaded worked');
        }, 2000);
    }, [videoState.loaded == true]);


    return (
        <div className="masterclass-videos">
            <CookiesProvider>
                {window.innerWidth < 990 && (

                    <div className="row masterclass-mobile-header text-left" >
                        <h3 className="masterclass-mobile-header-title">Masterclass Videos</h3>
                        <p className="masterclass-mobile-header-description">NYT-bestselling author Liz Wiseman shares her research on how small differences in the ways we think and operate can lead to enormous gains in our impact at work.</p>
                        {/* <p>{colState.colHeight}</p> */}
                    </div>
                )}
                
                <div className="row mb-5">
                    <div className="col-lg-9" 
                    ref={actualLeftColDimensionsRef} 
                    >
                        {state.map(item => ( 
                            <>
                                {/* {(selected == item.position) && ( */}
                                {(selected == item.position && item.videoEnabled) && (
                                    <div key={item.position} 
                                    className="masterclass-videos-item-current">
                                        <div className="masterclass-videos-item-video">
                                            <div style={videoState.actualHeight ? {height: videoState.actualHeight} : {}}>
                                                <VimeoPlayer 
                                                    className="VimeoWrapperPlayer" 
                                                    maxWidth={leftColumnStyles.css.maxWidth} 
                                                    // height={videoHeight} 
                                                    id={`twg-vimeo-player-${item.position}`} 
                                                    link={item.videoURL} 
                                                    // link={getVideoLinkWithProgress(item)} 
                                                    // vimeoOptions={getVideoProgress(item)}
                                                    onPlay={onVimeoPlay()}
                                                    progressInterval={3000}
                                                    onProgress={handleProgress}     
                                                    widthPercentage={videoState.widthPercentage}
                                               
                                                >
                                                    {/* <iframe src="https://player.vimeo.com/video/644554474?h=ff5d2d619b" width={leftColumnStyles.css.maxWidth} height={leftColumnStyles.videoMaxHeight} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                                                </VimeoPlayer>
                                            </div>
                                            {/* <iframe src={item.videoURL} width={leftColumnStyles.css.maxWidth} height={leftColumnStyles.videoMaxHeight} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                                        
                                            <div className="masterclass-videos-controls d-flex justify-content-between my-2" style={leftColumnStyles.css}>
                                                { (selected > 1) ? (
                                                    <a onClick={() => setSelected(selected - 1)}><img src="/wp-content/plugins/twg-react-blocks/src/assets/previous-icon.png" /></a>
                                                )
                                                : ( 
                                                    <span></span>
                                                )}
                                                <a onClick={() => setSelected(selected + 1)}><img src="/wp-content/plugins/twg-react-blocks/src/assets/next-icon.png" /></a> 
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                        {(selected >= (numberOfVideos + 1) ) && (
                            <div className="mx-auto my-5">
                                <strong>Thank you for watching!  </strong>
                                <p>We hope you enjoyed the videos as much as we enjoyed creating them for you. If you have any questions or suggestions, please <a href="/contact">contact us.</a></p>
                            </div>
                        )}
                        {/* Video Details and CTA */}
                        <div className="row" style={{ 
                            // backgroundColor: "#f5f5f5", 
                            borderRadius: 5, padding: 10 }}>
                            <div className="masterclass-videos-information" style={leftColumnStyles}>
                                {state.map(item => (
                                    <>
                                        {(selected == item.position && item.videoEnabled) && (
                                            <div key={item.position}
                                                className="masterclass-videos-item-current">
                                                <div className="masterclass-videos-item-content">
                                                    <div className="masterclass-videos-item-content-text row">
                                                        <div className="col-md-8 ps-0">
                                                            <h3 className="masterclass-video-title">{item.videoTitle}</h3>
                                                            <p className="masterclass-video-description">
                                                                {/* vsh: {colState.videoSidebarHeight} inner width {windowSize.innerWidth} */}
                                                                
                                                                {item.videoDescription}</p>
                                                        </div>
                                                        <div className="col-md-4 text-center masterclass-cta-wrapper mt-3 mt-sm-0">
                                                            <span className="videoCTALabel">{item.videoCTALabel}</span><br />
                                                            {/* NOTE: et_pb_button is a Divi theme class for the buttons  */}
                                                            <a className="videoCTA et_pb_button et_pb_button_0 et_pb_bg_layout_light my-3" href={item.videoCTAURL}>{item.videoCTAText}</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        )}
                                    </>
                                ))}

                            </div>
                        </div>

                    </div>
                    {/* Thumbnail Sidebar  */}
                    <div className="col-lg-3 mt-5 mt-lg-0" >
                        {window.innerWidth >= 990 && (
                            <div className="masterclass-sidebar-header ms-1" style={{minHeight: 200}}>
                                <h3 className="masterclass-sidebar-title">Masterclass Videos</h3>   
                                <p className="masterclass-sidebar-description">NYT-bestselling author Liz Wiseman shares her research on how small differences in the ways we think and operate can lead to enormous gains in our impact at work.</p>
                                {/* <p>{colState.colHeight}</p> */}
                            </div>
                        )}
                        <div className="masterclass-sidebar-videos  align-bottom" style={{ 
                            height: colState.videoSidebarHeight, 
                            // height: colState.colHeight - 200, 
                            overflowX: "hidden", 
                            overflowY: "auto" 
                            }}>
                        {state.map(item => (
                            <>
                                {
                                    (item.videoEnabled) ? (
                                        <>
                                            < div key={item.position}
                                                className={`masterclass-videos-item row mb-1 me-3 ms-1 ${item.position == selected ? "masterclass-videos-item-sidebar-current" : ""}`}
                                            >   
                                                <div onClick={() => setSelected(item.position)} className="masterclass-videos-item-content col-5 ">
                                                    {/* <span className="videoSubtitle">{item.videoSubTitle}</span><br /> */}
                                                    <span className="videoTitle">{item.videoTitle}</span><br />
                                                    {/* <span className="videoProgress">{displayPercentageMessage(item.position)}</span> */}
                                                    {/* <span className="videoLength">{item.videoLength}</span> */}
                                                </div>
                                                <div className="masterclass-videos-item-thumbnail col-7 text-end" onClick={() => setSelected(item.position)}>
                                                    <img src={item.videoThumbnailURL} alt={item.videoThumbnailAltText} />
                                                    <hr style={{ width: displayPercentage(item.position) }} />
                                                </div>
                                            </div>
                                            {/* <hr style={{ width: "90%", marginLeft: "auto",
                                            marginRight: "auto",
                                            marginBottom: "14px" }} /> */}
                                        </>
                                    )
                                    : (
                                        <>
                                            < div key={item.position}
                                                className="masterclass-videos-item row mb-1 me-3 ms-1"
                                            >
                                                <div  className="masterclass-videos-item-content col-5 ">
                                                    <span className="videoTitle">Coming Soon: {item.videoTitle}</span><br />
                                                    {/* <span className="videoSubtitle">Coming Soon... </span><br /> */}
                                                    {/* <span className="videoLength">{item.videoLength}</span> */}
                                                </div>
                                                <div className="masterclass-videos-item-thumbnail col-7 text-end" >
                                                    <img src={item.videoThumbnailURL} alt={item.videoThumbnailAltText} />
                                                </div>
                                            </div>
                                            {/* <hr style={{ width: "90%", marginLeft: "auto",
                                        marginRight: "auto",
                                        marginBottom: "14px" }} /> */}
                                        </>
                                    )   
                                }
                            </>
                        ))}
                        </div>
                    </div>
                </div>
            </CookiesProvider>
        </div>
    )
}
