# Email Priority Assistant

Approximate README word count: 220 (excluding this note).

## Project status
Step 3 prototype. Displays five fictional emails with executable V1/V2 rules, ranking, evidence and review flags. Review controls, correction storage and undo are not implemented yet. No live AI or mailbox connection is used.

## Technology and running
HTML, CSS and JavaScript. Open `index.html` in a browser. No dependencies or API keys are required.

## Development record
- Lab 3: documented a manual Markdown simulation and revised the urgency rule after a conflicting-subject example.
- Step 2: separated sample data, interface and future classification logic; preserved the original Lab 3 documents in `docs/`. Added a missing-body example for future fallback testing.

- Step 3: implemented both rule versions, source evidence and provisional Normal for missing bodies. Node classifier assertions passed; browser checks pending. Run `node tests/classifier.test.js` if Node is installed.

## AI assistance
ChatGPT helped create the scaffold, classifier, interface and automated tests. The original sample text was copied from the Lab 3 materials. Browser verification by the student is pending.

## Additional files
`docs/` contains the original Lab 3 specification and simulation. `tests/` contains classifier assertions.
