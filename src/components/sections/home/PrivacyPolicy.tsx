export function PrivacyPolicy() {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>Privacy Policy for The Contractor App</h1>
            <p><strong>Effective Date:</strong> July 24, 2026</p>
            <p><strong>Company:</strong> RHMRAstute Solutions India Pvt Ltd</p>

            <p>RHMRAstute Solutions India Pvt Ltd ("we," "our," or "us") operates <strong>The Contractor App</strong> (the "App"), a B2B Software-as-a-Service (SaaS) platform for construction management, inventory tracking, and workforce administration.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information that identifies, relates to, describes, or could reasonably be linked to you or your company ("Personal Information").</p>
            
            <h3>A. Information You Provide to Us:</h3>
            <ul>
                <li><strong>Account & Profile Data:</strong> Full name, email address, mobile number, username, designation, and basic salary.</li>
                <li><strong>Business Information:</strong> Company name, PAN, GSTIN, and company codes.</li>
                <li><strong>Media & Files:</strong> Photos (profile pictures, attendance selfies, expense bills) and PDF documents (sub-contractor bills, work orders) uploaded to your workspace.</li>
                <li><strong>Financial Information:</strong> Transaction records, personal ledger entries, and expense diary logs.</li>
            </ul>

            <h3>B. Information Collected Automatically:</h3>
            <ul>
                <li><strong>Location Data:</strong> We collect precise GPS coordinates (Latitude/Longitude) only when a user explicitly uses the Attendance module to "Clock In" or "Clock Out," or when logging heavy machinery start/stop meters. We do not track background location.</li>
                <li><strong>Device Information:</strong> Firebase Cloud Messaging (FCM) tokens to send push notifications regarding tasks and approvals.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to operate, maintain, and improve the App, including facilitating authentication via OTPs, managing daily construction logs, processing subscriptions, and generating financial reports.</p>

            <h2>3. Sharing of Your Information</h2>
            <p>We do not sell your personal information. Data is shared only with essential service providers like Google Cloud/Firebase (storage), MongoDB Atlas (database), Twilio (SMS/OTP), and Razorpay (billing).</p>

            <h2>4. Data Security</h2>
            <p>We use industry-standard encryption, password hashing, and secure HTTPS protocols to protect your business and personal data.</p>

            <h2>5. Data Retention & Account Deletion</h2>
            <p>We retain your data for as long as your company maintains an active subscription with us. <strong>If you wish to request the deletion of your account and all associated personal data, please email us directly at support@thecontractorapp.in.</strong> Upon a verified request, we will process the deletion of your specific account and associated files from our active servers within a reasonable timeframe, subject to any legal obligations to retain certain business records.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions about this policy, contact us at:</p>
            <p><strong>RHMRAstute Solutions India Pvt Ltd</strong><br />Email: support@thecontractorapp.in</p>
        </div>
    );
}