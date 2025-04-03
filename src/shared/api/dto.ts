export type RegDto = {
  /** E-Mail пользователя */
  email: string;

  /** Пароль (4-12 символов) */
  password: string;

  /** Подтверждение пароля */
  confirm_password: string;
};

export type User = {
  id: number;

  /** E-Mail пользователя */
  email: string;
};

export type AuthDto = {
  /** E-Mail пользователя */
  email: string;

  /** Пароль (4-12 символов) */
  password: string;
};

export type TokenDto = {
  /** JWT-токен доступа */
  accessToken: string;
};

export type Note = {
  id: number;

  /** Заголовок заметки */
  title: string;

  /**
   * Содержимое заметки
   * @example "Сегодня эмо-сходка на Трубной"
   * */
  content: string;
};

export type CreateNoteDto = {
  /** Заголовок заметки */
  title: string;

  /**
   * Содержимое заметки
   * @example "Сегодня эмо-сходка на Трубной"
   * */
  content: string;
};
