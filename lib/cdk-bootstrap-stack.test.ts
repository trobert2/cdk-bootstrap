import { expect as expectCDK, haveResource } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'

import { CdkBootstrapStack } from './cdk-bootstrap-stack'

describe('testing vpc module', () => {
  const OLD_ENV_STAGE = process.env.STAGE
  const testingStage = 'testing'

  beforeEach(() => {
    jest.resetModules()
    process.env.STAGE = testingStage
  })

  afterAll(() => {
    process.env.STAGE = OLD_ENV_STAGE
  })

  test('Expect vpc exists', () => {
    const app = new cdk.App({
      context: {
        'testing-mainVpcCidr': {
          cidr: '10.11.12.13/24'
        }
      }
    })
    // WHEN
    const stack = new CdkBootstrapStack(app, 'MyTestStack')
    // THEN
    expectCDK(stack).to(haveResource('AWS::EC2::VPC'))
  })
})
