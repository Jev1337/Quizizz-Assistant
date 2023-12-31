# Quizizz Assistant

Quizizz Assistant is a userscript designed to assist with Quizizz games by marking the correct answers. It uses an API(2) to retrieve the answers.

## Features
Note: This has only been tested in Test Mode (Free Version) with MCQ and MSQ.

- Automatically marks the correct answers in Quizizz games.
- Works seamlessly with the Quizizz interface.
  
### v1 and v2 
- v1 Uses CheatNetwork's API, it requires you to login to CheatNetwork's website in order to use it. This will allow you to cheat on Private Rooms.
- v2 Uses Quizit's API, it does not require you to login, however this won't allow you to cheat on Private Rooms.

## Installation

This script is designed to be used with a userscript manager such as Tampermonkey.

1. Install Tampermonkey from the [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/).
2. Click on the `Raw` button at the top of the script view on GitHub.
3. CTRL-A CTRL-C
4. Click `Create a new script...` to add the script to Tampermonkey.
5. CTRL-V CTRL-S

## Usage

1. Navigate to a Quizizz game.
2. The script will automatically run and add a button to retrieve answers. (NOTE: Sometimes you have to refresh the page in order for the script to load!)
4. Click the button to retrieve and display the correct answers.
![alt text](img.png)

### Shortcuts
1. P Key: Reveals Answers
2. H Key: Hides Reveal Button

## Debugging

If the button does not show up, refresh the page. Other issues (with button appearing), should be logged in the console, so feel free to send them over in the issues!


## Contributing

Contributions are welcome! If you have a bug to report, a feature to suggest, or changes to contribute, please open an issue to discuss what you would like to change. Pull requests are also welcome.

## License

This project is licensed under the GPL v3 License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This script is for educational purposes only. Cheating is not encouraged or endorsed. Please use responsibly.
