import React from 'react'

function Contact() {
  return (
    <div>
        <body>
  <header id="header">
    <nav id="main-menu">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Me</a></li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li><a href="contact.html">Get in Touch</a></li>
      </ul>
    </nav>
    {/* <img id="logo" src="img/me.png" alt="This is me."> */}
  </header>

  <div id="main" role="main">

    <div id="content">
      <h1>Get in Touch</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut repudiandae minus aspernatur. Quam sunt sapiente earum qui, in, suscipit placeat consectetur illum aperiam est, nobis!</p>

      <form action="">
        <div className='fieldset'>
          <legend>Your Details</legend>
          <input placeholder="Full name" type="text" tabindex="1" required autofocus/>
          <br/>
          <input placeholder="Email Address" type="email" tabindex="2" required/>
          <textarea placeholder="Message" tabindex="3"></textarea>
     </div>
      </form>
    </div>

    <aside id="sidebar">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </aside>

  </div>

  <footer id="footer">
    
  </footer>
</body>
    </div>
  )
}

export default Contact