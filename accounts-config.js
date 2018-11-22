import { Accounts } from 'meteor/accounts-base';
// интерфейс учетных записей, чтобы использовать имена пользователей вместо электронной почты//
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});