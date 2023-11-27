// ==UserScript==
// @name         Quizizz Assistant
// @namespace    https://github.com/Jev1337
// @version      2.0
// @description  Assist with Quizizz by marking correct answers
// @author       Malek
// @match        https://quizizz.com/join/game/*
// @grant        GM_xmlhttpRequest
// @connect      api.quizit.online
// ==/UserScript==


//ZeroGPT :)
(function() {
    'use strict';

    function unescape(html) {
        const divElement = document.createElement("div");
        divElement.innerHTML = html;
        return divElement.textContent || tmp.innerText || "";
    }

    let apiResponse = null;

    function main() {
        const retrieveAnswers = () => {
            if (apiResponse) {
                processResponse(apiResponse);
            } else {
                GM_xmlhttpRequest({
                    method: "GET",
                    url: `https://api.quizit.online/quizizz/answers?pin=${code}`,
                    onload: (response) => {
                        if (response.status === 200) {
                            apiResponse = JSON.parse(response.responseText);
                            processResponse(apiResponse);
                        } else {
                            console.error("Failed to retrieve answers. Please check the room code.");
                        }
                    },
                    onerror: () => {
                        console.error("Failed to retrieve answers. Please try again.");
                    }
                });
            }
        };

        const processResponse = (apiResponse) => {
            const questionElement = document.querySelector(".resizeable.gap-x-2.question-text-color.text-light");
        
            if (questionElement) {
                var questionText = questionElement.textContent;
        
                const answer = apiResponse.data.answers.find((answer) => unescape(answer.question.text) === questionText);
                if (answer) {
                    const correctAnswerText = answer.answers.map(answer => answer.text).join(', ');
                    for (const a of document.querySelectorAll("p[style='display:inline']")) {
                        for (const b of correctAnswerText.split(", ")) {
                            if (a.textContent.includes(unescape(b))) {
                                a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("option-pressed");
                            }
                        }
                    }
                } else {
                    console.error("Failed to find answer to the question!");
                }
            } else
                console.error("Failed to find question element!");
        };

        console.log("Quizizz Assistant Loaded!");
        console.log(code);
        const retrieveAnswersButton = document.createElement("button");
        retrieveAnswersButton.innerHTML = '<i class="game-end-icon icon-fas-flag-checkered"></i>';
        retrieveAnswersButton.id = "retrieveAnswersButton";
        retrieveAnswersButton.addEventListener("click", retrieveAnswers);
        document.getElementsByClassName("actions-container")[0].appendChild(retrieveAnswersButton);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'h') {
                if (retrieveAnswersButton.style.visibility == "hidden") {
                    retrieveAnswersButton.style.visibility = "visible";
                } else {
                    retrieveAnswersButton.style.visibility = "hidden";
                }
            }
            if (event.key === 'p') {
                retrieveAnswers();
            }
        });
    }

    var code = "";
    let interval = setInterval(function() {
        console.log("Checking for room code...");
        if (document.getElementsByClassName("room-code").length > 0) {
            clearInterval(interval);
            code = document.getElementsByClassName("room-code")[0].innerText;
            main();
        }
        if (document.getElementsByClassName("code").length > 0) {
            clearInterval(interval);
            code = document.getElementsByClassName("code")[0].innerText;
            code = code.replace(/\s/g, '');
            main();
        }
    }, 1000);

})();