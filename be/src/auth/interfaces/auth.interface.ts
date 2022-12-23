// レスポンスのメッセージの型
export interface Msg {
  message: string;
}

// CSRFトークンの型
export interface Csrf {
  csrfToken: string;
}

// JWTのアクセストークンの型
export interface Jwt {
  accessToken: string;
}
