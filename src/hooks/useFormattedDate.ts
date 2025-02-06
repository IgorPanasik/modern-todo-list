import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useFormattedDate = (date: Date | string) => {
  const { i18n } = useTranslation();
  const locale = i18n.language;
  const dateObj = typeof date === "string" ? new Date(date) : date;

  return useMemo(() => {
    return dateObj.toLocaleString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: locale.toLowerCase().startsWith("ru") ? false : true,
    });
  }, [dateObj, locale]);
};
