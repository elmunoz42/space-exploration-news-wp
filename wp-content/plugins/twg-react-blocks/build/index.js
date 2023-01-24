/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



wp.blocks.registerBlockType("twg-react-blocks/masterclass-videos", {
  title: "Masterclass Videos",
  icon: "format-video",
  category: "media",
  attributes: {
    videoEnabled1: {
      type: "boolean"
    },
    videoURL1: {
      type: "string"
    },
    videoTitle1: {
      type: "string"
    },
    videoDescription1: {
      type: "string"
    },
    videoThumbnailURL1: {
      type: "string"
    },
    videoThumbnailAltText1: {
      type: "string"
    },
    videoCTAURL1: {
      type: "string"
    },
    videoCTAText1: {
      type: "string"
    },
    videoCTALabel1: {
      type: "string"
    },
    videoSubTitle1: {
      type: "string"
    },
    videoLength1: {
      type: "string"
    },
    videoEnabled2: {
      type: "boolean"
    },
    videoURL2: {
      type: "string"
    },
    videoTitle2: {
      type: "string"
    },
    videoDescription2: {
      type: "string"
    },
    videoThumbnailURL2: {
      type: "string"
    },
    videoThumbnailAltText2: {
      type: "string"
    },
    videoCTAURL2: {
      type: "string"
    },
    videoCTAText2: {
      type: "string"
    },
    videoCTALabel2: {
      type: "string"
    },
    videoSubTitle2: {
      type: "string"
    },
    videoLength2: {
      type: "string"
    },
    videoEnabled3: {
      type: "boolean"
    },
    videoURL3: {
      type: "string"
    },
    videoTitle3: {
      type: "string"
    },
    videoDescription3: {
      type: "string"
    },
    videoThumbnailURL3: {
      type: "string"
    },
    videoThumbnailAltText3: {
      type: "string"
    },
    videoCTAURL3: {
      type: "string"
    },
    videoCTAText3: {
      type: "string"
    },
    videoCTALabel3: {
      type: "string"
    },
    videoSubTitle3: {
      type: "string"
    },
    videoLength3: {
      type: "string"
    },
    videoEnabled4: {
      type: "boolean"
    },
    videoURL4: {
      type: "string"
    },
    videoTitle4: {
      type: "string"
    },
    videoDescription4: {
      type: "string"
    },
    videoThumbnailURL4: {
      type: "string"
    },
    videoThumbnailAltText4: {
      type: "string"
    },
    videoCTAURL4: {
      type: "string"
    },
    videoCTAText4: {
      type: "string"
    },
    videoCTALabel4: {
      type: "string"
    },
    videoSubTitle4: {
      type: "string"
    },
    videoLength4: {
      type: "string"
    },
    videoEnabled5: {
      type: "boolean"
    },
    videoURL5: {
      type: "string"
    },
    videoTitle5: {
      type: "string"
    },
    videoDescription5: {
      type: "string"
    },
    videoThumbnailURL5: {
      type: "string"
    },
    videoThumbnailAltText5: {
      type: "string"
    },
    videoCTAURL5: {
      type: "string"
    },
    videoCTAText5: {
      type: "string"
    },
    videoCTALabel5: {
      type: "string"
    },
    videoLength5: {
      type: "string"
    },
    videoEnabled6: {
      type: "boolean"
    },
    videoURL6: {
      type: "string"
    },
    videoTitle6: {
      type: "string"
    },
    videoDescription6: {
      type: "string"
    },
    videoThumbnailURL6: {
      type: "string"
    },
    videoThumbnailAltText6: {
      type: "string"
    },
    videoCTAURL6: {
      type: "string"
    },
    videoCTAText6: {
      type: "string"
    },
    videoCTALabel6: {
      type: "string"
    },
    videoLength6: {
      type: "string"
    },
    videoEnabled7: {
      type: "boolean"
    },
    videoURL7: {
      type: "string"
    },
    videoTitle7: {
      type: "string"
    },
    videoDescription7: {
      type: "string"
    },
    videoThumbnailURL7: {
      type: "string"
    },
    videoThumbnailAltText7: {
      type: "string"
    },
    videoCTAURL7: {
      type: "string"
    },
    videoCTAText7: {
      type: "string"
    },
    videoCTALabel7: {
      type: "string"
    },
    videoLength7: {
      type: "string"
    },
    videoEnabled8: {
      type: "boolean"
    },
    videoURL8: {
      type: "string"
    },
    videoTitle8: {
      type: "string"
    },
    videoDescription8: {
      type: "string"
    },
    videoThumbnailURL8: {
      type: "string"
    },
    videoThumbnailAltText8: {
      type: "string"
    },
    videoCTAURL8: {
      type: "string"
    },
    videoCTAText8: {
      type: "string"
    },
    videoCTALabel8: {
      type: "string"
    },
    videoLength8: {
      type: "string"
    },
    videoEnabled9: {
      type: "boolean"
    },
    videoURL9: {
      type: "string"
    },
    videoTitle9: {
      type: "string"
    },
    videoDescription9: {
      type: "string"
    },
    videoThumbnailURL9: {
      type: "string"
    },
    videoThumbnailAltText9: {
      type: "string"
    },
    videoCTAURL9: {
      type: "string"
    },
    videoCTAText9: {
      type: "string"
    },
    videoCTALabel9: {
      type: "string"
    },
    videoLength9: {
      type: "string"
    },
    videoEnabled10: {
      type: "boolean"
    },
    videoURL10: {
      type: "string"
    },
    videoTitle10: {
      type: "string"
    },
    videoDescription10: {
      type: "string"
    },
    videoThumbnailURL10: {
      type: "string"
    },
    videoThumbnailAltText10: {
      type: "string"
    },
    videoCTAURL10: {
      type: "string"
    },
    videoCTAText10: {
      type: "string"
    },
    videoCTALabel10: {
      type: "string"
    },
    videoLength10: {
      type: "string"
    }
  },
  edit: EditComponent,
  save: function () {
    return null;
  }
});

function EditComponent(props) {
  console.log('props', props);
  const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    numberOfVideos: 10,
    videoEnabled1: props.attributes.videoEnabled1,
    videoURL1: props.attributes.videoURL1,
    videoTitle1: props.attributes.videoTitle1,
    videoDescription1: props.attributes.videoDescription1,
    videoThumbnailURL1: props.attributes.videoThumbnailURL1,
    videoThumbnailAltText1: props.attributes.videoThumbnailAltText1,
    videoCTALabel1: props.attributes.videoCTALabel1,
    videoCTAURL1: props.attributes.videoCTAURL1,
    videoCTAText1: props.attributes.videoCTAText1,
    videoSubTitle1: props.attributes.videoSubTitle1,
    videoLength1: props.attributes.videoLength1,
    videoEnabled2: props.attributes.videoEnabled2,
    videoURL2: props.attributes.videoURL2,
    videoTitle2: props.attributes.videoTitle2,
    videoDescription2: props.attributes.videoDescription2,
    videoThumbnailURL2: props.attributes.videoThumbnailURL2,
    videoThumbnailAltText2: props.attributes.videoThumbnailAltText2,
    videoCTALabel2: props.attributes.videoCTALabel2,
    videoCTAURL2: props.attributes.videoCTAURL2,
    videoCTAText2: props.attributes.videoCTAText2,
    videoSubTitle2: props.attributes.videoSubTitle2,
    videoLength2: props.attributes.videoLength2,
    videoEnabled3: props.attributes.videoEnabled3,
    videoURL3: props.attributes.videoURL3,
    videoTitle3: props.attributes.videoTitle3,
    videoDescription3: props.attributes.videoDescription3,
    videoThumbnailURL3: props.attributes.videoThumbnailURL3,
    videoThumbnailAltText3: props.attributes.videoThumbnailAltText3,
    videoCTALabel3: props.attributes.videoCTALabel3,
    videoCTAURL3: props.attributes.videoCTAURL3,
    videoCTAText3: props.attributes.videoCTAText3,
    videoSubTitle3: props.attributes.videoSubTitle3,
    videoLength3: props.attributes.videoLength3,
    videoEnabled4: props.attributes.videoEnabled4,
    videoURL4: props.attributes.videoURL4,
    videoTitle4: props.attributes.videoTitle4,
    videoDescription4: props.attributes.videoDescription4,
    videoThumbnailURL4: props.attributes.videoThumbnailURL4,
    videoThumbnailAltText4: props.attributes.videoThumbnailAltText4,
    videoCTALabel4: props.attributes.videoCTALabel4,
    videoCTAURL4: props.attributes.videoCTAURL4,
    videoCTAText4: props.attributes.videoCTAText4,
    videoSubTitle4: props.attributes.videoSubTitle4,
    videoLength4: props.attributes.videoLength4,
    videoEnabled5: props.attributes.videoEnabled5,
    videoURL5: props.attributes.videoURL5,
    videoTitle5: props.attributes.videoTitle5,
    videoDescription5: props.attributes.videoDescription5,
    videoThumbnailURL5: props.attributes.videoThumbnailURL5,
    videoThumbnailAltText5: props.attributes.videoThumbnailAltText5,
    videoCTALabel5: props.attributes.videoCTALabel5,
    videoCTAURL5: props.attributes.videoCTAURL5,
    videoCTAText5: props.attributes.videoCTAText5,
    videoSubTitle5: props.attributes.videoSubTitle5,
    videoLength5: props.attributes.videoLength5,
    videoEnabled6: props.attributes.videoEnabled6,
    videoTitle6: props.attributes.videoTitle6,
    videoDescription6: props.attributes.videoDescription6,
    videoThumbnailURL6: props.attributes.videoThumbnailURL6,
    videoThumbnailAltText6: props.attributes.videoThumbnailAltText6,
    videoCTALabel6: props.attributes.videoCTALabel6,
    videoCTAURL6: props.attributes.videoCTAURL6,
    videoCTAText6: props.attributes.videoCTAText6,
    videoSubTitle6: props.attributes.videoSubTitle6,
    videoLength6: props.attributes.videoLength6,
    videoEnabled7: props.attributes.videoEnabled7,
    videoTitle7: props.attributes.videoTitle7,
    videoDescription7: props.attributes.videoDescription7,
    videoThumbnailURL7: props.attributes.videoThumbnailURL7,
    videoThumbnailAltText7: props.attributes.videoThumbnailAltText7,
    videoCTALabel7: props.attributes.videoCTALabel7,
    videoCTAURL7: props.attributes.videoCTAURL7,
    videoCTAText7: props.attributes.videoCTAText7,
    videoSubTitle7: props.attributes.videoSubTitle7,
    videoLength7: props.attributes.videoLength7,
    videoEnabled8: props.attributes.videoEnabled8,
    videoTitle8: props.attributes.videoTitle8,
    videoDescription8: props.attributes.videoDescription8,
    videoThumbnailURL8: props.attributes.videoThumbnailURL8,
    videoThumbnailAltText8: props.attributes.videoThumbnailAltText8,
    videoCTALabel8: props.attributes.videoCTALabel8,
    videoCTAURL8: props.attributes.videoCTAURL8,
    videoCTAText8: props.attributes.videoCTAText8,
    videoSubTitle8: props.attributes.videoSubTitle8,
    videoLength8: props.attributes.videoLength8,
    videoEnabled9: props.attributes.videoEnabled9,
    videoTitle9: props.attributes.videoTitle9,
    videoDescription9: props.attributes.videoDescription9,
    videoThumbnailURL9: props.attributes.videoThumbnailURL9,
    videoThumbnailAltText9: props.attributes.videoThumbnailAltText9,
    videoCTALabel9: props.attributes.videoCTALabel9,
    videoCTAURL9: props.attributes.videoCTAURL9,
    videoCTAText9: props.attributes.videoCTAText9,
    videoSubTitle9: props.attributes.videoSubTitle9,
    videoLength9: props.attributes.videoLength9,
    videoEnabled10: props.attributes.videoEnabled10,
    videoTitle10: props.attributes.videoTitle10,
    videoDescription10: props.attributes.videoDescription10,
    videoThumbnailURL10: props.attributes.videoThumbnailURL10,
    videoThumbnailAltText10: props.attributes.videoThumbnailAltText10,
    videoCTALabel10: props.attributes.videoCTALabel10,
    videoCTAURL10: props.attributes.videoCTAURL10,
    videoCTAText10: props.attributes.videoCTAText10,
    videoSubTitle10: props.attributes.videoSubTitle10,
    videoLength10: props.attributes.videoLength10
  });
  console.log('state', state);

  const handleChange = event => {
    console.log('event', event);
    const {
      name,
      value
    } = event.target;
    setState({ ...state,
      [name]: value
    });
    props.setAttributes({
      [name]: value
    });
  };

  const handleChangeCheckbox = event => {
    console.log('event', event);
    const {
      name,
      checked
    } = event.target;
    setState({ ...state,
      [name]: checked
    });
    props.setAttributes({
      [name]: checked
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "twgReactBlocksMasterClass"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled1",
    checked: state.videoEnabled1,
    onChange: handleChangeCheckbox
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL1",
    value: state.videoURL1,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle1",
    value: state.videoTitle1,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL1",
    value: state.videoThumbnailURL1,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText1",
    value: state.videoThumbnailAltText1,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription1",
    type: "text",
    value: state.videoDescription1,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel1",
    value: state.videoCTALabel1,
    onChange: handleChange,
    placeholder: "Video CTA Label1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL1",
    value: state.videoCTAURL1,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText1",
    value: state.videoCTAText1,
    onChange: handleChange,
    placeholder: "Video CTA Text1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle1",
    value: state.videoSubTitle1,
    onChange: handleChange,
    placeholder: "Video Sub Title1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength1",
    value: state.videoLength1,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled2",
    checked: state.videoEnabled2,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL2",
    value: state.videoURL2,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle2",
    value: state.videoTitle2,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL2",
    value: state.videoThumbnailURL2,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText2",
    value: state.videoThumbnailAltText2,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription2",
    type: "text",
    value: state.videoDescription2,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel2",
    value: state.videoCTALabel2,
    onChange: handleChange,
    placeholder: "Video CTA Label2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL2",
    value: state.videoCTAURL2,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText2",
    value: state.videoCTAText2,
    onChange: handleChange,
    placeholder: "Video CTA Text2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle2",
    value: state.videoSubTitle2,
    onChange: handleChange,
    placeholder: "Video Sub Title2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength2",
    value: state.videoLength2,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled3",
    checked: state.videoEnabled3,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL3",
    value: state.videoURL3,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle3",
    value: state.videoTitle3,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL3",
    value: state.videoThumbnailURL3,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText3",
    value: state.videoThumbnailAltText3,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription3",
    type: "text",
    value: state.videoDescription3,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel3",
    value: state.videoCTALabel3,
    onChange: handleChange,
    placeholder: "Video CTA Label3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL3",
    value: state.videoCTAURL3,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText3",
    value: state.videoCTAText3,
    onChange: handleChange,
    placeholder: "Video CTA Text3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle3",
    value: state.videoSubTitle3,
    onChange: handleChange,
    placeholder: "Video Sub Title3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength3",
    value: state.videoLength3,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled4",
    checked: state.videoEnabled4,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL4",
    value: state.videoURL4,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle4",
    value: state.videoTitle4,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL4",
    value: state.videoThumbnailURL4,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText4",
    value: state.videoThumbnailAltText4,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription4",
    type: "text",
    value: state.videoDescription4,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel4",
    value: state.videoCTALabel4,
    onChange: handleChange,
    placeholder: "Video CTA Label4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL4",
    value: state.videoCTAURL4,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText4",
    value: state.videoCTAText4,
    onChange: handleChange,
    placeholder: "Video CTA Text4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle4",
    value: state.videoSubTitle4,
    onChange: handleChange,
    placeholder: "Video Sub Title4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength4",
    value: state.videoLength4,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled5",
    checked: state.videoEnabled5,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL5",
    value: state.videoURL5,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle5",
    value: state.videoTitle5,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL5",
    value: state.videoThumbnailURL5,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText5",
    value: state.videoThumbnailAltText5,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription5",
    type: "text",
    value: state.videoDescription5,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel5",
    value: state.videoCTALabel5,
    onChange: handleChange,
    placeholder: "Video CTA Label5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL5",
    value: state.videoCTAURL5,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText5",
    value: state.videoCTAText5,
    onChange: handleChange,
    placeholder: "Video CTA Text5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle5",
    value: state.videoSubTitle5,
    onChange: handleChange,
    placeholder: "Video Sub Title5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength5",
    value: state.videoLength5,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 6"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled6",
    checked: state.videoEnabled6,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL6",
    value: state.videoURL6,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle6",
    value: state.videoTitle6,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL6",
    value: state.videoThumbnailURL6,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText6",
    value: state.videoThumbnailAltText6,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription6",
    type: "text",
    value: state.videoDescription6,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel6",
    value: state.videoCTALabel6,
    onChange: handleChange,
    placeholder: "Video CTA Label6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL6",
    value: state.videoCTAURL6,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText6",
    value: state.videoCTAText6,
    onChange: handleChange,
    placeholder: "Video CTA Text6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle6",
    value: state.videoSubTitle6,
    onChange: handleChange,
    placeholder: "Video Sub Title6"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength6",
    value: state.videoLength6,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video7"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled7",
    checked: state.videoEnabled7,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL7",
    value: state.videoURL7,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle7",
    value: state.videoTitle7,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL7",
    value: state.videoThumbnailURL7,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText7",
    value: state.videoThumbnailAltText7,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription7",
    type: "text",
    value: state.videoDescription7,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel7",
    value: state.videoCTALabel7,
    onChange: handleChange,
    placeholder: "Video CTA Label7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL7",
    value: state.videoCTAURL7,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText7",
    value: state.videoCTAText7,
    onChange: handleChange,
    placeholder: "Video CTA Text7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle7",
    value: state.videoSubTitle7,
    onChange: handleChange,
    placeholder: "Video Sub Title7"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength7",
    value: state.videoLength7,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video8"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 8"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled8",
    checked: state.videoEnabled8,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL8",
    value: state.videoURL8,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle8",
    value: state.videoTitle8,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL8",
    value: state.videoThumbnailURL8,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/180x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText8",
    value: state.videoThumbnailAltText8,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription8",
    type: "text",
    value: state.videoDescription8,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel8",
    value: state.videoCTALabel8,
    onChange: handleChange,
    placeholder: "Video CTA Label8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL8",
    value: state.videoCTAURL8,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText8",
    value: state.videoCTAText8,
    onChange: handleChange,
    placeholder: "Video CTA Text8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle8",
    value: state.videoSubTitle8,
    onChange: handleChange,
    placeholder: "Video Sub Title8"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength8",
    value: state.videoLength8,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video9"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 9"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled9",
    checked: state.videoEnabled9,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL9",
    value: state.videoURL9,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle9",
    value: state.videoTitle9,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL9",
    value: state.videoThumbnailURL9,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/190x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText9",
    value: state.videoThumbnailAltText9,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "90",
    name: "videoDescription9",
    type: "text",
    value: state.videoDescription9,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel9",
    value: state.videoCTALabel9,
    onChange: handleChange,
    placeholder: "Video CTA Label9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL9",
    value: state.videoCTAURL9,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText9",
    value: state.videoCTAText9,
    onChange: handleChange,
    placeholder: "Video CTA Text9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle9",
    value: state.videoSubTitle9,
    onChange: handleChange,
    placeholder: "Video Sub Title9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength9",
    value: state.videoLength9,
    onChange: handleChange,
    placeholder: "1:23"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mc__video10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "mc__label"
  }, "Video 10"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Enabled"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "videoEnabled10",
    checked: state.videoEnabled10,
    onChange: handleChangeCheckbox,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoURL10",
    value: state.videoURL10,
    onChange: handleChange,
    placeholder: "https://www.youtube.com/watch?v=NKqogVcqDHA"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoTitle10",
    value: state.videoTitle10,
    onChange: handleChange,
    placeholder: "Video Title"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Thumbnail URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailURL10",
    value: state.videoThumbnailURL10,
    onChange: handleChange,
    placeholder: "https://via.placeholder.com/1100x101.png"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Thumbnail Alt Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoThumbnailAltText10",
    value: state.videoThumbnailAltText10,
    onChange: handleChange,
    placeholder: "Video Thumbnail Alt Text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Description"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    rows: "4",
    cols: "100",
    name: "videoDescription10",
    type: "text",
    value: state.videoDescription10,
    onChange: handleChange,
    placeholder: "Video Description"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Label"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTALabel10",
    value: state.videoCTALabel10,
    onChange: handleChange,
    placeholder: "Video CTA Label10"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA URL"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAURL10",
    value: state.videoCTAURL10,
    onChange: handleChange,
    placeholder: "https://thewisemangroup.com/resource-center?10"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video CTA Text"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoCTAText10",
    value: state.videoCTAText10,
    onChange: handleChange,
    placeholder: "Video CTA Text10"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Sub Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoSubTitle10",
    value: state.videoSubTitle10,
    onChange: handleChange,
    placeholder: "Video Sub Title10"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mc__label"
  }, "Video Length"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    name: "videoLength10",
    value: state.videoLength10,
    onChange: handleChange,
    placeholder: "1:23"
  })));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map