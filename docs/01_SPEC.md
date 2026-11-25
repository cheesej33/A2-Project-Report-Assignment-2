# 01_SPEC.md: use case and system path

Use this file for the use case from your Week 2 storyboard. Keep the notes short enough to use while you work.

## User goal
Find important emails quickly, decide what to read first, and understand why the assistant prioritised each email.

## System inputs
The user's goal, such as finding emails that need attention soonest.
Sample email data, including sender, subject line, and message content.
The user's decision to keep or change the priority assigned to an email.
Any priority rules or preferences specified by the user.

## Processing and technology
Processing
Read the sender, subject line, and body of each sample email.
Identify possible urgency signals, such as "URGENT", "confirm", and "deadline".
Consider the message content to decide whether the email actually requires immediate attention.
Assign a priority and provide a short, human-readable explanation.
Sort the simulated inbox by priority.
Allow the user to keep or change the suggested priority.
Record any correction as a feedback example. In later demonstrations, use the example to illustrate how a rule could be adjusted for similar emails.

Technology:
Data source: Sample email data created for the demonstration; no real personal emails are used.
Processing: A manual, rule-based simulation using predefined classification rules.
Interface: A Markdown-based demonstration showing sample emails, priority labels, explanations, and simulated Keep / Change actions.
AI and automation: No live AI model, API, Python program, database, or interactive web interface is used.
Feedback: User corrections are recorded in the demonstration as examples. They do not automatically train a model or change software rules.

## Intended result and next action
For each sample email, the simulation presents:
A suggested priority, such as High or Normal.
A short explanation based on the email's subject and content.
A simulated option for the user to keep or change the suggested priority.
If the user changes a priority, the correction is recorded as a feedback example in the Markdown demonstration. The example can inform a proposed rule adjustment in a later test, but the simulation does not automatically learn or update software.

## Fallback strategy
No strong urgency signal: Assign Normal priority and explain that no clear indication of immediate action was found.
Conflicting signals: If the subject says "URGENT" but the body says no action is required, explain both signals and avoid treating the subject keyword alone as decisive. Let the user review or change the suggested priority.
Missing subject or body: State that information is limited. Do not infer urgency from unavailable content; ask the user to review the email.
No email list: Use the sample inbox included in the demonstration.
Uncertain classification: State the uncertainty and leave the final decision to the user.

## System path or interaction diagram
The diagram below shows the Markdown-based simulation of the AI Email Priority Assistant. All classification and user interactions are demonstrated using sample data and predefined rules. No live AI model or executable application is implemented.
flowchart TD
    A["Person: Wants to find important emails<br/>Status: Use case defined"] --> B["Input: Sample sender, subject and body<br/>Status: Simulated"]
    B --> C["Processing: Check urgency words,<br/>action requests and deadlines<br/>Status: Rule-based simulation"]
    C --> D["Data / Tool: Sample emails and<br/>predefined rules in Markdown<br/>Status: Simulated"]
    D --> E["Response: Priority label and<br/>human-readable explanation<br/>Status: Simulated"]
    E --> F{"User's next action<br/>Status: Simulated"}
    F -->|Keep priority| G["Keep suggested priority<br/>Status: Simulated"]
    F -->|Change priority| H["Record correction as a<br/>feedback example<br/>Status: Simulated"]
    G --> I["User decides what to read first"]
    H --> J["Propose a rule adjustment<br/>for a similar future email<br/>Status: Planned"]
    J --> I
    I --> K["Next email or new request"]
    K --> B

    C -.-> L["Fallback: Missing or conflicting<br/>information; explain uncertainty<br/>and ask user to review"]
    L --> E

Implementation status
Implemented: Use case and predefined classification rules are documented.
Simulated: Email inputs, priority classification, explanations, Keep / Change actions, and feedback recording.
Planned: Automatic use of past corrections to adjust future classifications.
Not implemented: A live AI model, email account connection, persistent database, or executable application.

## Test A: standard input
Input:
The user asks: "Find the emails that need attention soonest."
Sample email:
Sender: Project Manager
Subject: URGENT: Confirm the meeting time
Body: Please confirm the meeting time by 3 pm today so that the team can finalise the schedule.

What the system receives:
The system receives the user's request and the sample email's sender, subject line and body. The email contains an urgency keyword, an action request and a deadline.

What it does:
The Markdown simulation applies predefined rules. It identifies "URGENT" in the subject, "confirm" in the body and the deadline "by 3 pm today". It combines these signals and assigns High priority because the email requires action within a specific timeframe.
This is a simulated rule-based decision, not a live AI prediction.

Response and next action:
Suggested priority: High.
Reason: The email requests confirmation by 3 pm today, and the subject also signals urgency.
Next action: The user reviews the reason and chooses to keep High priority or change it. The user's decision is recorded as a simulated feedback example.

## Test B: problem input
Input:
The user asks: "Find the emails that need attention soonest."
Sender: Project Team
Subject: URGENT: Project update
Body: This is for your information only. No action is required.

What the system receives:
The system receives the email's sender, subject and body. The subject suggests urgency, but the body explicitly states that no action is required and gives no deadline.

What it does:
In the initial simulation, the predefined rule gives too much weight to the word "URGENT" in the subject. It assigns High priority without adequately considering the body.
This test exposes a weakness in the initial rule: a keyword alone can lead to a misleading priority.

Response and next action:
Initial suggested priority: High.
Reason: The subject contains the word "URGENT".
Next action: The user notices that the body says no action is required and changes the priority to Normal. The correction is recorded as a simulated feedback example.

## Review and revision
Problem identified: Test B shows that the system assigns High priority based on "URGENT", even though the email says no action is required.
Interaction change: Show both conflicting signals in the explanation and let the user review or change the priority.
System change: Revise the predefined rules so that "URGENT" alone does not determine priority. Consider the email body and any deadline.
Test B rerun: The revised simulation assigns Normal priority because the body says no action is required. The reason explains the conflict, and the user can keep or change the result.
Why this helps: The changes reduce misleading high-priority results, improve transparency, and keep the user in control. All changes are demonstrated in Markdown, not implemented as an automated AI system.
