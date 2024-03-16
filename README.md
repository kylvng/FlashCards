# Web Development Project 2 - Flashcards

Submitted by: **Kyle Vong**

This web app: **Prompts the user to quiz themselves on various brain teasers.**

Time spent: **5.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [X] **A single card at a time is displayed, only showing one of the components of the information pair**
- [X] **A list of card pairs is created**
- [X] **Clicking on the card shows the corresponding component of the information pair**
- [X] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contains images in addition to or in place of text
- [X] Cards have different visual styles such as color based on their category
  - [X] *Difficulty on the top left corner*

The following **additional** features are implemented:

* [X] Added difficulty at the top left corner
* [X] Added background image behind App div

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://i.imgur.com/rDeYw7O.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap!
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

The biggest challenges involved CSS. I had trouble ensuring the text's orientation when flipping the card. Also, I had trouble fitting images into the flashcard. 

## License

    Copyright [2024] [Kyle Vong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________


# Web Development Project 3 - **FlashCards P2**

Submitted by: **Kyle Vong**

This web app: **Prompts the user to quiz themselves on various brain teasers. Now, we customized the app so the user guess the answer and receive feedback. They also can browse back and forth between the flashcards and shuffle the order.**

Time spent: **3 hours** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
- [ ] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [X] The input box lights up green if correct, and red if incorrect. 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://i.imgur.com/knrCuUB.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap!
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

I had trouble working with input and onChange syntax. Also, I had some difficulty finding a solution to how to shuffle the indexes of my set of cards. I feel more comfortable using useStates now.

## License

    Copyright [2024] [Kyle Vong]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
