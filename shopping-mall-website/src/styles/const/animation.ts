import { colors } from '@/styles/const';
import { css } from 'styled-components';

const animation = {
  fadeIn: (duration: number, timing: string) => css`
    animation: fade-in ${duration}s ${timing};
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,

  fadeOut: (duration: number, timing: string) => css`
    animation: fade-out ${duration}s ${timing};
    @keyframes fade-out {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,

  fadeInToOut: (duration: number, timing: string) => css`
    animation: fade-in-out ${duration}s ${timing};
    @keyframes fade-in-out {
      0% {
        opacity: 0;
      }
      20% {
        opacity: 1;
      }
      80% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  `,

  scaleIn: (duration: number, timing: string) => css`
    visibility: visible;
    transition: visibility ${duration}s ${timing};
    animation: scale-in ${duration}s ${timing};
    @keyframes scale-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `,

  scaleOut: (duration: number, timing: string) => css`
    visibility: hidden;
    transition: visibility ${duration}s ${timing};
    animation: scale-out ${duration}s ${timing};
    @keyframes scale-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(0);
      }
    }
  `,

  /** loading button */
  leftSpinner: (duration: number, timing: string) => css`
    animation: left-spinner ${duration}s ${timing} infinite;
    -webkit-animation: left-spinner ${duration}s ${timing} infinite;

    @keyframes left-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white']};
      }
      50% {
        background-color: ${colors['$white-40']};
      }
      75% {
        background-color: ${colors['$white-40']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }

    @-webkit-keyframes left-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white']};
      }
      50% {
        background-color: ${colors['$white-40']};
      }
      75% {
        background-color: ${colors['$white-40']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }
  `,

  middleSpinner: (duration: number, timing: string) => css`
    animation: middle-spinner ${duration}s ${timing} infinite;
    -webkit-animation: middle-spinner ${duration}s ${timing} infinite;

    @keyframes middle-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white-40']};
      }
      50% {
        background-color: ${colors['$white']};
      }
      75% {
        background-color: ${colors['$white-40']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }

    @-webkit-keyframes middle-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white-40']};
      }
      50% {
        background-color: ${colors['$white']};
      }
      75% {
        background-color: ${colors['$white-40']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }
  `,

  rightSpinner: (duration: number, timing: string) => css`
    animation: right-spinner ${duration}s ${timing} infinite;
    -webkit-animation: right-spinner ${duration}s ${timing} infinite;

    @keyframes right-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white-40']};
      }
      50% {
        background-color: ${colors['$white-40']};
      }
      75% {
        background-color: ${colors['$white']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }

    @-webkit-keyframes right-spinner {
      0% {
        background-color: ${colors['$white-40']};
      }
      25% {
        background-color: ${colors['$white-40']};
      }
      50% {
        background-color: ${colors['$white-40']};
      }
      75% {
        background-color: ${colors['$white']};
      }
      100% {
        background-color: ${colors['$white-40']};
      }
    }
  `,

  spinCycle: (duration: number, timing: string) => css`
    animation: rotation ${duration}s linear ${timing};
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
};

export { animation };
