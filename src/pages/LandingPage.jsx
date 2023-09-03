import React from 'react';
import { Link } from 'react-router-dom';
import "./LandingPage.css"

export default function LandingPage() {
  return (
    <div className="landing-page" >
      
      <h1 className="app-title">Vision Drawing</h1>
      <p className="tagline">
        Explore. Create. Share: Prompting Artistic Journeys
      </p>
      <Link to="/drawing-prompt" className="get-inspired button">
        Get Inspired
      </Link>
    </div>
  );
}