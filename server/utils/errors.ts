export namespace Core {
  export enum Codes {
    OK,
    NotImplemented,
    EmptyPayload  // no data sent with POST req
  }

  export class Messages {
    static OK = 'Ok'
    static NotImplemented = 'This is not implemented'
    static EmptyPayload = 'Empty payload'
  }
}


export namespace Auth {
  export enum Codes {
    UserNotLoggedIn,
    UserDoesNotExist,
    UserExistsAlready,
    WrongPassword,
    CantReadUsersDb,
    CantFindUser,
    PasswordUsernameNotInPayload
  }

  export class Messages {
    static UserNotLoggedIn = 'User is not authenticated'
    static UserDoesNotExists = 'No such user'
    static UserExistsAlready = 'User already exists'
    static WrongPassword = 'Wrong password'
    static CantReadUsersDb = 'Cannot read users from database'
    static PasswordUsernameNotInPayload = 'Must provide a username and password with the payload'
  }
}


export namespace Posts {
  export enum Codes {
    CantReadPostsDb,
    CantFindPost
  }

  export class Messages {
    static CantReadPostsDb = 'Cannot reads posts from database'
    static CantFindPost = 'Cannot find post'
  }
}
