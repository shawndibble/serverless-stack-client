const dev = {
  STRIPE_KEY: "pk_test_AqRsTl7nvzFmxdryr3VqGDXW",
  s3: {
    REGION: "dev-notes-infra-s3-uploads4f6eb0fd-g8xh8situsv6",
    BUCKET: "us-east-2"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://omxwtzs8uj.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_jOvCreHqj",
    APP_CLIENT_ID: "1rbg3hi6gha4ljvei9mamn8n4",
    IDENTITY_POOL_ID: "us-east-2:8e7b9c1e-e722-4016-9515-03f5156f2d87"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_AqRsTl7nvzFmxdryr3VqGDXW",
  s3: {
    REGION: "us-east-2",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1isjx65r6iu3r"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://bx6d3p9ok1.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_yFMBn41Xr",
    APP_CLIENT_ID: "629rnrgn8464gk3jnufnlci0fa",
    IDENTITY_POOL_ID: "us-east-2:af7960ce-4423-49fa-a0bd-bf8b2fe206f7"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;