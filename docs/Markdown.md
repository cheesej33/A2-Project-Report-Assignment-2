# AI Email Priority Assistant — Markdown Simulation

> **Simulation notice:** This is a rule-based demonstration written in Markdown. It uses **sample email data** and **predefined classification rules**. No live AI model, API, Python program, database, or interactive web interface is used. All priorities, explanations and user actions below are **simulated** for the demonstration.

---

## 1. The simulated inbox (sample emails)

The inbox below contains sample emails created for this demonstration. No real personal emails are used.

| # | Sender | Subject | Body |
|---|--------|---------|------|
| 1 | Project Manager | **URGENT: Confirm the meeting time** | Please confirm the meeting time by 3 pm today so that the team can finalise the schedule. |
| 2 | Project Team | **URGENT: Project update** | This is for your information only. No action is required. |
| 3 | HR Team | Staff holiday form | Please complete the holiday request form by Friday. Deadline is this week. |
| 4 | Office Admin | Weekly team lunch | Join the team lunch this Friday at noon. |

---

## 2. The classification rules

The assistant reads the **sender, subject line and body** and looks for urgency signals:

- **URGENT** in the subject.
- Action requests such as **confirm**, **complete**, **deadline**, **by … today/Friday**.
- A **no-action** body: phrases such as *"no action is required"* or *"for your information only"*.

**Rule (revised):** a body that says no action is required **overrides** a "URGENT" subject keyword, so the email is not treated as high priority and the conflict is explained to the user.

---

## 3. Applying the rules — suggested priorities

| # | Suggested priority | Explanation |
|---|--------------------|-------------|
| 1 | **High** | The email requests confirmation by 3 pm today, and the subject also signals urgency. |
| 2 | **Normal** | The subject says URGENT, but the body says no action is required, so it is not treated as high priority. |
| 3 | **High** | The email requests an action by a deadline. |
| 4 | **Normal** | No clear indication of immediate action was found. |

The simulated inbox is sorted by priority (High first):

1. **High** — URGENT: Confirm the meeting time *(Project Manager)*
2. **High** — Staff holiday form *(HR Team)*
3. **Normal** — URGENT: Project update *(Project Team)*
4. **Normal** — Weekly team lunch *(Office Admin)*

---

## 4. The user's interaction (simulated Keep / Change)

For each email the user can **Keep** the suggested priority or **Change** it.

**Example — email 1 (Keep):**
- Suggested priority: High. Explanation: "The email requests confirmation by 3 pm today, and the subject also signals urgency."
- User action: **Keep priority**. The priority stays High. No feedback example is recorded.

**Example — email 2 (Change):**
- Suggested priority: Normal. Explanation: "The subject says URGENT, but the body says no action is required."
- User action: **Change priority**. The user agrees the email is not urgent and the result is kept as Normal.

### Feedback examples (recorded corrections)

| Time | Email | Changed from | Changed to |
|------|-------|--------------|------------|
| (demonstrated) | URGENT: Project update | High (initial suggestion) | Normal |

Each correction is **recorded as a feedback example** for a future, **planned** rule adjustment. It does **not** automatically re-train a model or change the software, as the spec states.

---

## 5. Fallback strategy (simulated)

- **No strong urgency signal:** assigned Normal with the explanation *"No clear indication of immediate action was found."*
- **Conflicting signals:** when the subject says "URGENT" but the body says no action is required, both signals are shown and the subject keyword alone is not treated as decisive; the user is asked to review.
- **Missing subject or body:** the simulation states that information is limited and does not infer urgency from unavailable content; the user is asked to review the email.
- **No email list:** the sample inbox above is used.
- **Uncertain classification:** the uncertainty is stated and the final decision is left to the user.

---

## 6. Test A — standard input

- **Input:** the user asks to "find the emails that need attention soonest". Email: *URGENT: Confirm the meeting time* from Project Manager.
- **What the system receives:** the user's request plus the sample email's sender, subject and body, which contain an urgency keyword, an action request and a deadline.
- **What it does:** the Markdown simulation applies the predefined rules. It finds "URGENT" in the subject, "confirm" in the body and the deadline "by 3 pm today", combines them, and assigns **High** priority. This is a simulated rule-based decision, not a live AI prediction.
- **Response and next action:** suggested priority **High**; reason *"The email requests confirmation by 3 pm today, and the subject also signals urgency."* The user reviews the reason and keeps or changes the priority; the decision is recorded as a simulated feedback example.

---

## 7. Test B — problem input

- **Input:** the user asks the same question. Email: *URGENT: Project update* from Project Team.
- **What the system receives:** the email's sender, subject and body. The subject suggests urgency, but the body explicitly says no action is required and gives no deadline.
- **What it does (initial rule):** the initial rule gives too much weight to the word "URGENT" in the subject, so it assigns **High** priority without adequately considering the body. This exposes a weakness: a keyword alone can produce a misleading priority.
- **Response and next action (initial):** suggested priority **High**; reason *"The subject contains the word 'URGENT'."* The user notices the body says no action is required and **changes the priority to Normal**. The correction is recorded as a feedback example.
- **After the revised rule:** the same email is assigned **Normal**, because the body says no action is required; the explanation shows the conflict. The user can keep or change the result.

---

## 8. Review and revision

- **Problem identified:** Test B shows that the initial rule assigns High based on "URGENT" even though the email says no action is required.
- **Interaction change:** show both conflicting signals in the explanation and let the user review or change the priority.
- **System change:** revise the predefined rules so that "URGENT" alone does not determine priority; consider the body and any deadline.
- **Test B rerun:** the revised simulation assigns Normal because the body says no action is required; the reason explains the conflict, and the user can keep or change the result.
- **Why this helps:** it reduces misleading high-priority results, improves transparency, and keeps the user in control. All changes are demonstrated in Markdown, not implemented as an automated AI system.
