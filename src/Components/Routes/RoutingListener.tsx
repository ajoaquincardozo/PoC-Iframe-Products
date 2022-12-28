import React, { useEffect } from "react";
import { Navigation, AllowedDomains, AllowedDomainType } from ".";

export const RoutingListener = () => {
  useEffect(() => {
    window.addEventListener('message', function (event) {
      parent.postMessage({name: "log", origin: event.origin, data: event.data }, AllowedDomainType.production);

      if (AllowedDomains.includes(event.origin)){
        const data: Navigation = JSON.parse(event.data);
        document.cookie = `${data.cookie.name}=${data.cookie.value}; SameSite=None; Secure`;
      }
    });
  }, []);

  return <></>;
};
