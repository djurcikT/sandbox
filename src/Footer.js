import "/node_modules/primeflex/primeflex.css";
import "react-datepicker/dist/react-datepicker.css";
import "primeicons/primeicons.css";
import React, { useState } from "react";
import "primeflex/primeflex.css";
import "../src/Main.css";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
    en: { nativeName: "English" },
    sr: { nativeName: "Serbian" },
  };

export function Footer() {
    const { t, i18n } = useTranslation();
  return (
    <div className="FooterContainer pt-3">
      <div class="grid">
        <div class="col">
          <div class="text-center p-3"></div>
        </div>
        <div class="col">
          <div class="text-center p-3"></div>
        </div>
        <div class="col">
          <div class="text-center p-3">
          <p className="m-0">
            <Trans i18nKey="copyright"></Trans>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
