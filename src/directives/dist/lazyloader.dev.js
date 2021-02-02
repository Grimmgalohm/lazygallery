"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//import Vue from 'vue';
// Vue.directive('lazyload', 
var _default = {
  inserted: function inserted(el) {
    function loadImage() {
      var imageElement = Array.from(el.children).find(function (el) {
        return el.nodeName === "IMG";
      });

      if (imageElement) {
        imageElement.addEventListener("load", function () {
          setTimeout(function () {
            return el.classList.add("loaded");
          }, 100);
        });
        imageElement.addEventListener("error", function () {
          return console.log("error");
        });
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      var options = {
        root: null,
        threshold: "0"
      };
      var observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }

    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  }
}; //);

exports["default"] = _default;