import { useState } from 'react';
import '../styles/settings.css';
import { EyeIcon, EyeOffIcon } from '../components/Icons';
import { DEMO_EMAIL } from '../data/initialData';

export default function SettingsPage({ onLogout, colorTheme, setColorTheme, emailNotifications, setEmailNotifications }) {
  

  return (
    <div className="page">
      <div className="st-wrap">
        <div className="greeting" style={{ marginBottom: 24 }}>
          <h1 className="greeting-logo">Settings</h1>
          <p>Manage your account and app preferences.</p>
        </div>

      </div>
    </div>
  );
}
