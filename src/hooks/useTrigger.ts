import {useEffect, useState} from 'react';

export const useTrigger = (func: () => any) => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (trigger) {
      func();
      setTrigger(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return () => setTrigger(true);
};
