import React from 'react';
import { PtsdNameTitle } from '../helpers';

const incidentIndividualNameDescription = () => (
  <p>
    Was anyone killed or injured, not including yourself, during this event?
  </p>
);

export const uiSchema = {
  'ui:title': ({ formData }) => (
    <PtsdNameTitle formData={formData} formType="781" />
  ),
  'ui:description': incidentIndividualNameDescription,
  // 'view:individualsInvolvedChoice': {
  //   'ui:title': incidentIndividualNameDescription,
  //   'ui:widget': 'radio',
  //   'ui:options': {
  //     labels: {
  //       yesOne: 'Yes, one other person',
  //       yesMany: 'Yes, many people were killed or injured',
  //       no: 'No, nobody was killed or injured',
  //     },
  //   },
  // },
};

export const schema = {
  type: 'object',
  properties: {
    individual: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        middleInitial: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        type: 'string',
      },
    },
  },
};
