import React from 'react';
import dateRangeUI from 'us-forms-system/lib/js/definitions/dateRange';

import { PtsdNameTitle } from '../helpers';

const ptsdAssignmentDescription = () => (
  <div>
    <h5>Your assignment</h5>
    <p>
      Name of the unit you were assigned to when this event happened. (This can
      include your division, wing, battalion, cavalry, ship, etc.)
    </p>
  </div>
);

const ptsdAssignmentDatesDescription = () => (
  <p>Dates you were assigned to this unit</p>
);

export const uiSchema = {
  'ui:title': ({ formData }) => (
    <PtsdNameTitle formData={formData} formType="781" />
  ),
  'ui:description': ptsdAssignmentDescription,
  unitAssigned: {
    'ui:title': ' ',
  },
  unitAssignedDates: {
    ...dateRangeUI('From', 'To', 'The date must be after Start date'),
    'ui:title': ptsdAssignmentDatesDescription,
  },
};

export const schema = {
  type: 'object',
  properties: {
    unitAssigned: {
      type: 'string',
      maxLength: 100,
    },
    unitAssignedDates: {
      type: 'object',
      properties: {
        from: {
          type: 'string',
        },
        to: {
          type: 'string',
        },
      },
    },
  },
};
