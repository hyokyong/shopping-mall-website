// 초를 입력받으면 시:분:초 로 변환해주는 함수
const timeConverter = (seconds?: number) => {
  if (!seconds) return '00:00:00';
  const hours = seconds >= 3600 ? Math.floor(seconds / 3600) : undefined;
  const remainingSeconds: number = seconds % 3600;
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const remainingSecondsInMinute = String(remainingSeconds % 60).padStart(2, '0');

  if (hours !== undefined) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(
      remainingSecondsInMinute,
    ).padStart(2, '0')}`;
  } else {
    return `${String(minutes).padStart(2, '0')}:${String(remainingSecondsInMinute).padStart(2, '0')}`;
  }
};

export default timeConverter;
