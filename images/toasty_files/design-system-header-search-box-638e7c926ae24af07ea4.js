(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{789:function(e,t,o){"use strict";o.r(t);var r,n=o(1),a=o.n(n),s=o(4),c=o(9),i=o.n(c),l=o(879),u=o(3),h=o(28),f=o.n(h),p=f()({loader:function(){return o.e(12).then(o.bind(null,1844))},modules:["./WithSearch"],webpack:function(){return[1844]},loading:function(){return null}});var d,b,y=f()({loader:function(){return o.e(12).then(o.bind(null,1843))},modules:["./Box"],webpack:function(){return[1843]},loading:function(){return null}}),x=o(930),B=o.n(x);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,o,r){b||(b="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===a)t.children=r;else if(a>1){for(var c=new Array(a),i=0;i<a;i++)c[i]=arguments[i+3];t.children=c}return{$$typeof:b,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function m(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var j=Object(s.e)({searchBoxLabel:(d={id:"node_modules.@redbubble.design-system.react.headerAndFooter.components.SearchBox.searchBoxLabel"},F(d,"id","node_modules.@redbubble.design-system.react.headerAndFooter.components.SearchBox.searchBoxLabel"),F(d,"defaultMessage","Search"),d)}),k=g(l.a,{size:u.p}),P=function(e){function t(e){var o,n,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(o=!(s=w(t).call(this,e))||"object"!==v(s)&&"function"!==typeof s?O(n):s).state={searchBoxFocused:!1,searchBoxVisible:e.searchingExperience,searchBoxHeight:"auto"},o.toggleSearch=o.toggleSearch.bind(O(o)),o.handleOnSearchBoxFocus=o.handleOnSearchBoxFocus.bind(O(o)),o.SearchBox=function(e){var t=function(e,t,o,n){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===s)t.children=n;else if(s>1){for(var i=new Array(s),l=0;l<s;l++)i[l]=arguments[l+3];t.children=i}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}(e,{});return function(e){return a.a.createElement(p,e,t)}}(y),o}var o,s,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,n["Component"]),o=t,(s=[{key:"handleOnSearchBoxFocus",value:function(){var e=this;this.props.handleSearchBoxInteractions({type:"focus",state:!0},function(){setTimeout(function(){var t=window.innerHeight-e.searchBoxNode.getBoundingClientRect().top;e.setState({searchBoxFocused:!0}),window.innerWidth>=1024||e.setState({searchBoxHeight:"".concat(t,"px")})},1)})}},{key:"toggleSearch",value:function(){var e=this;this.setState(function(t){return t.searchBoxVisible?(e.props.handleSearchBoxInteractions({type:"visible",state:!1}),e.props.handleSearchBoxInteractions({type:"focus",state:!1}),e.setState({searchBoxFocused:!1,searchBoxHeight:"auto"})):e.props.handleSearchBoxInteractions({type:"visible",state:!0}),{searchBoxVisible:!t.searchBoxVisible}})}},{key:"componentWillReceiveProps",value:function(e){e.searchBoxVisible!==this.props.searchBoxVisible&&this.setState({searchBoxVisible:e.searchBoxVisible}),e.searchBoxFocused!==this.props.searchBoxFocused&&(e.searchBoxFocused||this.setState({searchBoxHeight:"auto"}),this.setState({searchBoxFocused:e.searchBoxFocused}))}},{key:"render",value:function(){var e,t=this,o=this.props,r=o.intl,n=o.className,s=o.handleScrollableRef,c=o.doSearch,l=this.state,u=l.searchBoxVisible,h=l.searchBoxFocused,f=l.searchBoxHeight;return g("div",{className:i()(n,B.a.searchBoxWrapper,(F(e={},B.a.searchBoxVisible,u),F(e,B.a.searchBoxFocused,h),e))},void 0,a.a.createElement("div",{className:B.a.searchBox,style:{height:f},ref:function(e){t.searchBoxNode=e}},a.a.createElement(this.SearchBox,S({},this.props,{onSearchBoxFocus:this.handleOnSearchBoxFocus,isOpen:h,handleScrollableRef:s,productContext:this.props.searchProductContext,onSearch:c}))),g("button",{className:B.a.toggleSearch,onClick:this.toggleSearch,type:"button","aria-label":r.formatMessage(j.searchBoxLabel)},void 0,k))}}])&&m(o.prototype,s),c&&m(o,c),t}();P.displayName="SearchBox";t.default=P},879:function(e,t,o){"use strict";var r=o(1),n=o.n(r),a=o(58);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var c=function(e){return n.a.createElement(a.a,s({},e,{dangerouslySetIcon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71 20.29l-5.4-5.39A7.92 7.92 0 0 0 18 10a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l5.39 5.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM4 10a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" fill="currentColor"/></svg>'}))};c.displayName="SearchIcon",t.a=c},930:function(e,t,o){e.exports={searchBoxWrapper:"styles__searchBoxWrapper--26xu0",searchBox:"styles__searchBox--1IaaG",toggleSearch:"styles__toggleSearch--yq7Lk",searchBoxVisible:"styles__searchBoxVisible--3IWTe",searchBoxFocused:"styles__searchBoxFocused--34KWO",logo:"styles__logo--3kjY6"}}}]);
//# sourceMappingURL=design-system-header-search-box-6ad48a13b56b98fd0359.js.map