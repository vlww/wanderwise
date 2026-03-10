import { useState } from "react";
import { WalletIcon, ListIcon, HeartIcon, ImageIcon } from "../components/Icons";
import "../styles/home.css";

export default function HomePage({ wishlist, setWishlist, savings, setSavings }) {
    return (
        <div className="page">
        <div className="home-grid">


        {/* budget summary */}
        <div className="card">
          <div className="card-header">
            <WalletIcon />
            <h2>Budget Summary</h2>
          </div>
          <div className="card-body">
            <div className="savings-input-row">
              <span className="savings-input-label">My Savings</span>
              <input
                className="savings-input"
                value={rawSavings}
                onChange={(e) => handleSavings(e.target.value)}
                placeholder="1000"
              />
            </div>

            <div className="budget-total">
              Total Savings: <span>${fmt(savings)}</span>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progress-label">
              ${Number(savings).toLocaleString()} of ${goal.toLocaleString()} goal saved
            </div>

            <div className="budget-divider" />

            <div className="afford-grid">
              <div className="afford-col">
                <div className="afford-label">Affordable<br />Destinations</div>
                <div className="afford-num yes">{affordable}</div>
              </div>
              <div className="afford-col">
                <div className="afford-label">Not Yet<br />Affordable</div>
                <div className="afford-num no">{notAffordable}</div>
              </div>
            </div>
          </div>
        </div>

          </div>
        </div>
      );
}