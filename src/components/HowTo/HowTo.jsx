import React from 'react';
import HowToStyles from './HowTo.module.scss';

const HowTo = () => {
  return (
    <div className={HowToStyles.container}>
        <div className={HowToStyles.title}>
            <h1>Watchr</h1>
        </div>
        <div className={HowToStyles.info}>
            <p>Tired of indecisivly scrolling Netflix? Stuck in a constant back and forth of "Whatever you want to watch" with someone? Watchr is here to help! By giving each movie one at a time and having each person decide on each movie seperatly, Watchr takes out all the overwhelming indecision.  Just follow the instructions below to get started!</p>
            <ol className={HowToStyles.steps}>
                <li>
                    Input the name of which partner will select first and who will select second.
                </li>
                <li>
                    Select a genre from the dropdown.
                </li>
                <li>
                    Click Get Movies to start sorting through movies!
                </li>
                <li>
                    Click like on the movies you would want to watch, and dislike on the movies you would not want to watch.
                </li>
                <li>
                    Once Partner One has gone through the movies, it is Partner Two's turn. They will sort through the movies that partner one has 'liked'.
                </li>
                <li>
                    When Partner Two 'likes' a movie that Partner One has also 'liked', you will have the option to go watch that movie or continue to sort through the movies that Partner One has 'liked'.
                </li>
                <li>
                    Enjoy your movie!
                </li>
            </ol>
        </div>
    </div>
  )
}

export default HowTo