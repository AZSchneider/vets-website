import React from 'react';
import AdditionalInfo from '@department-of-veterans-affairs/formation/AdditionalInfo';

let incidentTitle;
let incidentText;

const getPtsdClassification781 = formData => {
  const classifications = formData['view:selectablePtsdTypes'];

  if (classifications['view:combatPtsdType']) {
    incidentTitle = 'Combat';
    incidentText = 'Combat';
  }
  if (classifications['view:noncombatPtsdType']) {
    incidentTitle =
      'Non-Combat PTSD other than Military Sexual Trama or Personal Assault';
    incidentText =
      'Non-Combat PTSD other than Military Sexual Trama or Personal Assault';
  }
  if (
    classifications['view:combatPtsdType'] &&
    classifications['view:noncombatPtsdType']
  ) {
    incidentTitle =
      'Combat & Non-Combat PTSD other than Military Sexual Trauma or Personal Assault';

    incidentText =
      'Combat and Non-Combat PTSD other than Military Sexual Trauma or Personal Assault';
  }
};

const getPtsdClassification781a = formData => {
  const classifications = formData['view:selectablePtsdTypes'];

  if (classifications['view:assaultPtsdType']) {
    incidentTitle = 'Personal Assault';
    incidentText = 'Personal Assault';
  }

  if (classifications['view:mstPtsdType']) {
    incidentTitle = 'Military Sexual Trauma';
    incidentText = 'Military Sexual Trauma';
  }

  if (
    classifications['view:assaultPtsdType'] &&
    classifications['view:mstPtsdType']
  ) {
    incidentTitle = 'Personal Assault & Military Sexual Trauma';
    incidentText = 'Personal Assault and Military Sexual Trauma';
  }
};

const introductionExplanationText = (
  <div>
    <p>
      As you go through these questions, your responses will be saved. So, if
      you need to take a break and come back to your application, your
      information will be here for you.
    </p>
    <p>
      Keep in mind, if you are in crisis, we can support you. Our Veterans
      Crisis Line is confidential (private), free, and available 24/7. To
      connect with a Veterans Crisis Line responder any time day or night:
    </p>
    <ul>
      <li>
        Call the Veterans Crisis Line at{' '}
        <a href="tel:1-800-273-8255">1-800-273-8255</a> and press 1,{' '}
        <strong>**or**</strong>
      </li>
      <li>
        Visit the{' '}
        <a href="https://www.veteranscrisisline.net/ChatTermsOfService.aspx?account=Veterans%20Chat/">
          Veterans Crisis Line
        </a>{' '}
        to start a confidential chat online, <strong>**or**</strong>
      </li>
      <li>
        Send a text message to <a href="sms:838255">838255</a>
        .
      </li>
    </ul>
    <p>Support for the deaf and hearing-impaired is also available.</p>
  </div>
);

export const introductionText = (
  <div>
    <p>
      We‘ll now ask you questions about the stressful event or events related to
      your PTSD. We understand that some of the questions maybe difficult to
      answer. The information you provide here will help us understand your
      situation and research your claim.
    </p>
    {introductionExplanationText}
  </div>
);

export const ptsdTypeDescription = () => {
  return (
    <div>
      <p>
        First we‘re going to ask you about the type of event or events that
        contributed to your PTSD.
      </p>
      <p>
        What type of event contributed to your PTSD? (Choose all that apply.)
      </p>
    </div>
  );
};

export const ptsdTypeHelp = () => {
  return (
    <AdditionalInfo triggerText="Which should I choose?">
      <h4>Types of Stressful incidents</h4>
      <h5>Combat</h5>
      <p>
        This means you participated in a fight or encounter with a military
        enemy or hostile unit or weapon. It also includes if you were present
        during these events either as a combatant or a Servicemember supporting
        combatants such as providing medical care to the wounded.
      </p>
      <h5>Military Sexual Trauma</h5>
      <p>
        This includes sexual harassment, sexual assault, or rape that happens in
        a military setting.
      </p>
      <h5>Personal Assault</h5>
      <p>
        This means a person, who isn‘t part of an enemy force, committed harm.
        Examples of personal assault include: assault, battery, robbery,
        mugging, stalking, or harassment.
      </p>
      <h5>Non-Combat other than Military Sexual Trama or Personal Assault</h5>
      <p>
        This means you experienced an event such as a car accident, hurricane,
        or plane crash, or witnessing the death, injury, or threat to another
        person or to yourself, caused by something other than a hostile military
        or terrorist activity.
      </p>
    </AdditionalInfo>
  );
};

export const ptsdNameTitle781 = ({ formData }) => {
  getPtsdClassification781(formData);

  return (
    <legend className="schemaform-block-title schemaform-title-underline">
      {incidentTitle}
    </legend>
  );
};

export const ptsdNameTitle781a = ({ formData }) => {
  getPtsdClassification781a(formData);

  return (
    <legend className="schemaform-block-title schemaform-title-underline">
      {incidentTitle}
    </legend>
  );
};

export const documentDescription = () => {
  return (
    <div>
      <p>
        You can upload your document in a pdf, .jpeg, or .png file format.
        You’ll first need to scan a copy of your document onto your computer or
        mobile phone. You can then upload the document from there. Please note
        that large files can take longer to upload with a slow Internet
        connection. Guidelines for uploading a file:
      </p>
      <ul>
        <li>File types you can upload: .pdf, .jpeg, or .png</li>
        <li>Maximum file size: 50 MB</li>
      </ul>
      <p>
        <em>
          Large files can be more difficult to upload with a slow Internet
          connection
        </em>
      </p>
    </div>
  );
};

export const incidentIntroduction781 = ({ formData }) => {
  getPtsdClassification781(formData);

  return (
    <div>
      <h3>{incidentText}</h3>
      {introductionExplanationText}
    </div>
  );
};

const uploadExplanation = (
  <div>
    <p>
      If you have already completed a Claim for Service Connection for
      Post-Traumatic Stress Disorder (VA Form 21-0781), you can upload it here
      instead of answering the questions about your PTSD.
    </p>
    <p>How would you like to provide information about your PTSD?</p>
  </div>
);

export const uploadPtsdDescription781 = ({ formData }) => {
  getPtsdClassification781(formData); // TODO: DRY-ER
  return (
    <div>
      <p>
        The following questions will help us understand more about your
        {` ${incidentText}`}-related PTSD. None of the questions we‘ll ask you
        are required, but any information you provide here will help us research
        your claim.
      </p>
      {uploadExplanation}
    </div>
  );
};

export const uploadPtsdDescription781a = ({ formData }) => {
  getPtsdClassification781a(formData); // TODO: DRY-ER
  return (
    <div>
      <p>
        The following questions will help us understand more about your
        {` ${incidentText}`}-related PTSD. None of the questions we‘ll ask you
        are required, but any information you provide here will help us research
        your claim.
      </p>
      {uploadExplanation}
    </div>
  );
};

export const incidentIntroduction781a = ({ formData }) => {
  getPtsdClassification781a(formData);
  return (
    <div>
      <h3>{incidentTitle}</h3>
      {introductionExplanationText}
    </div>
  );
};

export const ptsdChoiceDescription = (
  <AdditionalInfo triggerText="What does this mean?">
    <h5>Continue answering questions</h5>
    <p>
      If you choose to answer questions, we‘ll ask you several questions to
      learn more about your PTSD.
    </p>
    <h5>Upload VA Form 21-0781</h5>
    <p>
      If you upload a completed VA Form 21-0781, we won‘t ask you questions
      about your PTSD, and you‘ll move to the next section of the disability
      application.
    </p>
  </AdditionalInfo>
);

export const medalsDescription = ({ formData }) => {
  getPtsdClassification781(formData); // TODO: DRY-ER
  return (
    <div>
      <p>
        Now we'll ask about the event or events that caused your
        {` ${incidentText}`}-related PTSD. If there is more than one event you
        want to tell us about, we‘ll ask questions about each event separetely.
      </p>
      <p>Did you receive a medal or citation for the first event?</p>
    </div>
  );
};