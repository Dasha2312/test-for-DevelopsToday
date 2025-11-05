export interface IMenuItems {
  label: string;
  link: string;
  subMenu?: IMenuItems[];
}