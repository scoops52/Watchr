import React from 'react';
import HowToStyles from './HowTo.module.scss';

const HowTo = () => {
  return (
    <div className={HowToStyles.container}>
        <div className={HowToStyles.title}>
            <h1>Watchr</h1>
        </div>
        <div className={HowToStyles.info}>
            <p>Tired of indecisively scrolling Netflix? Stuck in a constant back and forth of "What do you want to watch?, "I don't know, what do you want to watch?" with someone? Watchr is here to help! By swiping through movie options individually, Watchr takes out all the overwhelming indecision and finds the perfect movie for you and your fellow movie watcher.  Just follow the instructions below to get started!</p>
            <ol className={HowToStyles.steps}>
                <li>
                    Input the name of which partner will select first and who will select second.
                </li>
                <li>
                    Select a genre from the dropdown.
                </li>
                <li>
                    Click "Get Movies" to start sorting through movies!
                </li>
                <li>
                    Click "Like" on the movies you would want to watch, and "Dislike "on the movies you would not want to watch.
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