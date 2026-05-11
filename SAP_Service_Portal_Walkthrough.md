# SAP Service Portal — Navigation Walkthrough

---

## Login

Open the app. You see the login screen.

- Select **ASP** or **Technician** using the toggle at the top of the card.
- Enter username and password, then click **Sign In**.
- If you are a new technician, click **Register as Technician** instead.

---

## ASP Flow

**Login → Sign In (ASP selected) → Main Dashboard**

From the Main Dashboard you can go to:

- **Technicians** (Quick Action button) → Technician Management screen
- **Approvals** (Quick Action button) → Admin Approvals screen
- **Cases** (Quick Action button) → Case Details screen
- **Allocate** (Quick Action button or "Auto-Assign All" / "Assign" in the pending table) → AI Auto-Assignment screen
- **Click any row** in the Active Cases or Pending Assignment table → Case Details screen

From **Case Details**:
- Click **Assign Technician** → AI Auto-Assignment screen
- Click **Back / Exit** → returns to Main Dashboard

From **AI Auto-Assignment**:
- Click **Accept Assignment** → confirms and goes back to Dashboard
- Click **Override / Re-assign** or **Assign** in the technicians table → assigns manually
- Click **Exit** → returns to Main Dashboard

From **Admin Approvals**:
- Two tabs: **Leave Requests** and **Expense Claims**
- Click **Approve** or **Reject** on each item
- Click **Exit** → returns to Main Dashboard

From **Technician Management**:
- Click **+ Add Technician** → opens AI Voice Onboarding registration flow
- Click **Back** → returns to Main Dashboard

---

## Technician Registration Flow

**Login → Register as Technician → Step 0 (AI Voice Onboarding)**

Step 0 is optional — you can speak your details or skip straight to the manual form.

```
Step 0: AI Voice Onboarding  →  Step 1: Personal Details
Step 1: Personal Details     →  Step 2: KYC Documents
Step 2: KYC Documents        →  Step 3: Skills & Zone
Step 3: Skills & Zone        →  Step 4: Review & Submit
Step 4: Submit               →  Technician Home Dashboard
```

Use **Next** to go forward and **Back** to go to the previous step at any time.

---

## Technician Flow

**Login → Sign In (Technician selected) → Technician Home**

From the Technician Home you can go to:

- **View Cases** or **Accept Case** (Quick Action) → Technician Case Details
- **My Learning** (Quick Action) → Learning Journeys screen
- **Open** button on any job in the Scheduled Jobs table → Technician Case Details
- **Microphone icon** on any job → AI Voice Assistant

From **Technician Case Details**:
- Click **Edit Case** → Technician Case Edit screen
- Click **Mark Complete** → marks the case as resolved
- Click **Back** → returns to Technician Home

From **AI Voice Assistant**:
- Speak or type updates; the AI logs them automatically
- Click **Apply Updates** → saves all changes and returns to the case
- Click **Discard All** or **Done** → returns to the case without saving

From **Learning Journeys**:
- Click **Start** or **Continue** on any course card to begin that course
- Click **Back** → returns to Technician Home
