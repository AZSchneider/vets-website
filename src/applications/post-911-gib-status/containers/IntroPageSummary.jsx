import React from 'react';
import { Link } from 'react-router';

import CallToActionWidget from '../../../platform/site-wide/cta-widget';
import CallHelpDesk from '../../../platform/brand-consolidation/components/CallHelpDesk';

export function VetsDotGovSummary() {
  // TODO: Determine whether h2 is right--accessibility-wise, it is, but it's larger than the design
  return (
    <div>
      <h2>How can I review my Post-9/11 GI Bill benefits?</h2>
      <p>
        The Post-9/11 GI Bill Benefits tool is available for you during these
        hours, Sunday through Friday, 6:00 a.m. to 10:00 p.m. (ET), and Saturday
        6:00 a.m. to 7:00 p.m. (ET).
      </p>
      <Link id="viewGIBS" to="status" className="usa-button va-button-primary">
        View Your GI Bill Benefits
      </Link>
      <h2>What if I’m having trouble accessing my benefit statement?</h2>
      <p>
        Your Post-9/11 GI Bill Statement of Benefits might not be available if
        one of these is true:
        <ul>
          <li>
            The name on your Vets.gov account doesn’t exactly match the name we
            have in our Post-9/11 GI Bill records.
          </li>
          <li>
            We’re still processing your education benefits application and we
            haven’t yet created a record for you. We usually process
            applications within 60 days. If you applied less than 60 days ago,
            please check back soon.
          </li>
          <li>
            You haven’t yet applied for Post-9/11 GI Bill education benefits.{' '}
            <a href="/education/apply/" target="_blank">
              Apply for education benefits.
            </a>
          </li>
          <li>You’re not eligible for Post-9/11 GI Bill education benefits.</li>
          <li>
            You’re trying to access the tool during its scheduled downtime. The
            tool is available Sunday through Friday, 6:00 a.m. to 10:00 p.m.
            (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET).
          </li>
        </ul>
        If none of the above situations applies to you, and you think your
        Statement of Benefits should be here, please{' '}
        <CallHelpDesk>
          call the Vets.gov Help Desk at 1-855-574-7286. We’re here Monday
          through Friday, 8:00 a.m. to 8:00 p.m. (ET).
        </CallHelpDesk>
      </p>
    </div>
  );
}

export default function BrandConsolidationSummary() {
  return (
    <div itemScope itemType="http://schema.org/FAQPage">
      <div itemProp="description" className="va-introtext">
        <p>
          If you served on active duty after September 10, 2001, you and your
          dependents may qualify for Post-9/11 GI Bill education benefits. These
          benefits can help cover all or some of the costs for school or
          training. Check to see if you have any Post-9/11 GI Bill benefits, and
          find out how much money you have left to use for your education or
          training.
        </p>
      </div>
      <CallToActionWidget appId="gi-bill-benefits" />
      <p>
        <strong>Note:</strong> This tool is available Sunday through Friday,
        6:00 a.m. to 10:00 p.m. (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET).
      </p>
      <h2 itemProp="name">Am I eligible to use this tool?</h2>
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="http://schema.org/Answer"
      >
        <div itemProp="text">
          <p>
            You can use this tool if you meet all of the requirements listed
            below.
          </p>
          <p>
            <strong>Both of these must be true. You:</strong>
          </p>
          <ul>
            <li>
              Have applied for Post-9/11 GI Bill Benefits, <strong>and</strong>
            </li>
            <li>Received a decision from us on your application</li>
          </ul>
          <p>
            <a href="/education/apply/">
              Find out how to apply for Post-9/11 GI Bill benefits
            </a>
            .
          </p>
          <p>
            <strong>And you must have one of these free accounts:</strong>
          </p>
          <ul>
            <li>
              A premium <strong>My HealtheVet</strong> account,
              <strong>or</strong>
            </li>
            <li>
              A <strong>DS Logon</strong> account (used for eBenefits and
              milConnect), <strong>or</strong>
            </li>
            <li>
              A verified <strong>ID.me</strong> account that you can create here
              on VA.gov
            </li>
          </ul>
          <p>
            <strong>Note:</strong> If you use <strong>DS Logon</strong>, you’ll
            need to verify your identity online as part of our sign-in process.
          </p>
          <p>
            Please see the blue sign-in module above to learn more about signing
            in, creating or upgrading an account, and verifying your identity.
          </p>
        </div>
      </div>
      <h2 itemProp="name">What benefits information will I be able to see?</h2>
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="http://schema.org/Answer"
      >
        <div itemProp="text">
          <p>
            <strong>
              In your Post-9/11 GI Bill Statement of Benefits, you’ll see:
            </strong>
          </p>
          <ul>
            <li>If you have any Post-9/11 GI Bill benefits</li>
            <li>
              How much money you have left to use for your education or training
            </li>
            <li>How much time you have left to use these benefits</li>
          </ul>
        </div>
      </div>
      <h2 itemProp="name">
        What if I’m having trouble seeing my Statement of Benefits?
      </h2>
      <div
        itemProp="acceptedAnswer"
        itemScope
        itemType="http://schema.org/Answer"
      >
        <div itemProp="text">
          <p>
            Your Post-9/11 GI Bill Statement of Benefits might not be available
            if one of these is true:
          </p>
          <ul>
            <li>
              The name on the account you’re signed in with doesn’t exactly
              match the name we have in our Post-9/11 GI Bill records.
            </li>
            <li>
              We’re still processing your education benefits application, so we
              haven’t created a record yet for you. We usually process
              applications within 60 days. If you applied less than 60 days ago,
              please check back soon.
            </li>
            <li>
              You haven’t applied yet for Post-9/11 GI Bill education benefits.{' '}
              <br />
              <a href="/education/apply/">Apply for education benefits</a>.
            </li>
            <li>You’re not eligible for Post-9/11 GI Bill benefits.</li>
            <li>
              You’re trying to access the tool during its scheduled downtime.
              This tool is available Sunday through Friday, 6:00 a.m. to 10:00
              p.m. (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET).
            </li>
          </ul>
          <p>
            If none of the above situations applies to you, and you think your
            Statement of Benefits should be here, please{' '}
            <CallHelpDesk>
              call the VA.gov Help Desk at{' '}
              <a href="tel:+18555747286">1-855-574-7286</a>. We’re here Monday
              through Friday, 8:00 a.m. to 8:00 p.m. (ET)
            </CallHelpDesk>
          </p>
        </div>
      </div>
    </div>
  );
}
