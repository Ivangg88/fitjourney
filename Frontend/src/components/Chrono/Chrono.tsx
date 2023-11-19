import { useEffect, useRef } from "react";

interface ChronoProps {
  setChronoTime: React.Dispatch<React.SetStateAction<number>>;
  chronoTime: number;
  start: boolean;
  className?: string;
}
const Chrono = ({
  chronoTime,
  setChronoTime,
  start,
  className,
}: ChronoProps) => {
  const timeOut = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const chrono = () => {
      timeOut.current = setTimeout(() => {
        setChronoTime((prevTime) =>
          prevTime > 0 ? Math.round(prevTime - 1) : 0
        );
      }, 1000);
    };
    if (chronoTime > 0 && start) {
      chrono();
    }

    if (chronoTime === 0) clearInterval(timeOut.current);
  }, [chronoTime, start, setChronoTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return <div className={className}>{formatTime(chronoTime)}</div>;
};

export default Chrono;
