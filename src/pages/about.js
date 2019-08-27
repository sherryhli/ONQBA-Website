import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>About</h1>
    <ol>
      <li><a href="#what-is-the-onqba">What is the ONQBA?</a></li>
      <li><a href="#who-leads-the-onqba">Who leads the ONQBA?</a></li>
      <li><a href="#what-does-the-onqba-do">What does the ONQBA do?</a></li>
      <li><a href="#what-is-quizbowl">What is Quizbowl?</a></li>
      <li><a href="#quizbowl-reach-difference">What's the difference between Quizbowl and Reach for the Top?</a></li>
      <li><a href="#quizbowl-ihbb-difference">What's the difference between Quizbowl and History Bee and Bowl?</a></li>
    </ol>
    <article id="what-is-the-onqba">
      <h2>What is the ONQBA?</h2>
      <p>The ONQBA is the Ontario Quizbowl Association, a non-profit group that promotes and organizes quizbowl tournaments at high schools in Ontario. We were founded in 2011 and the organization was run for several years by Ben Smith.</p>
    </article>
    <article id="who-leads-the-onqba">
      <h2>Who leads the ONQBA?</h2>
      <p>Currently, the ONQBA is lead by a executive board consisting of:</p>
    </article>
    <ul>
      <li>Meghan Torchia, President</li>
      <li>Joe Su, Treasurer</li>
      <li>Raymond Chen, Secretary</li>
      <li>Sherry Li, Webmaster</li>
    </ul>
    <p>All of our board members are former or current quizbowl players who have now taken leadership roles and started organizing quizbowl tournaments. Many other volunteers also work with us to realize our mandate to ensure quizbowl events are well-run.</p>
    <article id="what-does-the-onqba-do">
      <h2>What does the ONQBA do?</h2>
      <p>Our main duties include:</p>
      <ul>
        <li>Running the Ontario Provincial Championship</li>
        <li>Staffing and directing tournaments at high schools and universities</li>
        <li>Modifying question sets for Canadian audiences</li>
        <li>Occasional financial aid for some school’s quizbowl teams</li>
      </ul>
    </article>
    <article id="what-is-quizbowl">
      <h2>What is Quizbowl?</h2>
      <p>Quizbowl is a quiz game played on buzzers, designed to encourage learning about history, science, literature, and other academic subjects. It is played between two teams of four players each, usually representing different high schools or universities.</p>
      <p>Quizbowl is distinct because it is community-run. Quizbowl tournaments tend to charge much lower entry fees than other trivia tournaments, and they are generally written and staffed by enthusiastic volunteers. Quizbowl tournaments in Ontario are always run by school quiz clubs, so the entry fees go to the host team. ONQBA and its directors work for free — we do this out of pure enthusiasm.</p>
    </article>
    <article id="quizbowl-reach-difference">
      <h2>What's the difference between Quizbowl and Reach for the Top?</h2>
      <p>Both quizbowl and Reach for the Top are played by high school teams on buzzers, answering questions on various subjects to score points. Lots of teams in Ontario play both games.</p>
      <p>However, the two differ in that quizbowl is more challenging and more competitive than Reach for the Top, and it encourages some deeper learning.</p>
      <p>On the other hand, Reach is a faster game, and often includes one-clue questions and spelling questions, so it is usually preferred by casual players and junior players. Quizbowl has more questions about topics like science and literature, so it is often preferred by strong students and readers.</p>
      <p>In Ontario, quizbowl and Reach for the Top both ask many questions on Canadian topics. Historically, quizbowl has been played on American questions, but now, we always arrange to swap extra Canada questions into every round of quizbowl. Reach for the Top probably still has more Canadian content in total.</p>
    </article>
    <article id="quizbowl-ihbb-difference">
    <h2>What's the difference between Quizbowl and History Bee and Bowl?</h2>
    <p><a href="https://ihbbcanada.com/">Interational Histroy Bee and Bowl</a> (IHBB) is a company that runs tournaments very similar to quizbowl. Most of their questions are written by quizbowl writers, and many teams play both their game and ours.</p>
    <p>A big difference between IHBB and quizbowl is the question topics. IHBB questions are mostly about history, while quizbowl questions are about many different subjects. In a round of quizbowl, you can expect to hear questions on history, science, literature, art, religion, current events, mythology, and some of the social sciences.</p>
    <p>A smaller difference is that IHBB events are really two tournaments — a Bowl and a Bee. In quizbowl, people play all day with their team, answering tossups and bonuses. In an IHBB event, people play most of the day with teams (History Bowl), but they break off and play some rounds as individuals (History Bee).</p>
    <p>Another important difference is that quizbowl is generally a nonprofit activity, and quizbowl tournaments are community-run and are very affordable. ONQBA is staffed entirely by volunteers, and almost all our tournaments cost less than $100 per team. Profit from a quizbowl tournament always just goes to the school or club that hosted the tournament.</p>
    </article>
  </Layout>
)

export default AboutPage;
