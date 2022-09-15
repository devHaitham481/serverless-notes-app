import { Api } from '@serverless-stack/resources';

export function MyStack({ stack }) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'functions/lambda.handler',
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}

export function testStack({ stack }) {
  const api = new Api(stack, 'testApi', {
    routes: {
      'GET /test': 'functions/lambda.handler',
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
