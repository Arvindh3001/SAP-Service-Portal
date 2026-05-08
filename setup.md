# SAP Service Portal Setup Guide

This folder contains the SAP Service Portal application. Depending on what you are trying to view, there are two ways to run the project.

## 1. Running the Static Web Application (Simplest Way)
The root of this folder contains a fully functioning, static Single Page Application (SPA) built with plain HTML, CSS, and JavaScript. It contains the main UI and mock data and does not require any local web server or build tools to run.

**How to run it:**
1. Extract/Unzip the `ServicePortal` folder to your local machine.
2. Open the folder and locate the `index.html` file.
3. **Double-click `index.html`** to open it directly in your default web browser (Chrome, Edge, Firefox, etc.).
4. The application will load immediately.

> **Note:** Ensure you have an active internet connection when opening the file, as it fetches fonts (Google Fonts) and icons (FontAwesome) from external CDNs. Since it is a client-side only app with mock data, it works perfectly over the `file://` protocol.

---

## 2. Running the SAP UI5 Application
If you need to run the SAP UI5 version of the application located in the `com.sap.serviceportal` subdirectory, you will need Node.js installed on your machine.

**Prerequisites:**
- [Node.js](https://nodejs.org/) installed on your computer.

**How to run it:**
1. Open your terminal or command prompt.
2. Navigate into the UI5 project directory:
   ```bash
   cd path/to/ServicePortal/com.sap.serviceportal
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the UI5 development server:
   ```bash
   npm start
   ```
5. The application will automatically open in your browser, typically at `http://localhost:8080/index.html`.
