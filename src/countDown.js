import React from 'react';

export default class Countdown extends React.Component{
    render(){
        return (
            <div id="countDown" className="flex-container">
                <div className="base-timer">
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining-days"
                                stroke-dasharray="283"
                                className="base-timer__path-remaining"
                                d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                                ">
                            </path>
                        </g>
                    </svg>
                    <span id="base-timer-label-days" className="base-timer__label">dagen</span>
                </div>

                <div className="base-timer">
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                            id="base-timer-path-remaining-hours"
                            stroke-dasharray="283"
                            className="base-timer__path-remaining"
                            d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                            ">
                            </path>
                        </g>
                        </svg>
                        <span id="base-timer-label-hours" className="base-timer__label">dagen</span>
                </div>

                <div className="base-timer">
                    <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g className="base-timer__circle">
                            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                            <path
                                id="base-timer-path-remaining-minutes"
                                stroke-dasharray="283"
                                className="base-timer__path-remaining"
                                d="
                                M 50, 50
                                m -45, 0
                                a 45,45 0 1,0 90,0
                                a 45,45 0 1,0 -90,0
                                " >       
                            </path>
                        </g>
                    </svg>
                    <span id="base-timer-label-minutes" className="base-timer__label">dagen</span>
                </div>
            </div> 
        );
    }
}

var eventDate = new Date ("april 11, 2021 ")


var x = setInterval(function(){

    //Get todays date and time
    var now = new Date().getTime();

    //find the disntance between now and then
    var distance = eventDate - now;

    //time calculations 
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   

    //display result in id="countdown"
    document.getElementById("base-timer-label-days").innerHTML = days + " Dagen ";
    document.getElementById("base-timer-label-hours").innerHTML = hours + " Uur ";
    document.getElementById("base-timer-label-minutes").innerHTML = minutes + " Minuten " ;
  

    }, 1000);

