import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: 'authStorage',
  storage: sessionStorage,
});

const tokenState = atom<string>({
  key: 'tokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

const rfTokenState = atom<string>({
  key: 'rfTokenState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export { rfTokenState, tokenState };
