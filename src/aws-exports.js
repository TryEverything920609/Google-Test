/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:db1d46f3-42f7-49f9-a8f5-c4d5684b4737",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_JnTdy6S4i",
    "aws_user_pools_web_client_id": "7spvcjkiakvm4lre5fvjabsit2",
    "oauth": {
        "domain": "googletest4428cf33-4428cf33-staging.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/dashboard,https://main.d1hopvq5a4se2b.amplifyapp.com/dashboard",
        "redirectSignOut": "http://localhost:3000/,https://main.d1hopvq5a4se2b.amplifyapp.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [
        "GOOGLE",
        "AMAZON"
    ],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
