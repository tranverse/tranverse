"use client";
import { App, ConfigProvider, theme } from "antd";
import { useTheme } from "next-themes";

export default function AntProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme: currentTheme } = useTheme();
  const isDark = currentTheme === "dark";
  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "dark"
            ? theme.darkAlgorithm
            : theme.defaultAlgorithm,
        token: {
          colorBgContainer: isDark ? "rgba(17,7,31,0.85)" : "#ffffff",
          colorTextPlaceholder: "#9A94C8",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
