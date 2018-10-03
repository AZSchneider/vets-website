import React from 'react';
import Breadcrumbs from '@department-of-veterans-affairs/formation/Breadcrumbs';

import VetsDotGov from '../../platform/brand-consolidation/containers/VetsDotGov';

export default function DischargeWizardApp({ children }) {
  return (
    <div className="discharge-wizard">
      <VetsDotGov>
        <Breadcrumbs>
          <a href="/" id="dw-home-link">Home</a>
          <a href="/discharge-upgrade-instructions/" id="dw-instructions">Apply for a Discharge Upgrade</a>
        </Breadcrumbs>
      </VetsDotGov>
      <div className="row">
        <div
          className="columns small-12"
          aria-live="polite"
          aria-relevant="additions"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
