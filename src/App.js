import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Customize your profile image here
  const profileImageUrl = "https://drive.google.com/file/d/1IUTbxJqHN2cm0MSJ2TghnK-73eAgQte_/view?usp=sharing";
  
  const handleContactCard = () => {
    // Create vCard data with image
    // Note: Replace the PHOTO URL with your actual profile image URL
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Jacob Klaven
ORG:Magnivents
TEL:+19013597778
EMAIL:magnivents@gmail.com
URL:https://magnivents.com
PHOTO:${profileImageUrl}
END:VCARD`;
    
    // Create blob and download
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'jacob-klaven.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const handleEmail = () => {
    window.location.href = 'mailto:magnivents@gmail.com';
  };

  const handleCall = () => {
    window.location.href = 'tel:+19013597778';
  };

  // Auto-prompt contact card on page load
  useEffect(() => {
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      handleContactCard();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <div className="business-card">
        <div className="card-header">
          <div className="avatar">
            <img 
              src={profileImageUrl} 
              alt="Jacob Klaven" 
              className="avatar-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder" style={{display: 'none'}}>JK</div>
          </div>
          <h1 className="name">Jacob Klaven</h1>
          <p className="title">Owner</p>
          <p className="company">Magnivents</p>
        </div>
        
        <div className="card-content">
          <div className="contact-info">
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">magnivents@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">+1 (901) 359-7778</span>
            </div>
            <div className="info-item">
              <span className="info-label">Website</span>
              <span className="info-value">magnivents.com</span>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <div className="auto-prompt-notice">
            <svg className="notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Contact card automatically offered
          </div>
          
          <button className="action-btn contact-card-btn" onClick={handleContactCard}>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Save Contact Card
          </button>
          
          <button className="action-btn email-btn" onClick={handleEmail}>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email
          </button>
          
          <button className="action-btn call-btn" onClick={handleCall}>
            <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
