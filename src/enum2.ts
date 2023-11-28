//Enum bring many imports since to use its member we need to be in enum
//with union string literals no import and we can use value as string

import { LoginMode, initiateLogin, initiateLogin3 } from "./enum";

initiateLogin(LoginMode.app);
// initiateLogin('app')

initiateLogin3("social");
