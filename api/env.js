export default function handler(req, res) {
  res.status(200).json({
    APP_NAME: process.env.APP_NAME,
    REFRESH_INTERVAL: Number(process.env.REFRESH_INTERVAL || 30000),
    ALERT_THRESHOLD_MS: Number(process.env.ALERT_THRESHOLD_MS || 1000),
    SERVICES: JSON.parse(process.env.SERVICES || "[]")
  });
}
