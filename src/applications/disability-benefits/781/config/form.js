import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';

import {
  is781,
  is781a,
  isAnswering781Questions,
  isAnswering781AQuestions,
  isUploading781Form,
  isUploading781AForm,
} from '../utils';

import {
  informationPage,
  ptsdType,
  ptsdChoice,
  ptsdSecondaryChoice,
  uploadPtsd,
  uploadPtsdSecondary,
  informationInterviewCombat,
  informationInterviewAssault,
  individualsInvolvedChoice,
  incidentIndividualName,
} from '../pages';

const formConfig = {
  urlPrefix: '/',
  submit: () =>
    Promise.resolve({ attributes: { confirmationNumber: '123123123' } }),
  trackingPrefix: 'ptsd-0781-0781a-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: '1234',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for benefits.',
    noAuth: 'Please sign in again to continue your application for benefits.',
  },
  title: 'Apply for increased disability compensation',
  chapters: {
    introductionPage: {
      pages: {
        ptsdIntroduction: {
          title: 'Disability Details',
          path: 'info',
          uiSchema: informationPage.uiSchema,
          schema: informationPage.schema,
        },
      },
    },
    disabilityDetails: {
      title: 'Disability Details',
      pages: {
        ptsdType: {
          title: 'PTSD Type',
          path: 'ptsdType',
          uiSchema: ptsdType.uiSchema,
          schema: ptsdType.schema,
        },
        ptsdChoice: {
          path: 'ptsdChoice',
          title: 'Disability Details',
          depends: form => is781(form),
          uiSchema: ptsdChoice.uiSchema,
          schema: ptsdChoice.schema,
        },
        uploadPtsd: {
          path: 'upload-781',
          title: 'Disability Details',
          depends: form => isUploading781Form(form) && is781(form),
          uiSchema: uploadPtsd.uiSchema,
          schema: uploadPtsd.schema,
        },
        informationInterviewCombat: {
          path: 'information-781',
          title: 'Disability Details',
          depends: form => isAnswering781Questions(form) && is781(form),
          uiSchema: informationInterviewCombat.uiSchema,
          schema: informationInterviewCombat.schema,
        },
        individualsInvolvedChoice: {
          title: 'Individuals Involved Choice',
          path: 'individualsInvolvedChoice',
          depends: form => isAnswering781Questions(form) && is781(form),
          uiSchema: individualsInvolvedChoice.uiSchema,
          schema: individualsInvolvedChoice.schema,
        },
        incidentIndividualName: {
          title: 'Individuals Involved Choice',
          path: 'individualsInvolvedChoice',
          depends: form => isAnswering781Questions(form) && is781(form),
          uiSchema: incidentIndividualName.uiSchema,
          schema: incidentIndividualName.schema,
        },

        ptsdSecondaryChoice: {
          path: 'ptsdSecondaryChoice',
          title: 'Disability Details',
          depends: form => is781a(form),
          uiSchema: ptsdSecondaryChoice.uiSchema,
          schema: ptsdSecondaryChoice.schema,
        },
        uploadPtsdSecondary: {
          path: 'upload-781a',
          title: 'Disability Details',
          depends: form => isUploading781AForm(form) && is781a(form),
          uiSchema: uploadPtsdSecondary.uiSchema,
          schema: uploadPtsdSecondary.schema,
        },
        informationInterviewAssault: {
          path: 'information-781a',
          title: 'Disability Details',
          depends: form => isAnswering781AQuestions(form) && is781a(form),
          uiSchema: informationInterviewAssault.uiSchema,
          schema: informationInterviewAssault.schema,
        },
      },
    },
  },
};

export default formConfig;
