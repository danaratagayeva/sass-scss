import React from 'react'

function Portfolio() {
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

    <article id="content">
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui pariatur in iure. Rem, aliquid, cumque. Id tenetur, facere aut odio dolores qui, iste sit voluptates ullam doloribus suscipit quasi obcaecati alias voluptatum error ab repellendus deleniti ipsa quae sint! Nobis tempora cupiditate voluptate earum fuga laudantium vitae deleniti consectetur sapiente.</p>
      
      <section id="testimonials">
        <h2>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex omnis atque illo odio labore, debitis, qui quo? Odio similique illum!</p>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam explicabo mollitia odio nisi eius voluptatum, et, rerum ipsum laudantium numquam.</p>
          <footer>
            — <cite>Bill Customer</cite>
          </footer>
        </blockquote>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sit molestiae!</p>
          <footer>
            — <cite>Sarah Client</cite>
          </footer>
        </blockquote>
      </section>
    </article>

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

export default Portfolio