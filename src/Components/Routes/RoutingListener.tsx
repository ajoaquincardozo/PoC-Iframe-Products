import React, { useEffect, useState } from "react";
import { Navigation } from "../../Models/Navigation";

export const RoutingListener = () => {
  useEffect(() => {
    window.addEventListener('message', function (event) {
      const allowedUrls = [
        "http://localhost:8082"
      ];

      if (allowedUrls.includes(event.origin)){
        const data: Navigation = JSON.parse(event.data);
        document.cookie = `${data.cookie.name}=${data.cookie.value}; SameSite=None; Secure`;
      }
    });
  }, []);

  return <></>;
};
