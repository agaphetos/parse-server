module.exports = {
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  serverURL: process.env.SERVER_URL || '',
  publicServerURL: process.env.SERVER_URL || '',
  cloud: process.env.PARSE_CLOUD_CODE,
  databaseURI: process.env.SERVER_DATABASE_URI,
  fileKey: process.env.FILE_KEY || '',
  appName: process.env.APP_NAME || '',
  startLiveQueryServer: (process.env.START_LIVE_QUERY_SERVER === "true") ? true : false,
  liveQuery: {
    classNames: [ process.env.LIVE_QUERY_CLASSNAMES ],
  },
  push: (process.env.PUSH_ENABLED === "true") ? {
    android: {
      apiKey: process.env.ANDROID_API_KEY,
    },
    ios: {
      token: {
        key: process.env.IOS_KEY,
        keyId: process.env.IOS_KEY_ID,
        teamId: process.env.IOS_TEAM_ID,
      },
      topic: process.env.IOS_TOPIC,
      production: process.env.IOS_PRODUCTION_MODE || false,
    }
  } : {},
  preventLoginWithUnverifiedEmail: (process.env.PREVENT_UNVERIFIED_LOGIN === "true") ? true : false,
  logLevel: process.env.LOG_LEVEL || "INFO",
  verifyUserEmails: (process.env.VERIFY_USER_EMAILS === "true") ? true : false,
  emailAdapter: (process.env.VERIFY_USER_EMAILS === "true") ? {
    module: process.env.EMAIL_ADAPTER,
    options: {
      fromAddress: process.env.EMAIL_FROM_ADDRESS,
      user: process.env.SMTP_USERNAME,
      password: process.env.SMTP_PASSWORD,
      host: process.env.SMTP_HOST,
      isSSL: (process.env.SMTP_SSL === "true") ? true : false,
      port: process.env.SMTP_PORT,
      templates: {
        //This template is used only for reset password email
        // resetPassword: {
        //Path to your template
        // template: __dirname + '/views/email/reset-password',
        //Subject for this email
        // subject: 'Reset your password'
        // },
        verifyEmail: {
          template: __dirname + '/views/email/verify',
          subject: 'Verify Email'
        }
      }
    }
  } : undefined,
}
