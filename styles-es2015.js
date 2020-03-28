(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --primary-color: black;\n  --secondary-color: rgba(229,148,0,0.9);\n  --overlay-color: rgba(46, 62, 209, 0.85);\n  --menu-speed: 0.75s;\n  /* All this variables are available on menu.css as well \n      because style.css is included 1st in index.html   */\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  line-height: 1.4;\n}\n.container {\n  max-width: 960px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 3rem;\n}\n#showcase {\n  background: var(--primary-color);\n  color: #fff;\n  height: 100vh;\n  position: relative;\n}\n#showcase::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n#showcase .showcase-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  flex-direction: column;\n  height: 100%;\n}\n#showcase h1 {\n  font-size: 4rem;\n}\n#showcase p {\n  font-size: 1.3rem;\n}\n.btn {\n  display: inline-block;\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  padding: 0.75rem 1.5rem;\n  margin-top: 1rem;\n  transition: opacity 1s ease-out;\n  text-decoration: none;\n}\n.btn:hover {\n  opacity: 0.4;\n}\n.menu-wrap {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.menu-wrap .toggler {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  /* background: red; */\n  opacity: 0;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  cursor: pointer;\n}\n.menu-wrap .hamburger {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 1rem;\n  background: var(--primary-color);\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n}\n/* Hamburger Lines */\n.menu-wrap .hamburger > div {\n  position: relative;\n  flex: none;\n  width: 100%;\n  height: 2px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.4s ease-in-out;\n}\n/* Hamburger Line Before & After  */\n.menu-wrap .hamburger > div:before,\n.menu-wrap .hamburger > div:after {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  z-index: 1;\n  width: 100%;\n  height: 2px;\n  background: inherit;\n}\n.menu-wrap .hamburger > div::after {\n  top: 10px;\n}\n/* Toggler Animation */\n/* .menu-wrap .toggler:checked + .menu-wrap .hamburger > div ------->  Problem  */\n.menu-wrap .toggler:checked + .hamburger > div {\n  transform: rotate(135deg);\n}\n.menu-wrap .toggler:checked + .hamburger > div:before,\n.menu-wrap .toggler:checked + .hamburger > div:after {\n  top: 0;\n  transform: rotate(90deg);\n}\n.menu-wrap .toggler:checked:hover + .hamburger > div {\n  transform: rotate(225deg);\n}\n/* Menu-Overlay (hidden) */\n.menu-wrap .menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  visibility: hidden;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.menu-wrap .menu > div {\n  background: var(--overlay-color);\n  width: 200vw;\n  height: 200vh;\n  border-radius: 50%;\n  display: flex;\n  flex: none;\n  align-items: center;\n  justify-content: center;\n  transform: scale(0);\n  transition: all 0.4s ease;\n}\n.menu-wrap .menu > div > div {\n  text-align: center;\n  max-width: 90vw;\n  max-height: 100vh;\n  opacity: 0;\n  /* background: red; */\n  transition: opacity 0.4s ease;\n}\n.menu-wrap .menu ul li {\n  list-style: none;\n  color: #fff;\n  font-size: 1.5rem;\n  padding: 1rem;\n}\n.menu-wrap .menu ul li a {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.7s ease;\n}\n.menu-wrap .menu ul li a:hover {\n  color: var(--secondary-color);\n}\n/* Show Menu */\n.menu-wrap .toggler:checked ~ .menu > div {\n  transform: scale(1);\n  transition-duration: var(--menu-speed);\n}\n.menu-wrap .toggler:checked ~ .menu > div > div {\n  opacity: 1;\n  transition: opacity 0.4s ease;\n}\n.menu-wrap .toggler:checked ~ .menu {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWRoYXZhbnN1bmRhcmFyYWovRG9jdW1lbnRzL0dpdEh1Yi9wb3J0Zm9saW8vc3JjL3N0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDSSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtFQUNBO3lEQUFBO0FDRUo7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjtBREVBO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdBO0VBQ0ksZUFBQTtBQ0FKO0FER0E7RUFDSSxpQkFBQTtBQ0FKO0FER0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURLQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNGSjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDRko7QURLQSxvQkFBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBREtBLG1DQUFBO0FBQ0E7O0VBRUksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDRko7QURLQTtFQUNJLFNBQUE7QUNGSjtBREtBLHNCQUFBO0FBQ0EsaUZBQUE7QUFDQTtFQUNJLHlCQUFBO0FDRko7QURLQTs7RUFFSSxNQUFBO0VBQ0Esd0JBQUE7QUNGSjtBREtBO0VBQ0kseUJBQUE7QUNGSjtBREtBLDBCQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZKO0FES0E7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRko7QURLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRko7QURLQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDRko7QURLQTtFQUNJLDZCQUFBO0FDRko7QURLQSxjQUFBO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLHNDQUFBO0FDRko7QURLQTtFQUNJLFVBQUE7RUFDQSw2QkFBQTtBQ0ZKO0FES0E7RUFDSSxtQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgICAtLXByaW1hcnktY29sb3I6IGJsYWNrO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiByZ2JhKDIyOSwxNDgsMCwwLjkpO1xuICAgIC0tb3ZlcmxheS1jb2xvcjogcmdiYSg0NiwgNjIsIDIwOSwgMC44NSk7XG4gICAgLS1tZW51LXNwZWVkOiAwLjc1cztcbiAgICAvKiBBbGwgdGhpcyB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBvbiBtZW51LmNzcyBhcyB3ZWxsIFxuICAgICAgICBiZWNhdXNlIHN0eWxlLmNzcyBpcyBpbmNsdWRlZCAxc3QgaW4gaW5kZXguaHRtbCAgICovXG59XG5cbip7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuI3Nob3djYXNlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuI3Nob3djYXNlOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIC8vIGJhY2tncm91bmQ6IHVybCgnLi4vaW1nL3Nob3djYXNlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG59XG5cbiNzaG93Y2FzZSAuc2hvd2Nhc2UtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI3Nob3djYXNlIGgxe1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuI3Nob3djYXNlIHAge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4uYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0OyAgXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG59XG5cblxuXG4ubWVudS13cmFwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxuLm1lbnUtd3JhcCAudG9nZ2xlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvKiBiYWNrZ3JvdW5kOiByZWQ7ICovXG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtd3JhcCAuaGFtYnVyZ2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi8qIEhhbWJ1cmdlciBMaW5lcyAqL1xuLm1lbnUtd3JhcCAuaGFtYnVyZ2VyID4gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLyogSGFtYnVyZ2VyIExpbmUgQmVmb3JlICYgQWZ0ZXIgICovXG4ubWVudS13cmFwIC5oYW1idXJnZXIgPiBkaXY6YmVmb3JlLFxuLm1lbnUtd3JhcCAuaGFtYnVyZ2VyID4gZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tZW51LXdyYXAgLmhhbWJ1cmdlciA+IGRpdjo6YWZ0ZXIge1xuICAgIHRvcDogMTBweDtcbn1cblxuLyogVG9nZ2xlciBBbmltYXRpb24gKi9cbi8qIC5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5tZW51LXdyYXAgLmhhbWJ1cmdlciA+IGRpdiAtLS0tLS0tPiAgUHJvYmxlbSAgKi9cbi5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5oYW1idXJnZXIgPiBkaXYge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG59XG5cbi5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5oYW1idXJnZXIgPiBkaXY6YmVmb3JlLFxuLm1lbnUtd3JhcCAudG9nZ2xlcjpjaGVja2VkICsgLmhhbWJ1cmdlciA+IGRpdjphZnRlciB7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLm1lbnUtd3JhcCAudG9nZ2xlcjpjaGVja2VkOmhvdmVyICsgLmhhbWJ1cmdlciA+IGRpdiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbn1cblxuLyogTWVudS1PdmVybGF5IChoaWRkZW4pICovXG4ubWVudS13cmFwIC5tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1lbnUtd3JhcCAubWVudSA+IGRpdiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3ZlcmxheS1jb2xvcik7XG4gICAgd2lkdGg6IDIwMHZ3O1xuICAgIGhlaWdodDogMjAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLm1lbnUtd3JhcCAubWVudSA+IGRpdiA+IGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogOTB2dztcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC8qIGJhY2tncm91bmQ6IHJlZDsgKi9cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cblxuLm1lbnUtd3JhcCAubWVudSB1bCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4ubWVudS13cmFwIC5tZW51IHVsIGxpIGEge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjdzIGVhc2U7XG59XG5cbi5tZW51LXdyYXAgLm1lbnUgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi8qIFNob3cgTWVudSAqL1xuLm1lbnUtd3JhcCAudG9nZ2xlcjpjaGVja2VkIH4gLm1lbnUgPiBkaXYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tbWVudS1zcGVlZCk7XG59XG5cbi5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCB+IC5tZW51ID4gZGl2ID4gZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4ubWVudS13cmFwIC50b2dnbGVyOmNoZWNrZWQgfiAubWVudSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogYmxhY2s7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yOiByZ2JhKDIyOSwxNDgsMCwwLjkpO1xuICAtLW92ZXJsYXktY29sb3I6IHJnYmEoNDYsIDYyLCAyMDksIDAuODUpO1xuICAtLW1lbnUtc3BlZWQ6IDAuNzVzO1xuICAvKiBBbGwgdGhpcyB2YXJpYWJsZXMgYXJlIGF2YWlsYWJsZSBvbiBtZW51LmNzcyBhcyB3ZWxsIFxuICAgICAgYmVjYXVzZSBzdHlsZS5jc3MgaXMgaW5jbHVkZWQgMXN0IGluIGluZGV4Lmh0bWwgICAqL1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAgM3JlbTtcbn1cblxuI3Nob3djYXNlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNzaG93Y2FzZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jc2hvd2Nhc2UgLnNob3djYXNlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNzaG93Y2FzZSBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuI3Nob3djYXNlIHAge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5idG46aG92ZXIge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5tZW51LXdyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLm1lbnUtd3JhcCAudG9nZ2xlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUtd3JhcCAuaGFtYnVyZ2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTtcbn1cblxuLyogSGFtYnVyZ2VyIExpbmVzICovXG4ubWVudS13cmFwIC5oYW1idXJnZXIgPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBIYW1idXJnZXIgTGluZSBCZWZvcmUgJiBBZnRlciAgKi9cbi5tZW51LXdyYXAgLmhhbWJ1cmdlciA+IGRpdjpiZWZvcmUsXG4ubWVudS13cmFwIC5oYW1idXJnZXIgPiBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1lbnUtd3JhcCAuaGFtYnVyZ2VyID4gZGl2OjphZnRlciB7XG4gIHRvcDogMTBweDtcbn1cblxuLyogVG9nZ2xlciBBbmltYXRpb24gKi9cbi8qIC5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5tZW51LXdyYXAgLmhhbWJ1cmdlciA+IGRpdiAtLS0tLS0tPiAgUHJvYmxlbSAgKi9cbi5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5oYW1idXJnZXIgPiBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4ubWVudS13cmFwIC50b2dnbGVyOmNoZWNrZWQgKyAuaGFtYnVyZ2VyID4gZGl2OmJlZm9yZSxcbi5tZW51LXdyYXAgLnRvZ2dsZXI6Y2hlY2tlZCArIC5oYW1idXJnZXIgPiBkaXY6YWZ0ZXIge1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLm1lbnUtd3JhcCAudG9nZ2xlcjpjaGVja2VkOmhvdmVyICsgLmhhbWJ1cmdlciA+IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi8qIE1lbnUtT3ZlcmxheSAoaGlkZGVuKSAqL1xuLm1lbnUtd3JhcCAubWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVudS13cmFwIC5tZW51ID4gZGl2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tb3ZlcmxheS1jb2xvcik7XG4gIHdpZHRoOiAyMDB2dztcbiAgaGVpZ2h0OiAyMDB2aDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cblxuLm1lbnUtd3JhcCAubWVudSA+IGRpdiA+IGRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogMDtcbiAgLyogYmFja2dyb3VuZDogcmVkOyAqL1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cblxuLm1lbnUtd3JhcCAubWVudSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLm1lbnUtd3JhcCAubWVudSB1bCBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC43cyBlYXNlO1xufVxuXG4ubWVudS13cmFwIC5tZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbn1cblxuLyogU2hvdyBNZW51ICovXG4ubWVudS13cmFwIC50b2dnbGVyOmNoZWNrZWQgfiAubWVudSA+IGRpdiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLW1lbnUtc3BlZWQpO1xufVxuXG4ubWVudS13cmFwIC50b2dnbGVyOmNoZWNrZWQgfiAubWVudSA+IGRpdiA+IGRpdiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4ubWVudS13cmFwIC50b2dnbGVyOmNoZWNrZWQgfiAubWVudSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/madhavansundararaj/Documents/GitHub/portfolio/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map