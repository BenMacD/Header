import React from 'react';
import './Campfire.scss';


const Campfire = props => {
    return(
        <div class="fireplace">
            <div class="blur">
            <div class="fireplace__flame_big"></div>
                </div>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <section class="fireplace__log"></section>
            <main class="fireplace__spark"></main>
            <main class="fireplace__spark"></main>
            <main class="fireplace__spark"></main>
            <main class="fireplace__spark"></main>
            <div class="blur fix">
            <div class="fireplace__flame"></div>
                </div>
            <div class="fireplace__light"></div>
        </div>
    )
}

export default Campfire;