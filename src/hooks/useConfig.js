import { useEffect, useRef, useCallback } from "react";

export const useConfig = (config, getApiConfig) => {
  const getConfig = useCallback(() => {
    getApiConfig();
  }, [getApiConfig]);

  const fixedConfig = useRef();
  useEffect(() => {
    fixedConfig.current = config;
  });
  useEffect(() => {
    //if no config already
    if (
      Object.keys(fixedConfig.current).length === 0 &&
      fixedConfig.current.constructor === Object
    ) {
      getConfig();
    }
  }, [getConfig]);
};
