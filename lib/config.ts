import * as dotenv from "dotenv";

dotenv.config();

const config = {
  debugMode: process.env.DEBUG_MODE === "true",
  enableGuestUsers: process.env.ALLOW_SLACK_GUEST_USERS === "true",
  npmPackage: require("./../package.json"),
  slackApiKey: process.env.SLACK_API_KEY,
  unsafeLocalDev: process.env.UNSAFE_LOCAL_DEV === "true",
};

if (config.unsafeLocalDev) {
  // Allow communicating with Lookers running on localhost with self-signed certificates
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
}

export default config;
