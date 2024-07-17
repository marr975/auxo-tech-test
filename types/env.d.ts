export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BROWSER?: "chromium" | "firefox" | "webkit",
      ENV: "dev",
      URL: string,
      EMAIL: string,
      INITIALPASSWORD: string,
      PASSWORD: string
      HEADLESS: "true" | "false"
    }
  }
}