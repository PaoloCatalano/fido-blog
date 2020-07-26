import React from "react"

const ScrollTopButton = () => {
  //Get the button
  var mybutton = document.getElementsByClassName("myBtn")

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  }

  //React.useState
  const [appear, setAppear] = React.useState(false)

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setAppear(true)
      //   mybutton.style.display = "block"
    } else {
      setAppear(false)
      //   mybutton.style.display = "none"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <button
      onClick={topFunction}
      className={`myBtn ${appear ? "show-btn" : ""}`}
      title="Go to top"
    >
      Top
    </button>
  )
}

export default ScrollTopButton
