// import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'

import * as CdkBootstrap from '../lib/cdk-bootstrap-stack'

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

  test('Empty Stack', () => {
    const app = new cdk.App({
      context: {
        'testing-mainVpcCidr': {
          cidr: '10.11.12.13/24'
        }
      }
    })
    // WHEN
    const stack = new CdkBootstrap.CdkBootstrapStack(app, 'MyTestStack')
    console.log(stack)
    // THEN

    // TODO: introduce snapshot tests here
    // expectCDK(stack).to(
    //   matchTemplate(
    //     {
    //       Resources: {}
    //     },
    //     MatchStyle.EXACT
    //   )
    // )
  })
})
