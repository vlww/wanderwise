import { useState } from 'react';
import '../styles/settings.css';
import { EyeIcon, EyeOffIcon } from '../components/Icons';
import { DEMO_EMAIL } from '../data/initialData';

export default function SettingsPage({ onLogout, colorTheme, setColorTheme, emailNotifications, setEmailNotifications }) {
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwError, setPwError] = useState("");
  const [acctSaved, setAcctSaved] = useState(false);
  const [prefSaved, setPrefSaved] = useState(false);
  const [draftNotif, setDraftNotif] = useState(emailNotifications);

  const saveAccount = () => {
    setPwError("");
    if (password.length > 0 && password.length < 6) {
      setPwError("Password must be at least 6 characters.");
      return;
    }
    if (password.length > 0 && password !== confirmPassword) {
      setPwError("Passwords do not match.");
      return;
    }
    setAcctSaved(true);
    setPassword("");
    setConfirmPassword("");
  };

  const savePreferences = () => {
    setEmailNotifications(draftNotif);
    setPrefSaved(true);
    setTimeout(() => setPrefSaved(false), 2500);
  };

  return (
    <div className="page">
      <div className="st-wrap">
        <div className="greeting" style={{ marginBottom: 24 }}>
          <h1 className="greeting-logo">Settings</h1>
          <p>Manage your account and app preferences.</p>
        </div>

        {/* settings */}
        <div className="st-section">
          <div className="st-section-header"><h3>Account Settings</h3></div>
          <div className="st-section-body">
            <div className="st-row">
              <span className="st-label">Email</span>
              <div className="st-input-wrap">
                <input className="st-input" style={{ paddingRight: 14 }} type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="st-divider" />
            <div className="st-row">
              <span className="st-label">New Password</span>
              <div className="st-input-wrap">
                <input className="st-input" type={showPass ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Leave blank to keep current" />
                <button className="st-input-icon-r" onClick={() => setShowPass(p => !p)}>{showPass ? <EyeOffIcon /> : <EyeIcon />}</button>
              </div>
            </div>
            <div className="st-row">
              <span className="st-label">Confirm</span>
              <div className="st-input-wrap">
                <input className="st-input" type={showConfirm ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Re-enter new password" />
                <button className="st-input-icon-r" onClick={() => setShowConfirm(p => !p)}>{showConfirm ? <EyeOffIcon /> : <EyeIcon />}</button>
                {pwError && <div className="st-error">{pwError}</div>}
              </div>
            </div>
            <div className="st-save-row">
              {acctSaved && (
                <span className="st-saved-msg">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Saved!
                </span>
              )}
              <button className="st-save-btn" onClick={saveAccount}>Save Changes</button>
            </div>
          </div>
        </div>

        {/* preferences and notifs */}
        <div className="st-two-col">
          <div className="st-section" style={{ margin: 0 }}>
            <div className="st-section-header"><h3>App Preferences</h3></div>
            <div className="st-section-body">
              <div className="st-row">
                <span className="st-label">Color Theme</span>
                <select className="st-select" value={colorTheme} onChange={e => setColorTheme(e.target.value)}>
                  <option>Blue</option>
                  <option>Teal</option>
                  <option>Coral</option>
                  <option>Forest</option>
                </select>
              </div>
              <div style={{ fontSize: ".78rem", color: "var(--text-light)", marginTop: -4 }}>Theme applies instantly across the app.</div>
            </div>
          </div>

          <div className="st-section" style={{ margin: 0 }}>
            <div className="st-section-header"><h3>Notification Settings</h3></div>
            <div className="st-section-body">
              <div className="st-checkbox-row" onClick={() => setDraftNotif(v => !v)}>
                <div className={`st-checkbox${draftNotif ? " checked" : ""}`}>
                  {draftNotif && <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>}
                </div>
                <div>
                  <div className="st-checkbox-label">Receive Email Notifications</div>
                  <div className="st-checkbox-sub">Get updates about new destinations and travel deals.</div>
                </div>
              </div>
              <div className="st-save-row" style={{ paddingTop: 4 }}>
                {prefSaved && (
                  <span className="st-saved-msg">
                    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>Saved!
                  </span>
                )}
                <button className="st-save-btn" onClick={savePreferences}>Save</button>
              </div>
            </div>
          </div>
        </div>

        {/* logout */}
        <div className="st-logout-wrap">
          <button className="st-logout-btn" onClick={onLogout}>
            <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}