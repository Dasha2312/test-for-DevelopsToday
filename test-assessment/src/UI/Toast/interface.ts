type IToastType = 'warning' | 'danger' | 'success' | 'info'

export interface IToast {
  message: string;
  toastType: IToastType;
  isIconClose?: boolean;
}

export interface IUseToast {
  initialState?: boolean;
  duration?: number
}