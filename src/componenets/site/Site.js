import React from 'react';
import Card from '../card/Card.js'
import './Site.css';
import Menu from '../menu/menu.js'
import Recherche from '../recherche/Recherche.js'
import Image from '../ImageCover/Image.js'



function Site() {
    return (
      <body className="body">
      <Image/>        
        <section>
        <nav>
        <Menu/>
        </nav>
        <Recherche/>
        <div className="cards">
           <Card title="Shaquille O'Neal (1972–)" description="Standing 7 feet tall and weighing 315 pounds, Shaquille O'Neal was one of the most dominant players in the NBA. After his 2011 retirement, he became an on-screen league analyst." image="img4.jpg" ></Card> 
           <Card title="Stephen Curry (1988–)" description="Professional basketball player Stephen Curry of the Golden State Warriors was the first person to be named Most Valuable Player by unanimous vote in NBA history." image="img2.jpg" ></Card> 
           <Card title="LeBron James (1984–)" description="LeBron James became an immediate star after skipping college to join the NBA's Cleveland Cavaliers. He led the Miami Heat to NBA titles in 2012 and 2013 and won another championship with Cleveland in 2016, before joining the Los Angeles Lakers in 2018." image="img3.jpg" ></Card> 
        </div>
        
        </section>
      </body>
    );
  }
  export default Site;