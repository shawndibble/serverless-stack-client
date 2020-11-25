const config = {
  STRIPE_KEY: "pk_test_AqRsTl7nvzFmxdryr3VqGDXW",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-ryd8s587va1x",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://bx6d3p9ok1.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_5hkB8Isz5",
    APP_CLIENT_ID: "3md0bsu15gh9duff8bcgn6dgrr",
    IDENTITY_POOL_ID: "us-east-2:c9c9e9a2-5c63-4ee6-b217-e9b42962433f",
  },
};

export default config;