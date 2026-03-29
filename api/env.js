export default function handler(req, res) {
  res.status(200).json({
    API_URL: process.env.API_URL,
    REFRESH_INTERVAL: Number(process.env.REFRESH_INTERVAL || 30000),
    APP_NAME: process.env.APP_NAME || "Status Dashboard"
  });
}
