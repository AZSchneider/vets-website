export const isAnswering781Questions = formData =>
  formData['view:uploadPtsdChoice'] === 'answerQuestions';

export const isAnswering781AQuestions = formData =>
  formData['view:uploadPtsdSecondaryChoice'] === 'answerQuestions';

export const isUploading781Form = formData =>
  formData['view:uploadPtsdChoice'] === 'upload';

export const isUploading781AForm = formData =>
  formData['view:uploadPtsdSecondaryChoice'] === 'upload';

export const is781 = formData =>
  formData['view:selectablePtsdTypes']['view:combatPtsdType'] ||
  formData['view:selectablePtsdTypes']['view:noncombatPtsdType'];

export const is781a = formData =>
  formData['view:selectablePtsdTypes']['view:mstPtsdType'] ||
  formData['view:selectablePtsdTypes']['view:assaultPtsdType'];
