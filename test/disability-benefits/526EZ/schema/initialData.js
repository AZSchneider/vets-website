export default {
  // For testing purposes only
  prefilled: true,
  fullName: {
    first: 'Sally',
    last: 'Alphonse'
  },
  socialSecurityNumber: '234234234',
  vaFileNumber: '345345345',
  gender: 'F',
  dateOfBirth: '1990-04-02',
  veteran: {
    mailingAddress: {
      country: 'USA',
      addressLine1: '234 Apple Grove'
    },
    emailAddress: 'sample@email.com',
    primaryPhone: '2342342342'
  },
  directDeposit: {
    noBank: true,
  },
  servicePeriods: [
    {
      serviceBranch: 'Army',
      dateRange: {
        from: '1990-02-02',
        to: '2010-03-04'
      }
    }
  ],
  disabilities: [
    {
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'PTSD',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '12345',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '67890',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    },
    {
      disability: { // Is this extra nesting necessary?
        diagnosticText: 'Second Disability',
        decisionCode: 'Filler text', // Should this be a string?
        // Is this supposed to be an array?
        specialIssues: {
          specialIssueCode: 'Filler text',
          specialIssueName: 'Filler text'
        },
        ratedDisabilityId: '54321',
        disabilityActionType: 'Filler text',
        ratingDecisionId: '09876',
        diagnosticCode: 'Filler text',
        // Presumably, this should be an array...
        secondaryDisabilities: [
          {
            diagnosticText: 'First secondary disability',
            disabilityActionType: 'Filler text'
          },
          {
            diagnosticText: 'Second secondary disability',
            disabilityActionType: 'Filler text'
          }
        ]
      }
    }
  ]
};
