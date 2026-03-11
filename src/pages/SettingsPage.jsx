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
    if (password && password.length < 6) { setPwError("Password must be at least 6 characters."); return; }
    if (password && password !== confirmPassword) { setPwError("Passwords do not match."); return; }
    setAcctSaved(true);
    setTimeout(() => setAcctSaved(false), 2500);
    setPassword(""); setConfirmPassword("");
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

      </div>
    </div>
  );
}
