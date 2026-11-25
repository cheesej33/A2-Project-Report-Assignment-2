# Email Priority Assistant

Approximate README word count: approximately 290 (excluding this note).

## Project status
Step 4 prototype. Displays five fictional emails with executable V1/V2 rules, ranking, evidence and review flags. Review controls, version-specific decision history and undo are implemented; browser verification pending. No live AI or mailbox connection is used.

## Technology and running
HTML, CSS and JavaScript. Open `index.html` in a browser. No dependencies or API keys are required.

## Development record
- Lab 3: documented a manual Markdown simulation and revised the urgency rule after a conflicting-subject example.
- Step 2: separated sample data, interface and future classification logic; preserved the original Lab 3 documents in `docs/`. Added a missing-body example for future fallback testing.

- Step 3: implemented both rule versions, source evidence and provisional Normal for missing bodies. Node classifier assertions passed; browser checks pending. Run `node tests/classifier.test.js` if Node is installed.

- Step 4: added explicit keep/change decisions, effective priority ranking, local storage with session fallback, and undo of the latest decision in the selected rule version. Original classifier output remains visible. No automatic learning. JavaScript syntax checked; interaction tests pending.

## AI assistance
ChatGPT helped create the scaffold, classifier, interface and automated tests. The original sample text was copied from the Lab 3 materials. Student screenshot confirms three V2 classifications, evidence and ranking. ChatGPT also generated Step 4 interaction code; browser verification of new controls is pending.

## Additional files
`docs/` contains the original Lab 3 specification and simulation. `tests/` contains classifier assertions.
