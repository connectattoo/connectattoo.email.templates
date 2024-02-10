import EmailConfirmation from './emails/email-confirmation';
import { templateLoader } from './emails/utils';

export const EmailConfirmationTemplate = async ({ name, confirmationLink}) => {
  return await templateLoader<{ name: any, confirmationLink: any}>(EmailConfirmation, { name, confirmationLink});
};