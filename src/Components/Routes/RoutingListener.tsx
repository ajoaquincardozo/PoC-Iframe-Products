import React, { useEffect } from "react";
import { Navigation, AllowedDomains } from ".";

export const RoutingListener = () => {
  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (AllowedDomains.includes(event.origin)){
        const data: Navigation = JSON.parse(event.data);
        document.cookie = `${data.cookie.name}=${data.cookie.value}; SameSite=None; Secure`;
      }
    });
  }, []);

  return <></>;
};
