import React from 'react';

interface IStepPreloader {
  count?: number;
  colorPrimary?: string;
  colorSecondary?: string;
  delay?: number;
}

const StepPreloader = (props: IStepPreloader) => {
  const { colorPrimary, colorSecondary, count, delay } = props;
  const barItem = (item: number) => {
    const delaySec = 0.1 * item;
    return { animationDelay: `${delaySec}s` };
  };

  const barStyle1: React.CSSProperties = {
    width: '10px',
    height: '70px',
    display: 'inline-block',
    transformOrigin: 'bottom center',
    borderTopRightRadius: '20px',
    borderTopLeftRadius: '20px',
    animation: `animationStepPreloader ${delay as number}s linear infinite`,
    margin: '2px',
  };

  return (
    <>
      <style>
        {`
          @keyframes animationStepPreloader {
            0% {
              transform: scaleY(0.1);
              background: ${colorSecondary as string};
            }
            50% {
              transform: scaleY(1);
              background: ${colorPrimary as string};
            }
            100% {
              transform: scaleY(0.1);
              background: ${colorSecondary as string};
            }
          }
        `}
      </style>
      {Array.from(Array(count).keys()).map((item) => (
        <div key={item} style={{ ...barStyle1, ...barItem(item) }} />
      ))}
    </>
  );
};

StepPreloader.defaultProps = {
  count: 8,
  colorPrimary: '#1677ff',
  colorSecondary: 'transparent',
  delay: 1.2,
};

export default StepPreloader;
