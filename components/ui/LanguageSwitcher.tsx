import { usePathname, useRouter } from "@/lib/i18n/navigation";
import { Icon } from "@iconify/react";
import { Dropdown, MenuProps } from "antd";
import { useLocale } from "next-intl";
import React, { startTransition } from "react";

type Props = {
  t: (key: string) => string;
};
const LOCALE_ICON_MAP = {
  en: "twemoji:flag-united-states",
  vi: "twemoji:flag-vietnam",
} as const;

type Locale = keyof typeof LOCALE_ICON_MAP;
const LanguageSwitcher = ({ t }: Props) => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathName = usePathname();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex gap-2 font-semibold ">
          <Icon
            className="hover:scale-110 cursor-pointer"
            icon={LOCALE_ICON_MAP.en}
            strokeWidth={1.5}
            fontSize={24}
          />
          {t("language.en")}
        </div>
      ),
      onClick: () => handleChangeLocale("en"),
    },
    {
      key: "2",
      label: (
        <div className="flex gap-2 font-semibold ">
          <Icon
            className="hover:scale-110 cursor-pointer"
            icon={LOCALE_ICON_MAP.vi}
            strokeWidth={1.5}
            fontSize={24}
          />
          {t("language.vi")}
        </div>
      ),
      onClick: () => handleChangeLocale("vi"),
    },
  ];

  const handleChangeLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathName, { locale: nextLocale });
    });
  };
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <span className="cursor-pointer inline-flex items-center">
        <Icon
          className="hover:scale-110 cursor-pointer"
          icon={LOCALE_ICON_MAP[locale]}
          strokeWidth={1.5}
          fontSize={24}
        />
      </span>
    </Dropdown>
  );
};

export default LanguageSwitcher;
