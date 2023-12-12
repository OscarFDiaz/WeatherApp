export interface IEditUserModal {
  opened: boolean;
  onClose: () => void;
  id: number;
  avatar: string;
  name: string;
  lat: string;
  long: string;
}
