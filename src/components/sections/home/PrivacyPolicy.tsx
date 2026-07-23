import React from 'react';

export default function PrivacyPolicy() {
    return (
        div style={{ padding '40px', maxWidth '800px', margin '0 auto', fontFamily 'Arial, sans-serif', lineHeight '1.6' }}
            h1"Privacy Policy for The Contractor App"h1
            pstrongEffective Datestrong July 24, 2026p
            pstrongCompanystrong RHMRAstute Solutions India Pvt. Ltd.p

            pRHMRAstute Solutions India Pvt. Ltd.(we, our, or us) operates strongThe Contractor Appstrong (the App), a B2B Software-as-a-Service (SaaS) platform for construction management, inventory tracking, and workforce administration.p

            h21. Information We Collecth2
            pWe collect information that identifies, relates to, describes, or could reasonably be linked to you or your company (Personal Information).p
            
            h3A. Information You Provide to Ush3
            ul
                listrongAccount & Profile Datastrong Full name, email address, mobile number, username, designation, and basic salary.li
                listrongBusiness Informationstrong Company name, PAN, GSTIN, and company codes.li
                listrongMedia & Filesstrong Photos (profile pictures, attendance selfies, expense bills) and PDF documents (sub-contractor bills, work orders) uploaded to your workspace.li
                listrongFinancial Informationstrong Transaction records, personal ledger entries, and expense diary logs.li
            ul

            h3B. Information Collected Automaticallyh3
            ul
                listrongLocation Datastrong We collect precise GPS coordinates (LatitudeLongitude) only when a user explicitly uses the Attendance module to Clock In or Clock Out, or when logging heavy machinery startstop meters. We do not track background location.li
                listrongDevice Informationstrong Firebase Cloud Messaging (FCM) tokens to send push notifications regarding tasks and approvals.li
            ul

            h22. How We Use Your Informationh2
            pWe use the information we collect to operate, maintain, and improve the App, including facilitating authentication via OTPs, managing daily construction logs, processing subscriptions, and generating financial reports.p

            h23. Sharing of Your Informationh2
            pWe do not sell your personal information. Data is shared only with essential service providers like Google CloudFirebase (storage), MongoDB Atlas (database), Twilio (SMSOTP), and Razorpay (billing).p

            h24. Data Securityh2
            pWe use industry-standard encryption, password hashing, and secure HTTPS protocols to protect your business and personal data.p

            h25. Contact Ush2
            pIf you have questions about this policy, contact us atp
            pstrongRHMRAstute Solutions Indiastrongbr Email support@thecontractorapp.inp
        div
    );
}