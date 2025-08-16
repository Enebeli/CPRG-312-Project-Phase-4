Project Phase 4 – Secure File Sharing Web App

This project is a secure file-sharing application with a React frontend (UploadBox) and an Express backend (ExpressApp). Users can register, log in, and upload files which are accessible only to them or users in the same department. Admin users have access to all files across departments.

Setup Instructions

Backend – ExpressApp

Clone the repository.

Navigate to the ExpressApp folder.

Create a .env file with the following:

DB_URL=
(Get a DB_URL with your password from MongoDB)

DATABASE_NAME=projPhase4

SERVER_PORT=3000

JWT_SECRET=KJAHS39798A@%6781KAHSF82^&&JHAF131^&!A112323SFW112


Run npm install

Start the server using node app.js

Frontend – UploadBox

Navigate to the UploadBox folder.

Run npm install

Start the frontend using npm run dev

App Features

User registration and login

Role-based file access (admin can access all files)

Upload and view files based on department

Post and view comments

Secure authentication with JWT

Security Testing

I conducted both manual and automated security testing using OWASP ZAP and npm audit. The following outlines what was tested and observed:

SQL Injection – MongoDB is not vulnerable to SQL injection, and no issues were found.

XSS (Cross-site Scripting) – Initially, <script> tags in the comment field rendered as raw HTML. This was fixed by escaping HTML before rendering comments on the frontend.

OWASP ZAP Scan – Ran a scan using the desktop app. It flagged missing headers (e.g., X-Frame-Options, Content-Security-Policy). Headers have not been fully implemented yet due to time constraints.

Postman Testing – Used Postman to test all user routes including login, registration, and comment creation.

Manual Testing – Validated input fields and performed attempts at malicious input to observe system behavior.

Vulnerability Fixes

Escaped all user-generated comment content in React using a custom escapeHTML() function.

Used JWT for authentication, and confirmed token-based access control works correctly.

Comment system no longer renders unescaped HTML (XSS fix).

Tools Used

OWASP ZAP – Installed and used to scan the application.

Postman – Used to test endpoints like /user/login, /user/register, /comment, and file uploads.

curl – Used to test login and registration via command line.

Ethical Responsibilities

Testing was conducted only on the locally hosted application. No third-party systems or user data were involved. All scans and simulations were executed within our development environment with full control.

Legal Considerations

No actual user data was used.

All API testing and vulnerability assessments were done in a local environment.

No unauthorized access or harm was caused to any external systems.

Lessons Learned

Escaping HTML on the frontend is essential when displaying user content.

ZAP scans are useful but can take time; always allocate buffer.

Manual testing alongside tools like Postman and curl helps expose overlooked flaws.

Starting with a clear .env config and consistent database string avoids startup delays.

If you get an ERR_CONNECTION_REFUSED, ensure your backend is properly started and pointing to the right MongoDB URL.

Final Notes

All key features were implemented successfully. Manual XSS testing revealed issues that were fixed. OWASP ZAP highlighted further hardening steps (like headers) that can be implemented if time allows. JWT authentication and role-based file access work as expected. The app is functional and stable based on the features tested.