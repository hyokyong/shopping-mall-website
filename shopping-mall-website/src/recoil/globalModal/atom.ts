import { atom } from 'recoil';

type globalModalStateType = {
  isShow: boolean;
  title?: string;
  content?: string;
  onCallback?: () => void;
};

const globalModalState = atom<globalModalStateType>({
  key: 'globalModalState',
  default: {
    isShow: false,
    title: '',
    content: '',
    onCallback: undefined,
  },
});

export { globalModalState };
