
import '../styles/themeicon.css'
const themedark= () => {
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme === "light" ? "dark" : "light";
  
  // Dispatch a custom event to notify about theme change
  const event = new Event('themechange');
  window.dispatchEvent(event);
  }

  function stepFunction(event) {
    debugger;
    var element = document.getElementsByClassName("collapse");
    for (var i = 0; i < element.length; i++) {
      if (element[i] !== event.target.ariaControls) {
        element[i].classList.remove("show");
      }
    }
  }
 


  export default themedark;